import {useState} from "react";

export interface Text {
    id: number,
    message: string,
    length: number,
}

const TextList = ((init : Text[]) => {
    const [texts, setText] = useState(init);

    const add = (text: Text)=>{
        setText(texts => [...texts, text]);
        setTimeout(()=>{
            setText ( prevList => {
                const list =[...prevList];
                list.shift()
                return list;
            })
        }, 12000)
    }

    return [texts, add] as const;
})

export default TextList;