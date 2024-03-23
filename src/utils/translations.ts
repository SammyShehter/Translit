export const translations = {
    en: {
        title: "Translit",
        translitVersion: "Translit Version",
        textAreaPlaceholder: "Type here...",
        modalTitle: "How to use Translit?",
        modalClose: "Close",
        copyToClipboard: "Copy to Clipboard",
        changeLanguage: "Change Language",
        changeTheme: "Switch to",
        lightMode: "Light Mode",
        darkMode: "Dark Mode",
    },
    ru: {
        title: "Транслит",
        translitVersion: "Версия Translit",
        textAreaPlaceholder: "Печатайте здесь...",
        modalTitle: "Как пользоваться Транслитом?",
        modalClose: "Закрыть",
        copyToClipboard: "Скопировать в буфер обмена",
        changeLanguage: "Сменить язык",
        changeTheme: "Переключиться на",
        lightMode: "Светлую тему",
        darkMode: "Темную тему",
    },
}

export const modalTranslations = {
    common: {
        en: {
            explanation:
                "Translit is a tool that helps you convert text from one alphabet to another. For example, the word 'привет' in Russian becomes 'privet' in English",
            howToUse:
                "Start typing in the input field and the text will be automatically transliterated. Select a version of translit to see additional rules and exceptions",
            currentVersion: "The current version is:",
            enjoy: "Enjoy!",
        },
        ru: {
            explanation:
                "Транслит - это инструмент, который помогает вам преобразовывать текст из одного алфавита в другой. Например, слово 'privet' на английском становится 'привет' на русском языке",
            howToUse:
                "Начните печатать в поле ввода и текст будет автоматически транслитерирован. Выберите версию транслита, чтобы увидеть дополнительные правила и исключения",
            currentVersion: "Сейчас выбрана версия:",
            enjoy: "Приятного пользования!",
        },
    },
    v1: {
        en: {
            firstLine:
                "The hard sign is bound to the letter 'q'. The letter 'щ' stands for 'w'",
            compoundLetters: "Combined letters",
            secondLine:
                "like 'ч' or 'ё' appear when typing 'ch' and 'jo' respectively",
            nonCompoundCombinations: "Non-compound combinations of letters.",
            thirdLine:
                "Words like 'Район' or 'Схожий' should be typed through a hyphen. For example 'Raj-on' and 'S-hozhij'. Exception - the combination 'sx' which will always return 'сх'",
        },
        ru: {
            firstLine:
                "Твердый знак привязан к букве 'q'. Буква 'щ' вернет 'w'",
            compoundLetters: "Составные буквы",
            secondLine:
                "типа 'ч' или 'ё', появляются при последовательном печатании 'ch' и 'jo' соответсвенно",
            nonCompoundCombinations: "Не составные комбинации букв.",
            thirdLine:
                "Слова типа 'Район' или 'Схожий' должны набираться через дефис. Например 'Raj-on' и 'S-hozhij'. Исключение - комбинация 'sx' которая всегда вернет 'сх'",
        },
    },
    mac: {
        en: {
            firstLine: "щ - `",
            secondLine: "ю - [",
            thirdLine: "ж - ]",
            fourthLine: "э - \\",
            fifthLine: "я - q",
            sixthLine: "ъ - =",
            lastLine:
                "The soft sign is bound to the dash. Unfortunately, I couldn't find an analog for the dash. That's sad",
        },
        ru: {
            firstLine: "щ - `",
            secondLine: "ю - [",
            thirdLine: "ж - ]",
            fourthLine: "э - \\",
            fifthLine: "я - q",
            sixthLine: "ъ - =",
            lastLine:
                "Мягкий знак привязан к тире. К сожалению, мне не удалось найти аналог для тире. Это печально",
        },
    },
}
