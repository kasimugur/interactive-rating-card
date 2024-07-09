import { useContext, useEffect, useState } from 'react'
import './css/card.css'
import { SiteContext } from '../Context'
export default function Card() {
  const { setSelect } = useContext(SiteContext)
  const [selectedText, setSelectedText] = useState('')
  const [activeButton, setActiveButton] = useState(null)

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId)
  }

  const divHandleClick = (event) => {
    const text = event.target.textContent;
    setSelectedText(text);
  }
  const handleClick = () => {
    setSelect(selectedText)

  }

  const spanColor = {
    backgroundColor: 'hsl(0, 0%, 100%)',
    color: '#000',

  }
  const defaultColor = {
    backgroundColor: ' '

  }

  return (
    <>
      <div className="container">
        <div className="box">

          <svg className='icon' width="30" height="28" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" /></svg>
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. Allfeedback is appreciated to help us improve our offering!</p>
          <div className="span">
            {[1, 2, 3, 4, 5].map((id) => (
              <span style={activeButton === `button${id}` ? spanColor : defaultColor} key={id} onClickCapture={divHandleClick} onClick={() => handleButtonClick(`button${id}`)} >{id}</span>
            ))}
          </div>
          <button onClick={() => handleClick()} >SUBMIT</button>
        </div>
      </div>
    </>
  )
}