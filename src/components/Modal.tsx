import {useState} from "react"
import type {Language, ModalProps} from "../types/common"
import {modalTranslations} from "../utils/translations"

function VersionV1({currentLanguage}: {currentLanguage: Language}) {
    return (
        <ul className="list-disc list-inside">
            <li>{modalTranslations.v1[currentLanguage].firstLine}</li>
            <li>
                <span className="font-bold">
                    {modalTranslations.v1[currentLanguage].compoundLetters}
                </span>{" "}
                {modalTranslations.v1[currentLanguage].secondLine}
            </li>
            <li>
                <span className="font-bold">
                    {
                        modalTranslations.v1[currentLanguage]
                            .nonCompoundCombinations
                    }
                </span>{" "}
                {modalTranslations.v1[currentLanguage].thirdLine}
            </li>
        </ul>
    )
}

function VersionMac({currentLanguage}: {currentLanguage: Language}) {
    return (
        <ul className="list-disc list-inside">
            <li>{modalTranslations.mac[currentLanguage].firstLine}</li>
            <li>{modalTranslations.mac[currentLanguage].secondLine}</li>
            <li>{modalTranslations.mac[currentLanguage].thirdLine}</li>
            <li>{modalTranslations.mac[currentLanguage].fourthLine}</li>
            <li>{modalTranslations.mac[currentLanguage].fifthLine}</li>
            <li>{modalTranslations.mac[currentLanguage].sixthLine}</li>
            <li>{modalTranslations.mac[currentLanguage].lastLine}</li>
        </ul>
    )
}
export default function Modal({setShowModal, translitVersion}: ModalProps) {
    const [currentLanguage] = useState<Language>(() => {
        const lang: Language =
            (localStorage.getItem("lang") as Language) || "en"
        return lang
    })

    const [version] = useState(() => {
        const version = localStorage.getItem("version")
        return version
    })

    const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
        if ((e.target as HTMLElement).classList.contains("modal-outside")) {
            setShowModal(false)
        }
    }

    let versionComponent
    switch (translitVersion) {
        case "v1":
            versionComponent = <VersionV1 currentLanguage={currentLanguage} />
            break
        case "mac":
            versionComponent = <VersionMac currentLanguage={currentLanguage} />
            break
        default:
            versionComponent = null
    }

    return (
        <div
            onClick={handleOutsideClick}
            className="fixed inset-0 flex items-center justify-center modal-outside"
        >
            <div className="modal-content p-6 rounded-md shadow-lg dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900">
                <h2>{modalTranslations.common[currentLanguage].explanation}</h2>
                <br />
                <h2>{modalTranslations.common[currentLanguage].howToUse}</h2>
                <h2>
                    {modalTranslations.common[currentLanguage].currentVersion}{" "}
                    <span className="font-bold uppercase">{version}</span>
                </h2>
                <br />
                <div className="mb-4">{versionComponent}</div>
                <h2 className="text-2xl">
                    {modalTranslations.common[currentLanguage].enjoy} =)
                </h2>
            </div>
        </div>
    )
}
