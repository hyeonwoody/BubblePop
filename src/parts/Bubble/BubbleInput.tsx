import {
    KeyboardEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react'
import './BubbleInput.css'

interface BubbleInputProps {
    value: string
    onChange: (value: string) => void
    onCommit: (length: number) => void
    children?: React.ReactNode;
}

const BubbleInput = ({ value, onChange, onCommit }: BubbleInputProps) => {
    const refEditable = useRef<HTMLDivElement>(null)
    const refContainer = useRef<HTMLDivElement>(null)
    const [committed, setCommitted] = useState(false)

    const handleKeyDown: KeyboardEventHandler = e => {
        const { current: elContainer } = refContainer
        const { current: elEditable } = refEditable
        if (elContainer === null || elEditable === null) return

        const { isComposing } = e.nativeEvent
        if (e.key === 'Enter' && !isComposing) {
            const length = elContainer.clientHeight
            onCommit(length)
            e.preventDefault()
            setCommitted(true)
            requestAnimationFrame(() => {
                elEditable.focus()
                elEditable.innerText = ''
                setCommitted(false)
            })
        }
    }
    const handleBlur = useCallback(() => {
        const { current: elDiv } = refEditable
        if (elDiv) {
            elDiv.focus()
        }
    }, [refEditable])

    useEffect(handleBlur, [handleBlur])

    return (
        <div
            ref={refContainer}
            className={`bubble input  ${value.length === 0 ? 'empty' : ''} ${
                committed ? 'submitted' : ''
            }`}
        >
            <div className={"BubbleInputContainer"}>
                <svg
                    className={"svg-overlay"}
                    width="80"
                    height="40"
                    viewBox="0 0 101 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.76659 64C32.9695 64 6.14435 0 37.3473 0H69C86.6731 0 101 14.3269 101 32V32C101 49.6731 86.691 64 69.0179 64C36.6723 64 -7.35562 64 1.76659 64V64Z"
                        fill="white"
                    />
                </svg>
                <div
                    ref={refEditable}
                    className="bubble-content"
                    contentEditable
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    onInput={e => onChange(e.currentTarget.innerText)}
                />
            </div>


        </div>
    )
}

export default BubbleInput