import { atom } from "recoil";

export const currentLink = atom({
    key: "currentLink",
    default: '/',
});

export const hoverSlidingImg = atom({
    key: "hoverSlidingImg",
    default: false,
});