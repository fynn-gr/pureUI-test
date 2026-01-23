import { writable } from "svelte/store";

export const uiPlatfrom = writable<"mac" | "windows" >("mac");
export const theme = writable<"light" | "dark">("light");

export const sidebar = writable<boolean>(true);
export const showContent = writable<boolean>(true);
export const selectedItem = writable<number>(0);
export const folders = writable<boolean>(false);

export const menuHandler = writable(() => {});