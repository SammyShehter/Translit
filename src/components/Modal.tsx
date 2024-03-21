export default function Modal({
    setShowModal,
}: {
    setShowModal: (state: boolean) => void
}) {
    const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
        //@ts-ignore
        if (e.target.classList.contains("modal-outside")) {
            setShowModal(false)
        }
    }
    return (
        <div
            onClick={handleOutsideClick}
            className="fixed inset-0 flex items-center justify-center modal-outside"
        >
            <div className="modal-content p-6 rounded-md shadow-lg dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900">
                <div className="mb-4">
                    <ul className="list-disc list-inside">
                        <li>
                            Твердый знак привязан к букве "q". Буква "щ" стоит
                            за "w".
                        </li>
                        <li>
                            <span className="font-bold">Составные буквы</span>{" "}
                            типа "ч" или "ё", появляются при последовательном
                            печатании "ch" и "jo" соответсвенно. Однако что
                            действительно интересно, так это:
                        </li>
                        <li>
                            <span className="font-bold">
                                НЕ составные комбинации букв.
                            </span>{" "}
                            Слова типа "Район" или "Схожий" должны набираться
                            через дефис. Например "Raj-on" и "S-hozhij"
                            соответсвенно. Исключение - комбинация "sx" которая
                            вернет "сх".
                        </li>
                    </ul>
                </div>
                <h2 className="text-2xl font-bold">Приятного пользования =)</h2>
            </div>
        </div>
    )
}
