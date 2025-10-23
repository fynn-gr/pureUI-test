import { writable } from "svelte/store";

export const uiPlatfrom = writable<"mac" | "windows">("mac");
export const theme = writable<"light" | "dark">("light");

export const sidebar = writable<boolean>(true);
