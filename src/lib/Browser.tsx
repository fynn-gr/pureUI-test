import type { FC } from "react";

interface BrowserProps {
	theme: "light" | "dark";
}

const Browser: FC<BrowserProps> = ({ theme }) => {
	return (
		<div className={`browser ${theme}`}>
			<div className="win-buttons-mac" data-tauri-drag-region>
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
			<div className="bar">
				<div className="search">https://www.pureUI-test.org/web</div>
			</div>
			<div className="tab">
				<p>pureUI Testing</p>
				<div className="corner"></div>
				<div className="corner"></div>
			</div>
		</div>
	);
};

export default Browser;
