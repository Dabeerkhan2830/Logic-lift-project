'use client'

import { useEffect, useRef } from 'react'
import styles from './SpaceBackground.module.css'

interface Star {
  x: number
  y: number
  z: number
  o: number
}

interface Nebula {
  x: number
  y: number
  radius: number
  color: string
  opacity: number
  speed: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  life: number
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let stars: Star[] = []
    let nebulas: Nebula[] = []
    let shootingStars: ShootingStar[] = []
    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Create stars
      stars = Array.from({ length: 400 }, () => ({
        x: (Math.random() - 0.5) * canvas.width * 2,
        y: (Math.random() - 0.5) * canvas.height * 2,
        z: Math.random() * canvas.width,
        o: 0.3 + Math.random() * 0.7,
      }))

      // Create nebulas
      nebulas = Array.from({ length: 5 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 150 + Math.random() * 200,
        color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`,
        opacity: 0.1 + Math.random() * 0.15,
        speed: 0.2 + Math.random() * 0.3,
      }))
    }

    const drawNebula = (nebula: Nebula) => {
      const gradient = ctx.createRadialGradient(
        nebula.x,
        nebula.y,
        0,
        nebula.x,
        nebula.y,
        nebula.radius
      )
      // Enhanced purple theme colors for nebulas
      const colors = [
        [147, 51, 234], // Primary Purple
        [168, 85, 247], // Light Purple
        [216, 112, 147], // Pink
        [124, 58, 237], // Dark Purple
      ]
      const colorIndex = nebulas.indexOf(nebula) % colors.length
      const [r, g, b] = colors[colorIndex]
      
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${nebula.opacity})`)
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${nebula.opacity * 0.5})`)
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2)
      ctx.fill()
    }

    const drawShootingStar = (star: ShootingStar) => {
      ctx.save()
      ctx.strokeStyle = `rgba(255, 255, 255, ${star.life})`
      ctx.lineWidth = 2
      ctx.shadowBlur = 10
      ctx.shadowColor = 'rgba(255, 255, 255, 0.8)'
      
      ctx.beginPath()
      ctx.moveTo(star.x, star.y)
      ctx.lineTo(
        star.x - Math.cos(star.angle) * star.length,
        star.y - Math.sin(star.angle) * star.length
      )
      ctx.stroke()
      
      // Trail
      const gradient = ctx.createLinearGradient(
        star.x,
        star.y,
        star.x - Math.cos(star.angle) * star.length,
        star.y - Math.sin(star.angle) * star.length
      )
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.life})`)
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.strokeStyle = gradient
      ctx.stroke()
      
      ctx.restore()
    }

    const spawnShootingStar = () => {
      if (Math.random() > 0.995) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: -20,
          length: 30 + Math.random() * 50,
          speed: 2 + Math.random() * 3,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.5,
          life: 1,
        })
      }
    }

    const draw = () => {
      if (!ctx) return
      time++
      
      // Deep space background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, 'rgba(5, 5, 20, 0.95)')
      gradient.addColorStop(0.5, 'rgba(10, 5, 30, 0.95)')
      gradient.addColorStop(1, 'rgba(5, 10, 25, 0.95)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw nebulas
      nebulas.forEach((nebula) => {
        nebula.x += Math.sin(time * 0.001 * nebula.speed) * 0.5
        nebula.y += Math.cos(time * 0.001 * nebula.speed) * 0.5
        drawNebula(nebula)
      })

      // Draw stars (warp speed effect)
      for (const s of stars) {
        s.z -= 4
        if (s.z <= 0) {
          s.z = canvas.width
          s.x = (Math.random() - 0.5) * canvas.width * 2
          s.y = (Math.random() - 0.5) * canvas.height * 2
        }

        const k = 128.0 / s.z
        const px = s.x * k + canvas.width / 2
        const py = s.y * k + canvas.height / 2

        if (px >= -50 && px <= canvas.width + 50 && py >= -50 && py <= canvas.height + 50) {
          const size = (1 - s.z / canvas.width) * 3
          
          // Create star glow with purple theme
          const gradient = ctx.createRadialGradient(px, py, 0, px, py, size * 4)
          const colors = [
            { r: 147, g: 51, b: 234 }, // Primary Purple
            { r: 168, g: 85, b: 247 }, // Light Purple
            { r: 216, g: 112, b: 147 }, // Pink
            { r: 124, g: 58, b: 237 }, // Dark Purple
          ]
          const color = colors[Math.floor(Math.random() * colors.length)]
          
          gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${s.o})`)
          gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${s.o * 0.5})`)
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
          
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(px, py, size * 4, 0, Math.PI * 2)
          ctx.fill()
          
          // Star core
          ctx.fillStyle = `rgba(255, 255, 255, ${s.o})`
          ctx.beginPath()
          ctx.arc(px, py, size * 0.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Update and draw shooting stars
      spawnShootingStar()
      shootingStars = shootingStars.filter((star) => {
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed
        star.life -= 0.02
        
        if (star.life > 0 && star.y < canvas.height + 50) {
          drawShootingStar(star)
          return true
        }
        return false
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)

    // Parallax cursor movement
    const handleMouseMove = (e: MouseEvent) => {
      const offsetX = ((e.clientX / window.innerWidth - 0.5) * 40) / 2
      const offsetY = ((e.clientY / window.innerHeight - 0.5) * 40) / 2
      canvas.style.transform = `translate(${offsetX}px, ${offsetY}px)`
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} id="space-bg" className={styles.canvas} />
}
