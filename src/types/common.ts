import {versions} from "../utils/common"
import {translations} from "../utils/translations"

export type Language = keyof typeof translations
export type Versions = keyof typeof versions

export type ModalProps ={
    setShowModal: (state: boolean) => void,
    translitVersion: string
}