import {useState} from 'react'
import './App.css'
import {AnimatePresence} from "framer-motion";

//import TextList from './parts/TextList'

function App() {

    const [newText, setnewText] = useState('');
    //const [textList, setTextList] = TextList([]);

    //const lastText = textList[textList.length - 1];
    //const move : number = lastText ? lastText.height : 0;

  return (
    <>
      <div className={"App"}>
        <div className={"Container"}>
            <AnimatePresence>

            </AnimatePresence>

            <button className={"Balloon"}>This is first text</button>

        </div>
      </div>

    </>
  )
}

export default App
