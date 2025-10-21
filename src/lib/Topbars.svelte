<script lang="ts">
	import "../../../scss/index.scss";
	import WinButtonsMac from "../pureUI/components/WinButtonsMac.svelte";
	import WinButtonsMS from "../pureUI/components/WinButtonsMS.svelte";
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore a11y_missing_attribute -->
<div class="topbars">
  <!-- Mac -->
	<main class="window-body mac dark">
		<div class="topbar default">
			<div class="topbar-container">
				<WinButtonsMac></WinButtonsMac>
			</div>
		</div>
	</main>
	<main class="window-body mac dark">
		<div class="topbar buttonbar">
			<div class="topbar-container">
				<WinButtonsMac></WinButtonsMac>
				<button class="topbar-button">
					<img src="./sidebar.svg" />
				</button>
			</div>
		</div>
	</main>
	<main class="window-body mac dark">
		<div class="topbar toolbar">
			<div class="topbar-container">
				<WinButtonsMac></WinButtonsMac>
				<button class="topbar-button">
					<img src="./sidebar.svg" />
				</button>
			</div>
		</div>
	</main>

  <!-- Win -->
	<main class="window-body win dark">
		<div class="topbar default">
			<div class="topbar-container">
        <WinButtonsMS></WinButtonsMS>
			</div>
		</div>
	</main>
	<main class="window-body win dark">
		<div class="topbar buttonbar">
			<div class="topbar-container">
				<button class="topbar-button">
					<img src="./sidebar.svg" />
				</button>
			</div>
		</div>
	</main>
	<main class="window-body win dark">
		<div class="topbar toolbar">
			<div class="topbar-container">
				<WinButtonsMac></WinButtonsMac>
				<button class="topbar-button">
					<img src="./sidebar.svg" />
				</button>
			</div>
		</div>
	</main>
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
