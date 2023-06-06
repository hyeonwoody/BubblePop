import {useState} from 'react'
import './App.css'
import {AnimatePresence} from "framer-motion";

function App() {

    const [newText, setnewText] = useState('');

  return (
    <>
      <div className={"App"}>
        <div className={"Container"}>
            <AnimatePresence>

            </AnimatePresence>

            <button className={"Balloon"}>This is first message</button>

        </div>
      </div>

    </>
  )
}

export default App
