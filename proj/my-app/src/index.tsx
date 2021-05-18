import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface WindowSize {
  height: number,
  width: number
}

function App(params: any) {


  const myMargine = 20
  const [myWindowSize, setMyWindowSize] = useState<WindowSize>({
    height: window.innerHeight-20,
    width: window.innerWidth-20
  })
  const calcButtonSize = ()=> {
    return (window.innerWidth -myMargine)/4.5
  }
  const calcGapSize = () => {
    return ((window.innerWidth-myMargine)-buttonSize*4)/3
  }
  const calcFontSize = ()=> {
    return calcButtonSize()*0.5    
  }
  const [buttonSize, setButtonSize] = useState<number>(calcButtonSize()) 
  const [gapSize, setGapSize] = useState<number>(calcGapSize())
  const [fontSize, setFontSize] = useState<number>(calcFontSize())
  console.log(`isze ${window.innerWidth} ${window.innerHeight}`)
  React.useEffect(() => {
    function handleResize() {
      console.log(`resze ${window.innerWidth} ${window.innerHeight}`)
      setMyWindowSize({
        height: window.innerHeight-20,
        width: window.innerWidth-20
      })
      setButtonSize(calcButtonSize())
      setGapSize(calcGapSize())
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  /*grid-cols-4 grid-rows-6*/
  return (
    <React.StrictMode>
        <div className="grid gap-4 items-center justify-items-center m-1" style={{
          gridTemplateColumns: `repeat(4, ${buttonSize}px)`,
          gridTemplateRows: `auto repeat(5, ${buttonSize}px)`,
          width:`${myWindowSize.width-40}px`,
          height:`${myWindowSize.height-40}px`,
          gap:`${gapSize}px`,
          fontSize: `${fontSize}px`
        }}>
          <div className="pb-5 flex col-start-1 col-end-5 row-start-1 items-end justify-end h-full w-full text-white">
            <div className="">Numberasdfs</div>
          </div>
          <div className="calc-button-b">
            <div className="mx-auto">AC</div>
          </div>
          <div className="calc-button-b">
            <div >+/-</div>
          </div>
          <div className="calc-button-b">
            <div >%</div>
          </div>
          <div className="calc-button-a">
            <div >/</div>
          </div>
          <div className="calc-button-c">
            <div >7</div>
          </div>
          <div className="calc-button-c">
            <div >8</div>
          </div>
          <div className="calc-button-c">
            <div >9</div>
          </div>
          <div className="calc-button-a">
            <div >*</div>
          </div>

          <div className="calc-button-c">
            <div >4</div>
          </div>
          <div className="calc-button-c" >
            <div >5</div>
          </div>
          <div className="calc-button-c">
            <div >6</div>
          </div>
          <div className="calc-button-a">
            <div >-</div>
          </div>

          <div className="calc-button-c">
            <div >1</div>
          </div>
          <div className="calc-button-c">
            <div >2</div>
          </div>
          <div className="calc-button-c">
            <div >3</div>
          </div>
          <div className="calc-button-a">
            <div >+</div>
          </div>

          <div className="col-span-2 calc-button-c">
            <div >0</div>
          </div>
          <div className="calc-button-c">
            <div >.</div>
          </div>
          <div className="calc-button-a">
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

/*
ReactDOM.render(
  <React.StrictMode>

    <div className="p-1 max-w-sm mx-auto bg-gray-800 rounded-sm shadow-md grid grid-cols-4 auto-rows-fr gap-x-2 gap-y-2 text-pink-200 text-center items-center">
      <div className="col-start-1 col-end-5 h-16 flex items-end justify-end">
        <div className="inline-block text-6xl">0</div>
      </div>

      <div className={cssCalcButtonCont(ButtonType.Option)}>
        <div className={cssCalcButton(ButtonType.Option)}>AC</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Option)}>
        <div className={cssCalcButton(ButtonType.Option)}>+/-</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Option)}>
        <div className={cssCalcButton(ButtonType.Option)}>%</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Action)}>
        <div className={cssCalcButton(ButtonType.Action)}>/</div>
      </div>

      <div className={cssCalcButtonCont(ButtonType.Number)}>
        <div className={cssCalcButton(ButtonType.Number)}>7</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Number)}>
        <div className={cssCalcButton(ButtonType.Number)}>8</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Number)}>
        <div className={cssCalcButton(ButtonType.Number)}>9</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Action)}>
        <div className={cssCalcButton(ButtonType.Action)}>*</div>
      </div>

      <div className={cssCalcButtonCont(ButtonType.Number)}>
        <div className={cssCalcButton(ButtonType.Number)}>4</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Number)}>
        <div className={cssCalcButton(ButtonType.Number)}>5</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Number)}>
        <div className={cssCalcButton(ButtonType.Number)}>6</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Action)}>
        <div className={cssCalcButton(ButtonType.Action)}>-</div>
      </div>

      <div className={cssCalcButtonCont(ButtonType.Number)}>
        <div className={cssCalcButton(ButtonType.Number)}>1</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Number)}>
        <div className={cssCalcButton(ButtonType.Number)}>2</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Number)}>
        <div className={cssCalcButton(ButtonType.Number)}>3</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Action)}>
        <div className={cssCalcButton(ButtonType.Action)}>+</div>
      </div>

      <div className={`col-start-1 col-end-3 ${cssCalcButtonCont(ButtonType.Number, "w-36", "h-12")}`}>
        <div className={cssCalcButton(ButtonType.Number)}>0</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Number)}>
        <div className={cssCalcButton(ButtonType.Number)}>.</div>
      </div>
      <div className={cssCalcButtonCont(ButtonType.Action)}>
        <div className={cssCalcButton(ButtonType.Action)}>=</div>
      </div>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
*/
