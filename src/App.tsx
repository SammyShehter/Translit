import {useRef, useState} from "react"
import {toggleDarkMode, translit} from "./utils"

const App = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [translitVersion, setTranslitVersion] = useState("v1")

    const textAreaRef = useRef(null)

    const modeSwitch = () => {
        setDarkMode(!darkMode)
        toggleDarkMode()
    }

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
        //@ts-ignore
        if (showModal && e.target.classList.contains("modal-outside")) {
            setShowModal(false)
        }
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
                    <p className="mb-4 text-xl">
                        Практически все буквы подобраны идеально и будут найдены
                        интуитивно. Есть лишь{" "}
                        <span
                            className="cursor-pointer underline"
                            onClick={toggleModal}
                        >
                            некоторые моменты
                        </span>{" "}
                        которые стоит изучить перед непосредственным
                        пользованием данным транслитератором
                    </p>
                </div>
            </div>
            {showModal && (
                <div
                    onClick={handleOutsideClick}
                    className="fixed inset-0 flex items-center justify-center modal-outside"
                >
                    <div className="modal-content p-6 rounded-md shadow-lg dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900">
                        <div className="mb-4">
                            <ul className="list-disc list-inside">
                                <li>
                                    Твердый знак привязан к букве "q". Буква "щ"
                                    стоит за "w".
                                </li>
                                <li>
                                    <span className="font-bold">
                                        Составные буквы
                                    </span>
                                    {" "}типа "ч" или "ё", появляются при
                                    последовательном печатании "ch" и "jo"
                                    соответсвенно. Однако что действительно
                                    интересно, так это:
                                </li>
                                <li>
                                    <span className="font-bold">
                                        НЕ составные комбинации букв.
                                    </span>
                                    {" "}Слова типа "Район" или "Схожий" должны
                                    набираться через дефис. Например "Raj-on" и
                                    "S-hozhij" соответсвенно. Исключение -
                                    комбинация "sx" которая вернет "сх".
                                </li>
                            </ul>
                        </div>
                        <h2 className="text-2xl font-bold">
                            Приятного пользования =)
                        </h2>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
