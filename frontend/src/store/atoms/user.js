import { atom } from "recoil"

export const userAtom = atom({
    key: "userAtom",
    default: {}
})

export const isAuth = atom({
    key: "isAuth",
    default: false
})
