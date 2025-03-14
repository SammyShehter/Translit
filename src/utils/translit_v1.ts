const latSimple = new Map([
    ["a", "а"],
    ["b", "б"],
    ["c", "ц"],
    ["d", "д"],
    ["e", "е"],
    ["f", "ф"],
    ["g", "г"],
    ["h", "х"],
    ["i", "и"],
    ["j", "й"],
    ["k", "к"],
    ["l", "л"],
    ["m", "м"],
    ["n", "н"],
    ["o", "о"],
    ["p", "п"],
    ["q", "ъ"],
    ["r", "р"],
    ["s", "с"],
    ["t", "т"],
    ["u", "у"],
    ["v", "в"],
    ["w", "щ"],
    ["x", "х"],
    ["y", "ы"],
    ["z", "з"],
    ["'", "ь"],
    ["A", "А"],
    ["B", "Б"],
    ["C", "Ц"],
    ["D", "Д"],
    ["E", "Е"],
    ["F", "Ф"],
    ["G", "Г"],
    ["H", "Х"],
    ["I", "И"],
    ["J", "Й"],
    ["K", "К"],
    ["L", "Л"],
    ["M", "М"],
    ["N", "Н"],
    ["O", "О"],
    ["P", "П"],
    ["Q", "Ъ"],
    ["R", "Р"],
    ["S", "С"],
    ["T", "Т"],
    ["U", "У"],
    ["V", "В"],
    ["W", "Щ"],
    ["X", "Х"],
    ["Y", "Ы"],
    ["Z", "З"],
    ['"', "Ь"],
])

const latSpec = new Map([
    ["сh", "ш"],
    ["ыo", "ё"],
    ["зh", "ж"],
    ["цh", "ч"],
    ["ыe", "э"],
    ["йe", "э"],
    ["ыa", "я"],
    ["йa", "я"],
    ["ыu", "ю"],
    ["йu", "ю"],
    ["йo", "ё"],
    ["Сh", "Ш"],
    ["Ыo", "Ё"],
    ["Зh", "Ж"],
    ["Цh", "Ч"],
    ["Ыe", "Э"],
    ["Йe", "Э"],
    ["Ыa", "Я"],
    ["Йa", "Я"],
    ["Ыu", "Ю"],
    ["Йu", "Ю"],
    ["Йo", "Ё"],
    ["СH", "Ш"],
    ["ЫO", "Ё"],
    ["ЗH", "Ж"],
    ["ЦH", "Ч"],
    ["ЫE", "Э"],
    ["ЙE", "Э"],
    ["ЫA", "Я"],
    ["ЙA", "Я"],
    ["ЫU", "Ю"],
    ["ЙU", "Ю"],
    ["ЙO", "Ё"],
])
const latSuperSpec = new Map([
    ["с-h", "сх"],
    ["ы-o", "ыо"],
    ["з-h", "зх"],
    ["ц-h", "цх"],
    ["ы-e", "ые"],
    ["й-e", "йе"],
    ["ы-a", "ыа"],
    ["й-a", "йа"],
    ["ы-u", "ыу"],
    ["й-u", "йу"],
    ["й-o", "йо"],
    ["С-h", "Сх"],
    ["Ы-o", "Ыо"],
    ["З-h", "Зх"],
    ["Ц-h", "Цх"],
    ["Ы-e", "Ые"],
    ["Й-e", "Йе"],
    ["Ы-a", "Ыа"],
    ["Й-a", "Йа"],
    ["Ы-u", "Ыу"],
    ["Й-u", "Йу"],
    ["Й-o", "Йо"],
    ["С-H", "СХ"],
    ["Ы-O", "ЫО"],
    ["З-H", "ЗХ"],
    ["Ц-H", "ЦХ"],
    ["Ы-E", "ЫЕ"],
    ["Й-E", "ЙЕ"],
    ["Ы-A", "ЫА"],
    ["Й-A", "ЙА"],
    ["Ы-U", "ЫУ"],
    ["Й-U", "ЙУ"],
    ["Й-O", "ЙО"],
    ["С_h", "Сх"],
    ["Ы_o", "Ыо"],
    ["З_h", "Зх"],
    ["Ц_h", "Цх"],
    ["Ы_e", "Ые"],
    ["Й_e", "Йе"],
    ["Ы_a", "Ыа"],
    ["Й_a", "Йа"],
    ["Ы_u", "Ыу"],
    ["Й_u", "Йу"],
    ["Й_o", "Йо"],
    ["С_H", "СХ"],
    ["Ы_O", "ЫО"],
    ["З_H", "ЗХ"],
    ["Ц_H", "ЦХ"],
    ["Ы_E", "ЫЕ"],
    ["Й_E", "ЙЕ"],
    ["Ы_A", "ЫА"],
    ["Й_A", "ЙА"],
    ["Ы_U", "ЫУ"],
    ["Й_U", "ЙУ"],
    ["Й_O", "ЙО"],
])

function simpleTranslit(
    workString: string,
    index: number,
    char: string,
    offset: number = 0
): string {
    return (
        workString.substring(0, index) +
        char +
        workString.substring(index + char.length + offset)
    )
}

export function translitV1(textEl: any, key: string) {
    let position = textEl.current.selectionStart
    let workString = textEl.current.value

    const specCase = workString.substring(position, position - 2)
    const superSpecCase = workString.substring(position, position - 3)

    switch (true) {
        case latSuperSpec.has(superSpecCase):
            workString = simpleTranslit(
                workString,
                position - 3,
                latSuperSpec.get(superSpecCase)!,
                1
            )
            break
        case latSpec.has(specCase):
            workString = simpleTranslit(
                workString,
                position - 2,
                latSpec.get(specCase)!,
                1
            )
            break
        case latSimple.has(key):
            workString = simpleTranslit(
                workString,
                position - 1,
                latSimple.get(key)!
            )
            break

        default:
            break
    }

    textEl.current.value = workString
}
