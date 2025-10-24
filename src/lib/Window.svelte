<script lang="ts">
	import WinButtonsMac from "../pureUI/components/WinButtonsMac.svelte";
	import WinButtonsMS from "../pureUI/components/WinButtonsMS.svelte";
	import TopBarWebMenu from "../pureUI/components/TopBarWebMenu.svelte";
	import TopBarButton from "@/pureUI/components/TopBarButton.svelte";
	import TopBarDropdown from "@/pureUI/components/TopBarDropdown.svelte";
	import TopBarDropdownItem from "@/pureUI/components/TopBarDropdownItem.svelte";
	import { showContent, sidebar } from "@/ts/Stores.svelte";
	import Sidebar from "@/pureUI/components/Sidebar.svelte";

	interface Props {
		theme: "light" | "dark";
		type: string;
		uiPlatform: "mac" | "win" | "web" | "tahoe";
		largeCorner?: boolean;
		fullContent?: boolean;
	}
	let {
		theme,
		type,
		uiPlatform,
		largeCorner = false,
		fullContent = false,
	}: Props = $props();
</script>

<main
	class={`window-body ${uiPlatform} ${theme}`}
	style={largeCorner ? "border-radius: var(--win-corner-large);" : ""}
	class:fullContent
	class:showContent={$showContent}
>
	<div class={`topbar ${type}`}>
		<div class="topbar-container">
			{#if uiPlatform == "mac" || uiPlatform == "tahoe"}
				<WinButtonsMac></WinButtonsMac>
			{/if}

			{#if uiPlatform == "web"}
				<TopBarWebMenu active="none" name="Test"></TopBarWebMenu>
			{/if}

			{#if type == "buttonbar" || type == "toolbar"}
				<TopBarButton
					id=""
					icon="sidebar"
					onClick={() => {
						$sidebar = !$sidebar;
					}}
					toolTip=""
				></TopBarButton>
				<button class="topbar-button force-hover">
					<img src="./icons/topbar/folder.svg" alt="" />
				</button>
			{/if}

			<div class="spacer"></div>
			<div class="window-title" class:static={type == "default"}>Window</div>
			<div class="spacer"></div>

			{#if type == "toolbar" || type == "buttonbar"}
				<TopBarDropdown icon="display" toolTip="">
					<TopBarDropdownItem name="Option 1"></TopBarDropdownItem>
					<TopBarDropdownItem name="Option 2"></TopBarDropdownItem>
				</TopBarDropdown>
				<div class="topbar-group">
					<TopBarButton id="" icon="settings" onClick={() => {}} toolTip=""
					></TopBarButton>
					<TopBarButton id="" icon="settings" onClick={() => {}} toolTip=""
					></TopBarButton>
				</div>
			{/if}

			{#if uiPlatform == "win"}
				<WinButtonsMS></WinButtonsMS>
			{/if}
		</div>
	</div>
	{#if type != "default"}
		<Sidebar width={200} show={$sidebar}></Sidebar>
	{/if}
	<div class="content" class:showContent={$showContent} class:fullContent></div>

	<div class="window-rim"></div>
</main>

<style lang="scss" scoped>
	main.window-body {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			"sidebar topbar"
			"sidebar content";

		position: relative;
		width: var(--width);
		height: var(--height);
		border-radius: var(--win-corner);
		background-color: transparent;
		backdrop-filter: blur(32px);
		box-shadow:
			0 8px 42px rgba(0, 0, 0, 0.455),
			0 0 1.5px black;

		&.fullContent {
			background-color: var(--properties-BG);
		}

		&.fullContent.showContent {
			background: url("./bg-2.jpg");
		}

		.sidebar {
			grid-area: sidebar;
			background-color: var(--navbar-BG);
			backdrop-filter: blur(32px);
		}

		.content {
			grid-area: content;
			background-color: var(--properties-BG);

			&.showContent {
				background: url("./bg-2.jpg");
				background-clip: cover;
			}

			&.fullContent {
				background: transparent;
			}
		}

		.topbar-container {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
		}

		.window-rim {
			position: absolute;
			width: 100%;
			height: 100%;
			inset: 0;
		}
	}
</style>
