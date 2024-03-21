import {useRef, useState} from "react"
import {toggleDarkMode, translit} from "./utils"
import Modal from "./components/Modal"

const App = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [translitVersion, setTranslitVersion] = useState("v1")

    const textAreaRef = useRef(null)

    const modeSwitch = () => {
        setDarkMode(!darkMode)
        toggleDarkMode()
    }

    const runTranslit = (e: any) => {
        translit(translitVersion, textAreaRef, e.nativeEvent.data)
    }

    return (
        <div className="h-screen dark:text-white bg-gray-100 text-gray-900 dark:bg-black transition-all delay-300">
            <div
                className={`flex flex-col items-center justify-center font-sans ${
                    showModal && "blur-lg"
                }`}
            >
                <div className="mb-8 p-4 w-full bg-orange-300 dark:bg-orange-400 delay-300">
                    <h1 className="text-4xl font-bold text-center">Транслит</h1>
                </div>
                <div className="mb-8 w-full px-4">
                    <div className="flex justify-between">
                        <div>
                            <span
                                onClick={() => setTranslitVersion("mac")}
                                className="pr-2 text-black dark:text-white hover:underline cursor-pointer delay-300"
                            >
                                Mac
                            </span>
                            <span
                                onClick={() => setTranslitVersion("v1")}
                                className="pr-2 text-black dark:text-white hover:underline cursor-pointer delay-300"
                            >
                                V1
                            </span>
                        </div>
                        <div>
                            <span
                                onClick={modeSwitch}
                                className="pr-2 text-black dark:text-white hover:underline cursor-pointer delay-300"
                            >
                                {darkMode ? "Light Mode" : "Dark Mode"}
                            </span>
                        </div>
                    </div>
                    <textarea
                        ref={textAreaRef}
                        onInput={runTranslit}
                        className="w-full h-64 p-4 rounded-mdbg-gray-800 dark:text-white dark:bg-gray-900 text-gray-900 border border-orange-300 dark:border-orange500 delay-300"
                    ></textarea>
                </div>
                <div className="max-w-2xl">
                    <p className="mb-4 text-xl px-4">
                        Практически все буквы подобраны идеально и будут найдены
                        интуитивно. Есть лишь{" "}
                        <span
                            className="cursor-pointer underline"
                            onClick={() => setShowModal(true)}
                        >
                            некоторые моменты
                        </span>{" "}
                        которые стоит изучить перед непосредственным
                        пользованием данным транслитератором
                    </p>
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal}/>}
        </div>
    )
}

export default App
