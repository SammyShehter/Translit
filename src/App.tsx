import {useEffect, useRef, useState} from "react"
import {translit, versions} from "./utils/common"
import Modal from "./components/Modal"
import Letters from "./components/Letters"
import {translations} from "./utils/translations"
import type {Language, Versions} from "./types/common"

const App = () => {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    )
    const [translitVersion, setTranslitVersion] = useState(
        () => localStorage.getItem("version") || "v1"
    )
    const [currentLanguage, setCurrentLanguage] = useState<Language>(
        () => (localStorage.getItem("lang") as Language) || "en"
    )

    const [showModal, setShowModal] = useState(false)
    const [textAreaInput, setTextAreaInput] = useState("")
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        darkMode
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark")
    }, [darkMode])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (textAreaRef.current) {
                localStorage.setItem("text", textAreaRef.current.value)
            }
        }, 1000)

        return () => clearTimeout(timeout)
    }, [textAreaInput])

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode
            newMode
                ? document.documentElement.classList.add("dark")
                : document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", newMode ? "dark" : "light")
            return newMode
        })
    }

    const changeLanguage = () => {
        setCurrentLanguage((prevLang) => {
            const newLang = prevLang === "en" ? "ru" : "en"
            localStorage.setItem("lang", newLang)
            return newLang
        })
    }

    const changeVersion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newIndex = `${e.target.selectedIndex}` as unknown as Versions
        const newVer = versions[newIndex]
        setTranslitVersion((_) => {
            localStorage.setItem("version", newVer)
            return newVer
        })
    }

    const runTranslit = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const eventData = e.nativeEvent as InputEvent
        const textArea = textAreaRef.current

        if (textArea) {
            const start = textArea.selectionStart
            const end = textArea.selectionEnd

            translit(translitVersion, textAreaRef, eventData.data!)
            setTextAreaInput(textArea.value)
            textArea.setSelectionRange(start, end)
        }
    }

    const copyToClipboard = () => {
        const textArea = textAreaRef.current
        if (textArea) {
            textArea.select()
            navigator.clipboard.writeText(textArea.value)
        }
    }

    const addLetterToTextArea = (letter: string) => {
        if (textAreaRef.current) {
            const textArea = textAreaRef.current
            const start = textArea.selectionStart
            const end = textArea.selectionEnd
            const text = textArea.value

            textArea.value = text.slice(0, start) + letter + text.slice(end)
            setTextAreaInput(textArea.value)
            textArea.setSelectionRange(start + 1, start + 1)
            textArea.focus()
        }
    }

    return (
        <div className="h-screen dark:text-white bg-gray-100 text-gray-900 dark:bg-black transition-all delay-100">
            <div
                className={`flex flex-col items-center justify-center font-sans ${
                    showModal && "blur-lg"
                }`}
            >
                <div className="mb-8 p-4 w-full bg-orange-300 dark:bg-orange-400">
                    <h1 className="text-4xl font-bold text-center">
                        {translations[currentLanguage].title}
                    </h1>
                </div>
                <Letters addLetter={addLetterToTextArea} />
                <div className="mb-8 w-full px-4">
                    <div className="flex justify-between">
                        <div>
                            <span className="pr-2 text-black dark:text-white hover:underline cursor-pointer delay-100">
                                {translations[currentLanguage].translitVersion}:
                            </span>
                            <select
                                value={translitVersion}
                                onChange={changeVersion}
                                className="hover:underline cursor-pointer delay-100 bg-gray-100 dark:bg-black"
                            >
                                <option value="v1">V1</option>
                                <option value="mac">Mac</option>
                            </select>
                        </div>
                        <div className="max-md:hidden">
                            <span
                                onClick={() => setShowModal(true)}
                                className="text-black dark:text-white hover:underline cursor-pointer delay-100"
                            >
                                {translations[currentLanguage].modalTitle}
                            </span>
                        </div>
                    </div>
                    <textarea
                        ref={textAreaRef}
                        onInput={runTranslit}
                        defaultValue={localStorage.getItem("text") || ""}
                        className="w-full h-64 p-4 rounded-mdbg-gray-800 dark:text-white dark:bg-gray-900 text-gray-900 border border-orange-300 dark:border-orange500 delay-100"
                    ></textarea>
                    <div className="flex justify-between max-md:flex-col">
                        <div className="max-md:flex max-md:flex-col">
                            <span
                                onClick={copyToClipboard}
                                className="text-black dark:text-white hover:underline cursor-pointer delay-100 max-md:pb-7"
                            >
                                {translations[currentLanguage].copyToClipboard}
                            </span>
                        </div>
                        <div className="max-md:flex max-md:flex-col">
                            <span
                                onClick={toggleDarkMode}
                                className="pr-2 text-black dark:text-white hover:underline cursor-pointer delay-100 max-md:mb-4"
                            >
                                {translations[currentLanguage].changeTheme}{" "}
                                {darkMode
                                    ? translations[currentLanguage].lightMode
                                    : translations[currentLanguage].darkMode}
                            </span>
                            <span className="max-md:hidden">|</span>
                            <span
                                onClick={changeLanguage}
                                className="pl-2 text-black dark:text-white hover:underline cursor-pointer delay-100 max-md:p-0 max-md:mb-4"
                            >
                                {translations[currentLanguage].changeLanguage}
                            </span>
                            <span
                                onClick={() => setShowModal(true)}
                                className="text-black dark:text-white hover:underline cursor-pointer delay-100 hidden max-md:block"
                            >
                                {translations[currentLanguage].modalTitle}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <Modal
                    setShowModal={setShowModal}
                    translitVersion={translitVersion}
                />
            )}
        </div>
    )
}

export default App
