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
  const calcFontSize = ()=> {
    var h=  (window.innerHeight -myMargine)/8
    return h*0.4
  }
  const [result, setResult] = useState<number>(0)
  const [fontSize, setFontSize] = useState<number>(calcFontSize())
  console.log(`isze ${window.innerWidth} ${window.innerHeight}`)
  
  React.useEffect(() => {
    function handleResize() {
      console.log(`resze ${window.innerWidth} ${window.innerHeight}`)
      setResult(window.innerWidth)
      setFontSize(calcFontSize())
    }
    window.addEventListener('resize', handleResize)
    //window.addEventListener('onorientationchange', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      //window.removeEventListener('onorientationchange', handleResize)
    }
  })

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
          <div className="flex col-start-1 col-end-5 row-start-1 items-end justify-end h-full w-full bg-gray-900 text-white">
            <div className="">{result}</div>
          </div>
          <div className="calc-button-b items-center justify-center">
            <div>AC</div>
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
