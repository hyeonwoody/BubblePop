import {useState} from "react";

export interface Text {
    id: number,
    message: string,
    length: number,
}

const TextList = ((init : Text[]) => {
    const [texts, setText] = useState(init);

})