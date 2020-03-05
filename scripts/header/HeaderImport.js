import { UseHeader } from "./Header.js";

const contentTarget = document.querySelector(".header")

export const HeaderImport = () => {
    contentTarget.innerHTML = UseHeader()
}