<script lang="ts">
	import "../pureUI/scss/index.scss";
	import Window from "./Window.svelte";
	import Browser from "./Browser.svelte";

	import { folders, showContent } from "@/ts/Stores.svelte";

	let height: number = $state(200);
	let width: number = $state(900);
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore a11y_missing_attribute -->
<div class="top">
	<h1>pureUI</h1>
	<h2>Top Bars</h2>
	<input
		type="range"
		name="height"
		id=""
		min="10"
		max="300"
		step="40"
		bind:value={height}
	/>
	<input
		type="range"
		name="width"
		id=""
		min="500"
		max="1000"
		step="100"
		bind:value={width}
	/>
	<input
		type="checkbox"
		name="content"
		id="show-content"
		bind:checked={$showContent}
	/>
	<label for="show-content">Show Content</label>
	<input type="checkbox" bind:checked={$folders} />
	<label for="">Folder structure</label>
</div>

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
	<h3>macOS liquidGlass</h3>
	<div class="row">
		<!-- liquidGlass -->
		<Window
			theme="light"
			type="default"
			uiPlatform="liquidGlass"
			fullContent={true}
		/>
		<Window
			theme="dark"
			type="default"
			uiPlatform="liquidGlass"
			fullContent={true}
		/>
	</div>
	<div class="row">
		<Window
			theme="light"
			type="buttonbar"
			uiPlatform="liquidGlass"
			largeCorner={true}
			fullContent={true}
		/>
		<Window
			theme="dark"
			type="buttonbar"
			uiPlatform="liquidGlass"
			largeCorner={true}
			fullContent={true}
		/>
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
		<Browser theme="light"></Browser>
		<Browser theme="dark"></Browser>
	</div>
	<div class="row">
		<Window theme="light" type="buttonbar" uiPlatform="web" />
		<Window theme="dark" type="buttonbar" uiPlatform="web" />
	</div>
</div>
