import {translitMac} from "./translit_mac"
import {translitV1} from "./translit_v1"

export const versions = {0: "v1", 1: "mac"}

export function translit(version: string, textEl: any, key: string) {
    switch (version) {
        case "v1":
            translitV1(textEl, key)
            break

        case "mac":
            translitMac(textEl, key)
            break

        default:
            break
    }
}
