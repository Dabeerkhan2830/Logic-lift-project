'use client'

import { useState } from 'react'
import styles from './Modal.module.css'

interface CodeEditorModalProps {
  onClose: () => void
}

export default function CodeEditorModal({ onClose }: CodeEditorModalProps) {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')

  const handleRun = () => {
    try {
      // Note: Using eval is dangerous in production - this is just for demo
      const result = eval(code)
      setOutput(result === undefined ? 'Code executed successfully!' : String(result))
    } catch (err: any) {
      setOutput(`Error: ${err.message}`)
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <h2>Interactive Code Editor</h2>
        <p>Try coding directly in the editor below!</p>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
          rows={10}
          className={styles.codeArea}
        />
        <button onClick={handleRun} className={styles.btn}>
          Run Code
        </button>
        {output && <pre className={styles.output}>{output}</pre>}
      </div>
    </div>
  )
}
