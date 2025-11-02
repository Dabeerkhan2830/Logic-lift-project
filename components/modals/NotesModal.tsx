'use client'

import styles from './Modal.module.css'

interface NotesModalProps {
  onClose: () => void
}

const notesContent = [
  {
    title: 'Variables and Data Types',
    description: 'This is the most fundamental concept. Programs need to store and manage information, and they do this using variables.',
    sections: [
      {
        subtitle: 'Variables',
        content: 'A variable is a named container in memory that holds a value. You can think of it as a labeled box where you store a piece of information.',
        example: 'age = 25',
        explanation: [
          'Here, age is the variable\'s name (the label on the box).',
          '25 is the value (the data inside the box).'
        ]
      },
      {
        subtitle: 'Data Types',
        content: 'This defines what kind of data the "box" can hold. This is crucial because a computer handles a number very differently from a piece of text.',
        types: [
          { name: 'Integer (int)', desc: 'Whole numbers, both positive and negative (e.g., -5, 0, 100).' },
          { name: 'Floating-Point (float or double)', desc: 'Numbers with a decimal point (e.g., 9.81, -0.005).' },
          { name: 'String (str)', desc: 'A sequence of text characters, always enclosed in quotes (e.g., "Hello", \'JavaScript\').' },
          { name: 'Boolean (bool)', desc: 'Represents logical values. It can only be one of two things: True or False. This is the foundation of all decision-making in code.' },
          { name: 'Null (or None, nil)', desc: 'A special type that represents the absence of a value. It\'s an empty box, on purpose.' }
        ]
      }
    ]
  },
  {
    title: 'Control Structures (Control Flow)',
    description: 'This is how you control the order in which your code executes. Instead of just running from top to bottom, you can make it make decisions and repeat actions.',
    sections: [
      {
        subtitle: 'Conditionals (Making Decisions)',
        content: 'Conditionals use Boolean logic (True or False) to decide which path to take.',
        items: [
          {
            term: 'if',
            definition: 'Runs a block of code only if a condition is true.',
            analogy: '"If it is raining, then I will take an umbrella."'
          },
          {
            term: 'else',
            definition: 'Runs a block of code if the if condition was false.',
            analogy: '"...else, I will wear sunglasses."'
          },
          {
            term: 'else if (or elif)',
            definition: 'Lets you chain multiple checks together.',
            analogy: '"If it\'s raining, take an umbrella. Else if it\'s sunny, wear sunglasses. Else (if it\'s just cloudy), I\'ll just wear a hat."'
          }
        ],
        example: `if (score > 90):
    print("Grade: A")
else if (score > 80):
    print("Grade: B")
else:
    print("Grade: C")`
      },
      {
        subtitle: 'Loops (Repeating Actions)',
        content: 'Loops are used to run the same block of code multiple times, saving you from writing it over and over.',
        items: [
          {
            term: 'while Loop',
            definition: 'Repeats a block of code as long as a condition remains true. You use this when you don\'t know exactly how many times you need to loop.',
            analogy: '"While the car is not full, keep letting passengers in."',
            example: `count = 1
while (count <= 5):
    print(count)
    count = count + 1  // This will print 1, 2, 3, 4, 5`
          },
          {
            term: 'for Loop',
            definition: 'Repeats a block of code a specific number of times. You use this when you want to iterate over a sequence (like a list of items).',
            analogy: '"For each student in the classroom, hand out one exam paper."',
            example: `fruits = ["Apple", "Banana", "Cherry"]
for (fruit in fruits):
    print(fruit) // This will print "Apple", then "Banana", then "Cherry"`
          }
        ]
      }
    ]
  },
  {
    title: 'Functions (Methods or Procedures)',
    description: 'Functions are reusable blocks of code that perform a specific task. They are the main way to keep your code organized, clean, and efficient (a principle called DRY: Don\'t Repeat Yourself).',
    sections: [
      {
        content: 'A function is like a recipe. It has:',
        items: [
          { term: 'A Name', desc: '(e.g., makePancakes).' },
          { term: 'Parameters (Inputs)', desc: 'The ingredients you give it (e.g., flour, eggs, milk).' },
          { term: 'A Body', desc: 'The set of instructions to follow (e.g., mix ingredients, heat pan, cook).' },
          { term: 'A Return Value (Output)', desc: 'The final result (e.g., aPlateOfPancakes).' }
        ],
        example: `// Defines the function with two parameters: num1 and num2
function addNumbers(num1, num2):
    total = num1 + num2
    return total  // Returns the result

// Calls (uses) the function
sum = addNumbers(5, 10)
print(sum) // This will print 15`
      }
    ]
  },
  {
    title: 'Data Structures',
    description: 'If variables are single "boxes," data structures are "organizers" for those boxes. They are ways of storing and organizing multiple pieces of data.',
    sections: [
      {
        subtitle: 'Array (or List)',
        content: 'The most common structure. It\'s an ordered collection of items, stored one after another. You access items using an index (a number, usually starting at 0).',
        analogy: 'A numbered list or a row of mailboxes.',
        example: 'myGrades = [95, 80, 100, 72]',
        note: 'To get the first item: myGrades[0] (which is 95).'
      },
      {
        subtitle: 'Dictionary (or Map, Object)',
        content: 'A collection of key-value pairs. It\'s unordered. You access values using a unique key (usually a string) instead of a number.',
        analogy: 'A real dictionary. The "key" is the word you look up, and the "value" is its definition.',
        example: `student = {
  "name": "Alex",
  "id": 12345,
  "major": "CSE"
}`,
        note: 'To get the name: student["name"] (which is "Alex").'
      }
    ]
  },
  {
    title: 'Object-Oriented Programming (OOP)',
    description: 'This is a very important style or paradigm of programming used by major languages (Java, Python, C++, C#). It\'s a way of modeling your program around "objects" that represent real-world things.',
    sections: [
      {
        content: 'An object bundles its data (properties) and its functions (methods) together.',
        example: 'A Car object.',
        details: [
          'Properties (Data): color = "red", currentSpeed = 0, fuelLevel = 50.',
          'Methods (Functions): startEngine(), accelerate(), brake().'
        ],
        concepts: [
          {
            term: 'Class',
            definition: 'The blueprint for creating objects. The Car class is the design; a specific myRedFerrari is the object (or instance) built from that blueprint.'
          },
          {
            term: 'Encapsulation',
            definition: 'The idea of keeping an object\'s data (properties) private and only allowing it to be changed by its own functions (methods). This prevents other parts of the code from accidentally breaking it.'
          },
          {
            term: 'Inheritance',
            definition: 'Allows you to create a new class (a "child") that inherits all the properties and methods from an existing class (a "parent"). This is great for code reuse.',
            example: 'Example: A Truck class can inherit from the Vehicle class. It gets all the Vehicle methods (like startEngine()) but can also add its own, like lowerTailgate().'
          },
          {
            term: 'Polymorphism',
            definition: '("Many forms"). This means that different objects can respond to the same command in different ways.',
            example: 'Example: If you have a Dog object and a Cat object, and you tell both to speak(), the Dog will bark() and the Cat will meow().'
          }
        ]
      }
    ]
  },
  {
    title: 'Algorithms and Syntax',
    description: '',
    sections: [
      {
        items: [
          {
            term: 'Algorithm',
            definition: 'This is just a step-by-step set of instructions for solving a problem. Your code is the implementation of your algorithm.',
            analogy: 'A recipe is an algorithm. Your program is you actually cooking the meal.'
          },
          {
            term: 'Syntax',
            definition: 'These are the grammar rules of a specific language.',
            details: [
              'In C, you end a line with a semicolon (;) and use {} for blocks.',
              'In Python, you don\'t use semicolons, and you use indentation (whitespace) for blocks.',
              'Learning a new language is mostly just learning its new syntax for these same common concepts.'
            ]
          }
        ]
      }
    ]
  }
]

export default function NotesModal({ onClose }: NotesModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px', maxHeight: '85vh' }}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <h2>📚 Programming Fundamentals Notes</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.9)' }}>
          Essential concepts every programmer should know
        </p>
        
        <div style={{ maxHeight: '65vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
          {notesContent.map((note, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(147, 51, 234, 0.1)',
                border: '1px solid rgba(147, 51, 234, 0.3)',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                transition: 'all 0.3s ease',
              }}
            >
              <h3 style={{ 
                color: '#9333EA', 
                marginTop: '0', 
                marginBottom: '0.8rem',
                fontSize: '1.3rem',
                fontWeight: '700'
              }}>
                {note.title}
              </h3>
              
              {note.description && (
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.85)', 
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  {note.description}
                </p>
              )}

              {note.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} style={{ marginBottom: '1.5rem' }}>
                  {'subtitle' in section && section.subtitle && (
                    <h4 style={{ 
                      color: '#D87093', 
                      marginTop: '1rem',
                      marginBottom: '0.5rem',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>
                      {section.subtitle}
                    </h4>
                  )}

                  {'content' in section && section.content && (
                    <p style={{ 
                      color: 'rgba(255, 255, 255, 0.8)', 
                      marginBottom: '0.8rem',
                      lineHeight: '1.6'
                    }}>
                      {section.content}
                    </p>
                  )}

                  {'items' in section && section.items && section.items.map((item, itemIndex) => (
                    <div key={itemIndex} style={{ 
                      marginBottom: '1rem',
                      paddingLeft: '1rem',
                      borderLeft: '2px solid rgba(147, 51, 234, 0.3)'
                    }}>
                      <strong style={{ color: '#A855F7', display: 'block', marginBottom: '0.3rem' }}>
                        {item.term}:
                      </strong>
                      <p style={{ 
                        color: 'rgba(255, 255, 255, 0.75)', 
                        margin: '0.3rem 0',
                        lineHeight: '1.6'
                      }}>
                        {'definition' in item ? item.definition : 'desc' in item ? item.desc : ''}
                      </p>
                      {'analogy' in item && item.analogy && (
                        <p style={{ 
                          color: 'rgba(216, 112, 147, 0.9)', 
                          fontStyle: 'italic',
                          margin: '0.3rem 0',
                          lineHeight: '1.6'
                        }}>
                          💡 Analogy: {item.analogy}
                        </p>
                      )}
                      {'details' in item && item.details && item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} style={{ 
                          color: 'rgba(255, 255, 255, 0.7)', 
                          margin: '0.2rem 0',
                          paddingLeft: '1rem',
                          lineHeight: '1.5'
                        }}>
                          • {detail}
                        </p>
                      ))}
                      {'example' in item && item.example && (
                        <pre style={{
                          background: 'rgba(0, 0, 0, 0.4)',
                          padding: '0.8rem',
                          borderRadius: '8px',
                          overflowX: 'auto',
                          marginTop: '0.5rem',
                          border: '1px solid rgba(147, 51, 234, 0.2)',
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '0.85rem',
                          lineHeight: '1.5'
                        }}>
                          {item.example}
                        </pre>
                      )}
                    </div>
                  ))}

                  {'types' in section && section.types && section.types.map((type, typeIndex) => (
                    <div key={typeIndex} style={{ 
                      marginBottom: '0.8rem',
                      paddingLeft: '1rem'
                    }}>
                      <strong style={{ color: '#A855F7' }}>{type.name}:</strong>
                      <span style={{ 
                        color: 'rgba(255, 255, 255, 0.75)',
                        marginLeft: '0.5rem'
                      }}>
                        {type.desc}
                      </span>
                    </div>
                  ))}

                  {'example' in section && section.example && (
                    <pre style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      padding: '1rem',
                      borderRadius: '8px',
                      overflowX: 'auto',
                      marginTop: '0.8rem',
                      border: '1px solid rgba(147, 51, 234, 0.2)',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.9rem',
                      lineHeight: '1.5'
                    }}>
                      {section.example}
                    </pre>
                  )}

                  {'note' in section && section.note && (
                    <p style={{ 
                      color: 'rgba(216, 112, 147, 0.9)', 
                      marginTop: '0.5rem',
                      fontStyle: 'italic'
                    }}>
                      💡 {section.note}
                    </p>
                  )}

                  {'analogy' in section && section.analogy && (
                    <p style={{ 
                      color: 'rgba(216, 112, 147, 0.9)', 
                      fontStyle: 'italic',
                      marginTop: '0.5rem'
                    }}>
                      💡 Analogy: {section.analogy}
                    </p>
                  )}

                  {'details' in section && section.details && section.details.map((detail, detailIndex) => (
                    <p key={detailIndex} style={{ 
                      color: 'rgba(255, 255, 255, 0.75)', 
                      margin: '0.3rem 0',
                      lineHeight: '1.6'
                    }}>
                      • {detail}
                    </p>
                  ))}

                  {'concepts' in section && section.concepts && section.concepts.map((concept, conceptIndex) => (
                    <div key={conceptIndex} style={{ 
                      marginBottom: '1rem',
                      padding: '0.8rem',
                      background: 'rgba(147, 51, 234, 0.05)',
                      borderRadius: '8px',
                      borderLeft: '3px solid rgba(147, 51, 234, 0.5)'
                    }}>
                      <strong style={{ color: '#9333EA', display: 'block', marginBottom: '0.3rem' }}>
                        {concept.term}:
                      </strong>
                      <p style={{ 
                        color: 'rgba(255, 255, 255, 0.8)', 
                        margin: '0.3rem 0',
                        lineHeight: '1.6'
                      }}>
                        {concept.definition}
                      </p>
                      {concept.example && (
                        <p style={{ 
                          color: 'rgba(216, 112, 147, 0.9)', 
                          marginTop: '0.5rem',
                          fontStyle: 'italic',
                          lineHeight: '1.6'
                        }}>
                          💡 {concept.example}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

