<script lang="ts">
interface Props{
	theme: "light" | "dark";
}
 let {theme} : Props = $props();
</script>

<div class="browser" class:light={theme == "light"} class:dark={theme == "dark"}>
	<div class="win-buttons-mac" data-tauri-drag-region>
		<button>
			<img src="./icons/native/winButtonsMacClose.svg" alt="" />
		</button>
		<button>
			<img src="./icons/native/winButtonsMacMin.svg" alt="" />
		</button>
		<button>
			<img src="./icons/native/winButtonsMacMax.svg" alt="" />
		</button>
	</div>
	<div class="bar">
		<div class="search">https://www.pureUI-test.org/web</div>
	</div>
	<div class="tab">
		<p>pureUI Testing</p>
		<div class="corner"></div>
		<div class="corner"></div>
	</div>
</div>

<style>
	.browser {
		position: relative;
		z-index: 10;
		top: 0px;
		width: var(--width);
		height: 88px;
		background-color: var(--bg);
		border-radius: 9px 9px 0 0;
		box-shadow: 0px -1px 2px 1px rgba(0, 0, 0, 0.094);

		&.light {
			--bg: #d3e3fd;
			--search: #edf2fa;
			--tab: #fff;
			--text: #000;
			--search-text: #000000;
		}

		&.dark {
			--bg: #202020;
			--search: #272727;
			--tab: #3b3b3b;
			--text: #fff;
			--search-text: #bfbfbf;
		}

		.win-buttons-mac {
			position: absolute;
			top: 15px;
			left: 20px;
			display: flex;

			button {
				width: 12px;
				height: 12px;
				box-sizing: border-box;
				border: none;
				border-width: 1px;
				border-radius: 50%;

				img {
					display: none;
					position: relative;
				}
			}

			&:hover {
				img {
					display: block;
				}
			}

			& > :nth-child(1) {
				background-color: rgb(254, 95, 87);
				border-color: rgb(127, 47, 43);
				margin-right: 8px;
			}

			& > :nth-child(2) {
				background-color: rgb(255, 188, 46);
				border-color: rgb(128, 94, 23);
				margin-right: 8px;
			}

			& > :nth-child(3) {
				background-color: rgb(40, 200, 65);
				border-color: rgb(20, 100, 33);
			}

			& > .disabled {
				background-color: var(--traffic-light-disabled);
				border-color: var(--traffic-light-disabled-border);

				img {
					display: none;
				}
			}
		}

		.bar {
			position: absolute;
			display: flex;
			flex-direction: row;
			justify-content: stretch;
			bottom: 0;
			height: 47px;
			width: var(--width);
			background-color: var(--tab);
			border-bottom: 1px solid rgba(128, 128, 128, 0.269);

			.search {
				flex: 1;
				height: 34px;
				margin: 6px;
				line-height: 34px;
				padding: 0 12px;
				border-radius: 17px;
				color: var(--search-text);
				background-color: var(--search);
			}
		}

		.tab {
			position: absolute;
			top: 7px;
			left: 95px;
			height: 34px;
			width: 225px;
			padding-left: 12px;
			text-align: left;
			font-weight: 600;
			line-height: 34px;
			color: var(--text);
			background-color: var(--tab);
			border-radius: 10px 10px 0 0;

			p {
				color: var(--text);
			}

			.corner {
				position: absolute;
				bottom: 0;
				left: -15px;
				width: 15px;
				height: 15px;
				background-color: var(--tab);
				&::before {
					content: "";
					position: absolute;
					top: 0;
					right: 0;
					width: 15px;
					height: 15px;
					background-color: var(--bg);
					border-radius: 0 0 10px 0;
				}

				&:last-child {
					left: auto;
					right: -15px;

					&::before {
						border-radius: 0 0 0 10px;
					}
				}
			}
		}
	}
</style>
