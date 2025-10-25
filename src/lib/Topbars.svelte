<script lang="ts">
	import "../pureUI/scss/index.scss";
	import WinButtonsMac from "../pureUI/components/WinButtonsMac.svelte";
	import WinButtonsMS from "../pureUI/components/WinButtonsMS.svelte";
	import TopBarWebMenu from "../pureUI/components/TopBarWebMenu.svelte";
	import Window from "./Window.svelte";
	import { showContent } from "@/ts/Stores.svelte";

	let height: number = $state(100);
	let width: number = $state(500);
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore a11y_missing_attribute -->
<h2>Top Bars</h2>
<input
	type="range"
	name="height"
	id=""
	min="60"
	max="260"
	step="40"
	bind:value={height}
/>
<input
	type="range"
	name="width"
	id=""
	min="300"
	max="800"
	step="100"
	bind:value={width}
/>
<input type="checkbox" name="content" id="" bind:checked={$showContent} />

<div class="topbars" style={`--height: ${height}px; --width: ${width}px;`}>
	<h3>macOS</h3>
	<div class="row">
		<!-- Mac default -->
		<Window theme="light" type="default" uiPlatform="mac" />
		<Window theme="dark" type="default" uiPlatform="mac" />
	</div>
	<div class="row">
		<!-- Mac buttonbar-->
		<Window theme="light" type="buttonbar" uiPlatform="mac" />
		<Window theme="dark" type="buttonbar" uiPlatform="mac" />
	</div>
	<div class="row">
		<!-- Mac toolbar-->
		<Window theme="light" type="toolbar" uiPlatform="mac" />
		<Window theme="dark" type="toolbar" uiPlatform="mac" />
	</div>
	<h3>macOS Tahoe</h3>
	<div class="row">
		<!-- Tahoe -->
		<Window theme="light" type="default" uiPlatform="tahoe"  fullContent={true}/>
		<Window theme="dark" type="default" uiPlatform="tahoe" fullContent={true}/>
	</div>
	<div class="row">
		<Window
			theme="light"
			type="buttonbar"
			uiPlatform="tahoe"
			largeCorner={true}
			fullContent={true}
		/>
		<Window
			theme="dark"
			type="buttonbar"
			uiPlatform="tahoe"
			largeCorner={true}
			fullContent={true}
		/>
	</div>
	<div class="row">
		<Window
			theme="light"
			type="toolbar"
			uiPlatform="tahoe"
			largeCorner={true}
			fullContent={true}
		/>
		<Window theme="dark" type="toolbar" uiPlatform="tahoe" largeCorner={true} fullContent={true} />
	</div>
	<h3>Windows</h3>
	<div class="row">
		<!-- Win -->
		<Window theme="light" type="default" uiPlatform="win" />
		<Window theme="dark" type="default" uiPlatform="win" />
	</div>
	<div class="row">
		<Window theme="light" type="buttonbar" uiPlatform="win" />
		<Window theme="dark" type="buttonbar" uiPlatform="win" />
	</div>
	<div class="row">
		<Window theme="light" type="toolbar" uiPlatform="win" />
		<Window theme="dark" type="toolbar" uiPlatform="win" />
	</div>
	<h3>Web</h3>
	<div class="row">
		<!-- Web -->
		<Window theme="light" type="default" uiPlatform="web" />
		<Window theme="dark" type="default" uiPlatform="web" />
	</div>
	<div class="row">
		<Window theme="light" type="buttonbar" uiPlatform="web" />
		<Window theme="dark" type="buttonbar" uiPlatform="web" />
	</div>
	<div class="row">
		<Window theme="light" type="toolbar" uiPlatform="web" />
		<Window theme="dark" type="toolbar" uiPlatform="web" />
	</div>
</div>

<style lang="scss">
</style>
