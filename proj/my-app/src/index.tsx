import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//
// 
document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});


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
  const calcButtonWidth = ()=> {
    return (window.innerWidth -myMargine)/4.5
  }
  const calcButtonHeight = ()=> {
    return (window.innerHeight -myMargine)/7.5
  }
  const calcGapSize = () => {
    return ((window.innerWidth-myMargine)-buttonWidth*4)/3
  }
  const calcFontSize = ()=> {
    return calcButtonWidth()*0.5    
  }
  const [result, setResult] = useState<number>(0)
  const [buttonWidth, setButtonWidth] = useState<number>(calcButtonWidth()) 
  const [buttonHeight, setButtonHeight] = useState<number>(calcButtonHeight()) 
  const [gapSize, setGapSize] = useState<number>(calcGapSize())
  const [fontSize, setFontSize] = useState<number>(calcFontSize())
  console.log(`isze ${window.innerWidth} ${window.innerHeight}`)
  /*
  React.useEffect(() => {
    function handleResize() {
      console.log(`resze ${window.innerWidth} ${window.innerHeight}`)
      setMyWindowSize({
        height: window.innerHeight-20,
        width: window.innerWidth-20
      })
      setResult(window.innerWidth)
      setButtonWidth(calcButtonWidth())
      setButtonHeight(calcButtonHeight())
      setGapSize(calcGapSize())
      setFontSize(calcFontSize())
    }
    window.addEventListener('resize', handleResize)
    //window.addEventListener('onorientationchange', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      //window.removeEventListener('onorientationchange', handleResize)
    }
  })*/

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
          gap:'auto',//`${gapSize}px`,
          fontSize: `${fontSize}px`
        }}>
          <div className="pb-5 flex col-start-1 col-end-5 row-start-1 items-end justify-end h-full w-full text-white">
            <div className="">{result}</div>
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
