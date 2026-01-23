<script lang="ts">
	import WinButtonsMac from "../pureUI/components/WinButtonsMac.svelte";
	import WinButtonsMS from "../pureUI/components/WinButtonsMS.svelte";
	import TopBarWebMenu from "../pureUI/components/TopBarWebMenu.svelte";
	import TopBarButton from "@/pureUI/components/TopBarButton.svelte";
	import TopBarDropdown from "@/pureUI/components/TopBarDropdown.svelte";
	import TopBarDropdownItem from "@/pureUI/components/TopBarDropdownItem.svelte";
	import {
		folders,
		selectedItem,
		showContent,
		sidebar,
	} from "@/ts/Stores.svelte";
	import AppMenu from "@/pureUI/components/AppMenu.svelte";
	import AppMenuItem from "@/pureUI/components/AppMenuItem.svelte";
	import NavItem from "@/pureUI/components/NavItem.svelte";
	import NavFolder from "@/pureUI/components/NavFolder.svelte";
	import SelectionBox from "@/pureUI/components/SelectionBox.svelte";

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
	style={`${
		uiPlatform == "tahoe" && type == "buttonbar"
			? "border-radius: var(--win-corner-large);"
			: ""
	} ${uiPlatform == "tahoe" ? "corner-shape: superellipse(1.1);" : ""}`}
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
			{#if uiPlatform == "tahoe" && $sidebar}
				<div class="spacer" style={`width: 50px; flex: none;`}></div>
			{/if}
			{#if type == "buttonbar" || type == "toolbar"}
				<TopBarButton
					id=""
					icon="sidebar"
					onClick={() => {
						$sidebar = !$sidebar;
					}}
					toolTip=""
					addClass={$sidebar ? "active over-sidebar" : ""}
				></TopBarButton>
			{/if}
			{#if uiPlatform == "mac" && (type == "toolbar" || type == "buttonbar") && $sidebar}
				<div
					class="spacer"
					style={`width: ${type == "buttonbar" ? 72 : 54}px; flex: none;`}
				></div>
			{/if}
			{#if (uiPlatform == "win" || uiPlatform == "web") && (type == "toolbar" || type == "buttonbar")}
				<AppMenu name="File">
					<AppMenuItem name="Open" id="" accelerator="Ctrl+O"></AppMenuItem>
					<AppMenuItem name="Save" id="" accelerator="Ctrl+S"></AppMenuItem>
					<AppMenuItem name="Save as" id="" accelerator="Ctrl+Shift+S"
					></AppMenuItem>
					<div class="seperator"></div>
					<AppMenuItem name="Quit" id="" accelerator="Ctrl+Q"></AppMenuItem>
				</AppMenu>
			{/if}

			{#if type != "default"}
				<SelectionBox
					options={[
						{ name: "One", value: 1 },
						{ name: "Two", value: 2 },
						{ name: "Three", value: 3 },
					]}
					selected={"One"}
				></SelectionBox>
			{/if}

			<div class="spacer"></div>
			{#if type == "default"}
				<div class="window-title" class:static={type == "default"}>Window</div>
			{:else}
				<div class="document-title">
					<p>Document</p>
					<p class="save-indicator">• Edited</p>
				</div>
			{/if}
			<div class="spacer"></div>

			{#if type == "toolbar" || type == "buttonbar"}
				<div class="topbar-group">
					<TopBarButton id="" icon="pause" onClick={() => {}} toolTip=""
					></TopBarButton>
					<TopBarDropdown icon={null} toolTip="">
						<TopBarDropdownItem name={"Option 1"}>Option 1</TopBarDropdownItem>
						<TopBarDropdownItem name={"Option 2"}>Option 2</TopBarDropdownItem>
					</TopBarDropdown>
				</div>
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
		<div class="sidebar" style={`width: ${$sidebar ? 200 : 0}px;`}>
			<div class="sidebar-inner">
				<div class="nav-list">
					<NavItem
						name="Home"
						icon="home"
						onClick={() => {
							$selectedItem == 1 ? ($selectedItem = 0) : ($selectedItem = 1);
						}}
						active={$selectedItem == 1}
					></NavItem>
					<NavItem
						name="Home"
						icon="home"
						onClick={() => {
							$selectedItem == 2 ? ($selectedItem = 0) : ($selectedItem = 2);
						}}
						active={$selectedItem == 2}
					></NavItem>
					{#if $folders}
						<NavFolder
							name="Folder 1"
							icon="folder"
							active={$selectedItem == 3}
							exposed={true}
							onClick={() => {
								$selectedItem == 3 ? ($selectedItem = 0) : ($selectedItem = 3);
							}}
							depth={0}
						>
							<NavItem
								name="Subitem 1"
								icon="play"
								onClick={() => {
									$selectedItem == 4
										? ($selectedItem = 0)
										: ($selectedItem = 4);
								}}
								active={$selectedItem == 4}
								depth={1}
							></NavItem>
							<NavFolder
								name="Subfolder 1"
								icon="folder"
								active={$selectedItem == 5}
								exposed={true}
								onClick={() => {
									$selectedItem == 5
										? ($selectedItem = 0)
										: ($selectedItem = 5);
								}}
								depth={1}
							>
								<NavItem
									name="Subitem 1"
									icon="pause"
									onClick={() => {
										$selectedItem == 6
											? ($selectedItem = 0)
											: ($selectedItem = 6);
									}}
									active={$selectedItem == 6}
									depth={2}
								></NavItem></NavFolder
							>
						</NavFolder>
						<NavFolder
							name="Folder 1"
							icon="document"
							active={$selectedItem == 7}
							exposed={true}
							onClick={() => {
								$selectedItem == 7 ? ($selectedItem = 0) : ($selectedItem = 7);
							}}
						>
							<NavItem
								name="Subitem 1"
								icon="settings"
								onClick={() => {
									$selectedItem == 8
										? ($selectedItem = 0)
										: ($selectedItem = 8);
								}}
								active={$selectedItem == 8}
								depth={1}
							></NavItem>
						</NavFolder>
					{/if}
				</div>
			</div>
		</div>
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
		background-color: rgb(109, 109, 109);
		box-shadow:
			0 8px 42px rgba(0, 0, 0, 0.455),
			0 0 1.5px black;

		&.fullContent {
			background-color: var(--properties-BG);
		}

		&.fullContent.showContent {
			//background: url("./bg-2.jpg");
			background-color: gray;
		}

		.sidebar {
			grid-area: sidebar;
		}

		.content {
			grid-area: content;
			background-color: var(--properties-BG);

			&.showContent {
				//background: url("./bg-2.jpg");
				//background-clip: cover;
				background-color: gray;
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
