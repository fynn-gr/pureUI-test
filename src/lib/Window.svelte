<script lang="ts">
	import WinButtonsMac from "../pureUI/components/WinButtonsMac.svelte";
	import WinButtonsMS from "../pureUI/components/WinButtonsMS.svelte";
	import TopBarWebMenu from "../pureUI/components/TopBarWebMenu.svelte";
	import TopBarButton from "@/pureUI/components/TopBarButton.svelte";
	import { onMount } from "svelte";
	import TopBarDropdown from "@/pureUI/components/TopBarDropdown.svelte";
	import TopBarDropdownItem from "@/pureUI/components/TopBarDropdownItem.svelte";
	import { sidebar } from "@/ts/Stores.svelte";

	interface Props {
		theme: "light" | "dark";
		type: string;
		uiPlatform: "mac" | "win" | "web";
	}
	let { theme, type, uiPlatform }: Props = $props();
</script>

<main class={`window-body ${uiPlatform} ${theme}`}>
	<div class={`topbar ${type}`}>
		<div class="topbar-container">
			{#if uiPlatform == "mac"}
				<WinButtonsMac></WinButtonsMac>
			{/if}

			{#if uiPlatform == "web"}
				<TopBarWebMenu active="none" name="Test"></TopBarWebMenu>
			{/if}

			{#if type == "buttonbar" || type == "toolbar"}
				<TopBarButton id="" icon="sidebar" onClick={() => {$sidebar = !$sidebar}} toolTip=""
				></TopBarButton>
				<button class="topbar-button force-hover">
					<img src="./icons/topbar/folder.svg" alt="" />
				</button>
			{/if}

			<div class="spacer"></div>
			<div class="window-title">Window</div>
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
	<div class="sidebar" style={`width: ${$sidebar ? 140 : 0}px`}></div>
	<div class="content"></div>
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
		width: 500px;
		height: 100px;
		border-radius: var(--win-corner);
		//background-color: var(--properties-BG);
		box-shadow: 0 8px 64px rgba(0, 0, 0, 0.455);

    --sidebar-BG: rgba(127, 127, 127, 0.415);

    .sidebar {
      grid-area: sidebar;
      background-color: var(--sidebar-BG);
      //backdrop-filter: blur(32px);
    }

    .content {
      grid-area: content;
      background-color: var(--properties-BG);
    }

    .topbar-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
	}
</style>
