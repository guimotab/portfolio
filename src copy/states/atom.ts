import { atom } from "recoil";

export const openImage = atom<string[]>({
    key: 'openImage',
    default: [""]
})