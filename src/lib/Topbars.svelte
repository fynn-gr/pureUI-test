<script lang="ts">
	import "../pureUI/scss/index.scss";
	import WinButtonsMac from "../pureUI/components/WinButtonsMac.svelte";
	import WinButtonsMS from "../pureUI/components/WinButtonsMS.svelte";
	import TopBarWebMenu from "../pureUI/components/TopBarWebMenu.svelte";
	import Window from "./Window.svelte";
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore a11y_missing_attribute -->
<h2>Top Bars</h2>
<div class="topbars">
	<div class="colum">
		<!-- Mac -->
		<Window theme="light" type="default" uiPlatform="mac" />
		<Window theme="light" type="buttonbar" uiPlatform="mac" />
		<Window theme="light" type="toolbar" uiPlatform="mac" />

		<!-- Win -->
		<Window theme="light" type="default" uiPlatform="win" />
		<Window theme="light" type="buttonbar" uiPlatform="win" />
		<Window theme="light" type="toolbar" uiPlatform="win" />

		<!-- Web -->
		<Window theme="light" type="default" uiPlatform="web" />
		<Window theme="light" type="buttonbar" uiPlatform="web" />
		<Window theme="light" type="toolbar" uiPlatform="web" />
	</div>

	<!-- Dark Theme -->
	<div class="colum">
		<!-- Mac -->
		<Window theme="dark" type="default" uiPlatform="mac" />
		<Window theme="dark" type="buttonbar" uiPlatform="mac" />
		<Window theme="dark" type="toolbar" uiPlatform="mac" />

		<!-- Win -->
		<Window theme="dark" type="default" uiPlatform="win" />
		<Window theme="dark" type="buttonbar" uiPlatform="win" />
		<Window theme="dark" type="toolbar" uiPlatform="win" />

		<!-- Web -->
		<Window theme="dark" type="default" uiPlatform="web" />
		<Window theme="dark" type="buttonbar" uiPlatform="web" />
		<Window theme="dark" type="toolbar" uiPlatform="web" />
	</div>
</div>

<style lang="scss" scoped>
	main.window-body {
		position: relative;
		width: 400px;
		height: 100px;
		border-radius: var(--win-corner);
		box-shadow: 0 8px 64px rgba(0, 0, 0, 0.455);
	}
</style>
