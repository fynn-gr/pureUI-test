import { create } from "zustand";

export type StoreState = {
	// UI State
	uiPlatform: "mac" | "win" | "web" | "liquidGlass";
	theme: "light" | "dark";
	editorTheme: "light" | "dark" | "paper" | "auto";
	debug: boolean;

	// Panel State
	splash: boolean;
	show_sidebar: "outliner" | "navigation" | "history" | null;
	show_timeline: boolean;
	show_properties: boolean;

	// Setters
	setUiPlatform: (value: "mac" | "win" | "web" | "liquidGlass") => void;
	setTheme: (value: "light" | "dark") => void;
	setEditorTheme: (value: "light" | "dark" | "paper" | "auto") => void;
	setDebug: (value: boolean) => void;
	setSplash: (value: boolean) => void;
	setShowSidebar: (value: "outliner" | "navigation" | "history" | null) => void;
	setShowTimeline: (value: boolean) => void;
	setShowProperties: (value: boolean) => void;
	// Menu handler (callable from components)
	menuHandler: (...args: any[]) => void;
	setMenuHandler: (fn: (...args: any[]) => void) => void;
};

export const useAppStore = create<StoreState>((set) => ({
	// Initial state
	uiPlatform: "win",
	theme: "dark",
	editorTheme: "auto",
	debug: true,

	splash: false,
	show_sidebar: "outliner",
	show_timeline: true,
	show_properties: true,

	// Setters
	setUiPlatform: (value) => set({ uiPlatform: value }),
	setTheme: (value) => set({ theme: value }),
	setEditorTheme: (value) => set({ editorTheme: value }),
	setDebug: (value) => set({ debug: value }),

	setSplash: (value) => set({ splash: value }),
	setShowSidebar: (value) => set({ show_sidebar: value }),
	setShowTimeline: (value) => set({ show_timeline: value }),
	setShowProperties: (value) => set({ show_properties: value }),
	// menu handler
	menuHandler: () => {},
	setMenuHandler: (fn) => set({ menuHandler: fn }),
}));

// Export individual selectors for convenience
export const useUiPlatform = () => useAppStore((state) => state.uiPlatform);
export const useTheme = () => useAppStore((state) => state.theme);
export const useEditorTheme = () => useAppStore((state) => state.editorTheme);
export const useDebug = () => useAppStore((state) => state.debug);

export const useSplash = () => useAppStore((state) => state.splash);
export const useShowSidebar = () => useAppStore((state) => state.show_sidebar);
export const useShowTimeline = () =>
	useAppStore((state) => state.show_timeline);
export const useShowProperties = () =>
	useAppStore((state) => state.show_properties);

// Menu handler selector + setter
export const useMenuHandler = () => useAppStore((state) => state.menuHandler);
export const setMenuHandler = (fn: (...args: any[]) => void) =>
	useAppStore.setState({ menuHandler: fn });

// Export setters for convenience
export const setUiPlatform = (value: "mac" | "win" | "web" | "liquidGlass") =>
	useAppStore.setState({ uiPlatform: value });
export const setTheme = (value: "light" | "dark") =>
	useAppStore.setState({ theme: value });
export const setEditorTheme = (value: "light" | "dark" | "paper" | "auto") =>
	useAppStore.setState({ editorTheme: value });
export const setShowSidebar = (
	value: "outliner" | "navigation" | "history" | null,
) => useAppStore.setState({ show_sidebar: value });
export const setShowTimeline = (value: boolean) =>
	useAppStore.setState({ show_timeline: value });
