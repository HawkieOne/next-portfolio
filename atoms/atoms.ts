import { atom } from "recoil";

export const currentLink = atom({
    key: "currentLink",
    default: '/',
});

export const hoverSlidingImg = atom({
    key: "hoverSlidingImg",
    default: false,
});

export const menuOpen = atom({
    key: "menuOpen",
    default: false,
});

export const currentProjectIndex = atom({
    key: "currentProjectIndex",
    default: 1,
});