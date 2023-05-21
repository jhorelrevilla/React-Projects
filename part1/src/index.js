import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// const Hello = ({name,age}) =>{
//   const bornYear = () => new Date().getFullYear() - age

//   return(
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you are probably born in {bornYear()}</p>
//     </div>
//   )
// }
// const Footer = () => {
//   return(
//     <div>
//       greeting app created by <a href='https://github.com/jhorelrevilla'> Jhorel Revilla </a>
//     </div>
//   )
// }

// const Display = ({counter}) => <div> {counter} </div>

// const Button = ({text, handleClick}) => (
//   <button onClick={handleClick}>
//       {text}
//     </button>
// )

// const App = () => {
//   const [counter,setCounter] = useState(0)

//   const increasedByOne = () => setCounter (counter+1)
//   const decreasedByOne = () => setCounter (counter-1)
//   const setZero = () => setCounter (0)

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button handleClick={increasedByOne} text="plus" />
//       <Button handleClick={setZero} text="zero" />
//       <Button handleClick={decreasedByOne} text="minus" />
//     </div>
//   )
// }
/* Part 1d */
//------------------------ Manejo de matrices
// const History = ({allClicks}) => {
//   if (allClicks.length === 0){
//     return (
//       <div>
//         The app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({onClick,text}) => (
//   <button onClick={onClick}>
//     text
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} text="left"/>
//       <Button onClick={handleRightClick} text="right"/>
//       {right}
    
//       <History allClicks={allClicks}/>

//     </div>
//   )
// }
//------------------------ Funcion que retorna una funcion
const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () =>{
  const [value,setValue] = useState(10)

  const setToValue = (newValue) =>{
    setValue(newValue)
  }

  return(
    <div>
      {value}
      <Button handleClick={() => setToValue(1000)} text={"thousand"}/>
      <Button handleClick={() => setToValue(0)} text={"reset"}/>
      <Button handleClick={() => setToValue(value+1)} text={"increment"}/>
      {/* <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button> */}
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root')) 
