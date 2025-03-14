import { simpleTranslit } from "./common"

export const latToKir = new Map([
    ["a", "а"],
    ["b", "б"],
    ["c", "ц"],
    ["d", "д"],
    ["e", "е"],
    ["f", "ф"],
    ["g", "г"],
    ["h", "ч"],
    ["i", "и"],
    ["j", "й"],
    ["k", "к"],
    ["l", "л"],
    ["m", "м"],
    ["n", "н"],
    ["o", "о"],
    ["p", "п"],
    ["q", "я"],
    ["r", "р"],
    ["s", "с"],
    ["t", "т"],
    ["u", "у"],
    ["v", "в"],
    ["w", "ш"],
    ["x", "х"],
    ["y", "ы"],
    ["z", "з"],
    ["A", "А"],
    ["B", "Б"],
    ["C", "Ц"],
    ["D", "Д"],
    ["E", "Е"],
    ["F", "Ф"],
    ["G", "Г"],
    ["H", "Ч"],
    ["I", "И"],
    ["J", "Й"],
    ["K", "К"],
    ["L", "Л"],
    ["M", "М"],
    ["N", "Н"],
    ["O", "О"],
    ["P", "П"],
    ["Q", "Я"],
    ["R", "Р"],
    ["S", "С"],
    ["T", "Т"],
    ["U", "У"],
    ["V", "В"],
    ["W", "Ш"],
    ["X", "Х"],
    ["Y", "Ы"],
    ["Z", "З"],
    ["-", "ь"],
    ["_", "Ь"],
    ["=", "ъ"],
    ["+", "Ъ"],
    ["`", "щ"],
    ["~", "Щ"],
    ["[", "ю"],
    ["{", "Ю"],
    ["]", "ж"],
    ["}", "Ж"],
    [`\\`, "э"],
    ["|", "Э"],
])

export function translitMac(textEl: any, key: string) {
    let position = textEl.current.selectionStart
    let workString = textEl.current.value
    if (latToKir.has(key)) {
        workString = simpleTranslit(
            workString,
            position - key.length,
            latToKir.get(key)!
        )
    }

    textEl.current.value = workString
}
