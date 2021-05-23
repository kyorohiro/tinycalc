import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//
// 
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, { passive: false });


interface WindowSize {
  height: number,
  width: number
}

function App(params: any) {

  console.log("call App")

  const myMargine = 20
  const calcFontSize = () => {
    var h = (window.innerHeight - myMargine) / 8
    return h * 0.4
  }

  // gui
  const [fontSize, setFontSize] = useState<number>(calcFontSize())

  // calc
  const [result, setResult] = useState<number>(0)
  const [action, setActoion] = useState<string>('none')
  const [numberBoard, setNumberBoard] = useState<string>('0')
  const [numberBoardValue, setNumberBoardValue] = useState<string>('0')

  console.log(`isze ${window.innerWidth} ${window.innerHeight}`)

  React.useEffect(() => {
    function handleResize() {
      console.log(`resze ${window.innerWidth} ${window.innerHeight}`)
      setFontSize(calcFontSize())
    }
    window.addEventListener('resize', handleResize)
    //window.addEventListener('onorientationchange', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      //window.removeEventListener('onorientationchange', handleResize)
    }
  })
  const doAction = () => {
    console.log(`[doAction] ${action} ${result} ${numberBoard} ${numberBoardValue}`)
    var n = Number(numberBoardValue)
    if (action == "+") {
      setResult(result + n)
      setNumberBoard(`${result+n}`)
      setNumberBoardValue('0')
    } else if (action == "+") {
      setResult(result + n)
      setNumberBoard(`${result+n}`)
      setNumberBoardValue('0')
    } else if (action == "-") {
      setResult(result - n)
      setNumberBoard(`${result-n}`)
      setNumberBoardValue('0')
    } else if (action == "*") {
      setResult(result * n)
      setNumberBoard(`${result*n}`)
      setNumberBoardValue('0')
    } else if (action == "/") {
      setResult(result / n)
      setNumberBoard(`${result/n}`)
      setNumberBoardValue('0')
    } else {
      setResult(n)
      setNumberBoard(`${result}`)
      setNumberBoardValue('0')
    }

    return n
  }
  const clickBtn = (e: any) => {
    switch (e) {
      case "AC":
        console.log("AC")
        setResult(0)
        setNumberBoard('0')
        setNumberBoardValue('0')
        break
      case "=":
        doAction()
        setActoion('none')
        break;
      case "+":
        doAction()
        setActoion(e)
        break
      case "-":
        doAction()
        setActoion(e)
        break
      case "*":
        doAction()
        setActoion(e)
        break
      case "/":
        doAction()
        setActoion(e)
        break
      case ".":
        setNumberBoard(numberBoardValue +e)
        setNumberBoardValue(numberBoardValue +e)
        break
      default://0-9
      console.log(`[call default] ${action} ${result} ${numberBoard} ${numberBoardValue}`)
        if (numberBoardValue == '0') {
          setNumberBoard(e)
          setNumberBoardValue(e)
        } else {
          setNumberBoard(numberBoardValue +e)
          setNumberBoardValue(numberBoardValue +e)
        }

    }
  }

  /*grid-cols-4 grid-rows-6*/
  return (
    <React.StrictMode>
      <div className="grid gap-4 items-center justify-items-center m-1" style={{
        gridTemplateColumns: `repeat(4, 1fr)`,
        gridTemplateRows: `2fr repeat(5, 1fr)`,
        width: '100%',
        height: '100vh',
        //width:`${myWindowSize.width-40}px`,
        //height:`${myWindowSize.height-40}px`,
        gap: 'auto',//`${gapSize}px`,
        fontSize: `${fontSize}px`
      }}>
        <div className="flex col-start-1 col-end-5 row-start-1 items-end justify-end h-full w-full bg-gray-900 text-white">
          <div className="">{numberBoard}</div>
        </div>
        <div className="calc-button-b items-center justify-center" onClick={() => { clickBtn("AC") }}>
          <div>AC</div>
        </div>
        <div className="calc-button-b" onClick={() => { clickBtn("+/-") }}>
          <div >+/-</div>
        </div>
        <div className="calc-button-b" onClick={() => { clickBtn("%") }}>
          <div >%</div>
        </div>
        <div className="calc-button-a" onClick={() => { clickBtn("/") }}>
          <div >/</div>
        </div>
        <div className="calc-button-c" onClick={() => { clickBtn('7') }}>
          <div >7</div>
        </div>
        <div className="calc-button-c" onClick={() => { clickBtn('8') }}>
          <div >8</div>
        </div>
        <div className="calc-button-c" onClick={() => { clickBtn('9') }}>
          <div >9</div>
        </div>
        <div className="calc-button-a" onClick={() => { clickBtn("*") }}>
          <div >*</div>
        </div>

        <div className="calc-button-c" onClick={() => { clickBtn('4') }}>
          <div >4</div>
        </div>
        <div className="calc-button-c" onClick={() => { clickBtn('5') }}>
          <div >5</div>
        </div>
        <div className="calc-button-c" onClick={() => { clickBtn('6') }}>
          <div >6</div>
        </div>
        <div className="calc-button-a" onClick={() => { clickBtn("-") }}>
          <div >-</div>
        </div>

        <div className="calc-button-c" onClick={() => { clickBtn('1') }}>
          <div >1</div>
        </div>
        <div className="calc-button-c" onClick={() => { clickBtn('2') }}>
          <div >2</div>
        </div>
        <div className="calc-button-c" onClick={() => { clickBtn('3') }}>
          <div >3</div>
        </div>
        <div className="calc-button-a" onClick={() => { clickBtn('+') }}>
          <div >+</div>
        </div>

        <div className="col-span-2 calc-button-c" onClick={() => { clickBtn('0') }}>
          <div >0</div>
        </div>
        <div className="calc-button-c" onClick={() => { clickBtn('.') }}>
          <div >.</div>
        </div>
        <div className="calc-button-a" onClick={() => { clickBtn('=') }}>
          <div >=</div>
        </div>

      </div>
    </React.StrictMode>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
