import { useState, useEffect } from "react"

const Letters = ({ addLetter }: { addLetter: (letter: string) => void }) => {
    const [capsLock, setCapsLock] = useState(false)
    const [shiftPressed, setShiftPressed] = useState(false)
    const russianAlphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("")

    const toggleCapsLock = () => {
        setCapsLock(!capsLock)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Shift") {
                setShiftPressed(true)
            }
            if (e.getModifierState("CapsLock")) {
                setCapsLock(true)
            }
        }

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === "Shift") {
                setShiftPressed(false)
            }
            if (!e.getModifierState("CapsLock")) {
                setCapsLock(false)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyup", handleKeyUp)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
        }
    }, [])

    const isUpperCase = capsLock || shiftPressed

    return (
        <div className="flex flex-wrap mb-6">
            <button
                onClick={toggleCapsLock}
                className="px-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white relative mr-2"
            >
                CapsLock
                <span className={`absolute top-1 right-1 h-2 w-2 ${capsLock ? "bg-green-500" : "bg-gray-500"} rounded-full`}></span>
            </button>
            {russianAlphabet.map((letter, index) => (
                <button
                    key={index}
                    onClick={() => addLetter(isUpperCase ? letter.toUpperCase() : letter.toLowerCase())}
                    className={`p-2 w-10 h-10 flex items-center justify-center ${
                        index % 2 === 0 ? "bg-gray-300 dark:bg-gray-600" : "bg-gray-400 dark:bg-gray-500"
                    } text-black dark:text-white`}
                >
                    {isUpperCase ? letter.toUpperCase() : letter.toLowerCase()}
                </button>
            ))}
        </div>
    )
}

export default Letters
