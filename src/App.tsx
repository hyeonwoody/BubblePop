import {useCallback, useState} from 'react'
import './App.css'
import {AnimatePresence} from "framer-motion";

import TextList from './parts/TextList'
import Bubble from "./parts/Bubble/Bubble.tsx";
import BubbleInput from "./parts/Bubble/BubbleInput.tsx";
function App() {

    const [newText, setNewText] = useState('');
    const [textList, add] = TextList([]);

    const handleCommit = useCallback((bubbleLength: number)=>{
        if (newText.length > 0){
            add({id:+new Date(), message: newText, length: bubbleLength});
            setNewText('');
        }
    },[newText, textList])

    const lastText = textList[textList.length - 1];
    const move : number = lastText ? lastText.length : 0;

    return (
        <>
            <div className={"App"}>
                <div className={"Container"}>
                    <AnimatePresence>
                        {textList.map (text =>(
                            <Bubble key={text.id} id={text.id} move={move}>
                                {text.message}
                            </Bubble>
                            ))}
                    </AnimatePresence>

                    <BubbleInput value={newText} onChange={setNewText} onCommit={handleCommit}>

                    </BubbleInput>
                </div>
            </div>

        </>
    )
}

export default App
