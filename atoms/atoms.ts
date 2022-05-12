import { atom } from "recoil";

export const currentProjectIndex = atom({
    key: "currentProjectIndex",
    default: 1,
});