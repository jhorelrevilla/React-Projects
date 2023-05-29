import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Note from './components/Note'
import axios from 'axios';
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]
//-----------------------------  Part 2a 


// const App = ({notes}) =>{
  
//   return(
//     <div>
//       <h1> Notes </h1>
//       <ul>
//         {
//           notes.map(
//             note=>(
//               <Note key={note.id} note={note}/>
//             )
//           )
//         }
//       </ul>
//     </div>
//   )
// }
//-----------------------------  Part 2b 
// const App = (props) =>{
//   const [notes,setNotes]=useState(props.notes)
//   const [newNote,setNewNode]=useState('a new Note ...')
//   const [showAll,setShowAll]=useState(true)
//   const addNote=(event)=>{
//     event.preventDefault()
//     const noteObject={
//       id:notes.length+1,
//       content:newNote,
//       date: new Date().toISOString(),
//       import: Math.random() < 0.5,
//     }
//     console.log('button clicked',event.target)
//     setNotes(notes.concat(noteObject))
//     setNewNode('')
//   }
//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNode(event.target.value)
//   }

//   const notesToShow=showAll?notes:notes.filter(note=>note.important)

//   return(
//     <div>
//       <h1> Notes </h1>
//       <div>
//         <button onClick={()=>setShowAll(!showAll)}>
//           show {showAll?'important':'all'}
//         </button>
//       </div>
//       <ul>
//         {
//           notesToShow.map(
//             note=>(
//               <Note key={note.id} note={note}/>
//             )
//           )
//         }
//       </ul>
//       <form onSubmit={addNote}>
//         <input 
//           value={newNote} 
//           onChange={handleNoteChange}
//         />
//         <button type='submit'>save</button>
//       </form>
//     </div>
//   )
// }
// ReactDOM.render(<App notes={notes}/>, document.getElementById('root')) 
//-----------------------------  Part 2c 
// const App = (props) =>{
//   const [notes,setNotes]=useState([])
//   const [newNote,setNewNode]=useState('a new Note ...')
//   const [showAll,setShowAll]=useState(true)

//   const hook = ()=>{
//     console.log('effect')
//     axios
//       .get('http://localhost:3001/notes')
//       .then(response=>{
//         console.log('promise fulfilled')
//         setNotes(response.data)
//       })
//   }

//   console.log('render',notes.length,'notes')

//   useEffect(hook,[])

//   const addNote=(event)=>{
//     event.preventDefault()
//     const noteObject={
//       id:notes.length+1,
//       content:newNote,
//       date: new Date().toISOString(),
//       import: Math.random() < 0.5,
//     }
//     console.log('button clicked',event.target)
//     setNotes(notes.concat(noteObject))
//     setNewNode('')
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNode(event.target.value)
//   }

//   const notesToShow=showAll?notes:notes.filter(note=>note.important)

//   return(
//     <div>
//       <h1> Notes </h1>
//       <div>
//         <button onClick={()=>setShowAll(!showAll)}>
//           show {showAll?'important':'all'}
//         </button>
//       </div>
//       <ul>
//         {
//           notesToShow.map(
//             note=>(
//               <Note key={note.id} note={note}/>
//             )
//           )
//         }
//       </ul>
//       <form onSubmit={addNote}>
//         <input 
//           value={newNote} 
//           onChange={handleNoteChange}
//         />
//         <button type='submit'>save</button>
//       </form>
//     </div>
//   )
// }
//-----------------------------  Part 2d
const App = (props) =>{
  const [notes,setNotes]=useState([])
  const [newNote,setNewNode]=useState('a new Note ...')
  const [showAll,setShowAll]=useState(true)

  const hook = ()=>{
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response=>{
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }

  console.log('render',notes.length,'notes')

  useEffect(hook,[])

  const addNote=(event)=>{
    event.preventDefault()
    const noteObject={
      content:newNote,
      date: new Date().toISOString(),
      import: Math.random() < 0.5,
    }
    axios
      .post('http://localhost:3001/notes',noteObject)
      .then(response=>{
        console.log(response)
        setNotes(notes.concat(response.data))
        setNewNode('')
      })
  }
  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNode(event.target.value)
  }

  const notesToShow=showAll?notes:notes.filter(note=>note.important)

  return(
    <div>
      <h1> Notes </h1>
      <div>
        <button onClick={()=>setShowAll(!showAll)}>
          show {showAll?'important':'all'}
        </button>
      </div>
      <ul>
        {
          notesToShow.map(
            note=>(
              <Note key={note.id} note={note}/>
            )
          )
        }
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote} 
          onChange={handleNoteChange}
        />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}
ReactDOM.render(
  <App/>, 
  document.getElementById('root')
)



