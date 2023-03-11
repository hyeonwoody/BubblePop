import { useState, useCallback } from "react";

const textArray = (init =[]) => {
    const [messages, setMessages] = useState(init)

  const addMessage = useCallback(
    msg => {
      setMessages([...messages, msg])
      setTimeout(() => {
        setMessages(current => {
          const n = [...current]
          n.shift()
          return n
        })
      }, 15000)
    },
    [messages]
  )

  return [messages, addMessage]
}

export default textArray;