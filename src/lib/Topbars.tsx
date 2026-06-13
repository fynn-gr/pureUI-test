import { useState } from "react";
import "@/pureUI/scss/index.scss";
import Browser from "./Browser";
import Window from "./Window";

export default function Topbars() {
	const [height, setHeight] = useState(200);
	const [width, setWidth] = useState(900);
	const [showContent, setShowContent] = useState(true);
	const [folders, setFolders] = useState(false);
	const [sidebar, setSidebar] = useState(true);
	const [selectedItem, setSelectedItem] = useState(0);

	return (
		<>
			<div className="top">
				<h1>pureUI</h1>
				<h2>Top Bars</h2>

				<input
					type="range"
					name="height"
					min="10"
					max="300"
					step="40"
					value={height}
					onChange={(event) => setHeight(Number(event.target.value))}
				/>
				<input
					type="range"
					name="width"
					min="500"
					max="1000"
					step="100"
					value={width}
					onChange={(event) => setWidth(Number(event.target.value))}
				/>
				<input
					type="checkbox"
					name="content"
					id="show-content"
					checked={showContent}
					onChange={(event) => setShowContent(event.target.checked)}
				/>
				<label htmlFor="show-content">Show Content</label>
				<input
					type="checkbox"
					checked={folders}
					onChange={(event) => setFolders(event.target.checked)}
				/>
				<label>Folder structure</label>
			</div>

			<div
				className="topbars"
				style={
					{
						["--height"]: `${height}px`,
						["--width"]: `${width}px`,
					} as React.CSSProperties
				}
			>
				<h3>macOS</h3>
				<div className="row">
					<Window
						theme="light"
						type="default"
						uiPlatform="mac"
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
					<Window
						theme="dark"
						type="default"
						uiPlatform="mac"
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
				</div>
				<div className="row">
					<Window
						theme="light"
						type="buttonbar"
						uiPlatform="mac"
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
					<Window
						theme="dark"
						type="buttonbar"
						uiPlatform="mac"
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
				</div>
				<div className="row">
					<Window
						theme="light"
						type="toolbar"
						uiPlatform="mac"
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
					<Window
						theme="dark"
						type="toolbar"
						uiPlatform="mac"
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
				</div>

				<h3>macOS Tahoe</h3>
				<div className="row">
					<Window
						theme="light"
						type="default"
						uiPlatform="tahoe"
						fullContent
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
					<Window
						theme="dark"
						type="default"
						uiPlatform="tahoe"
						fullContent
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
				</div>
				<div className="row">
					<Window
						theme="light"
						type="buttonbar"
						uiPlatform="tahoe"
						largeCorner
						fullContent
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
					<Window
						theme="dark"
						type="buttonbar"
						uiPlatform="tahoe"
						largeCorner
						fullContent
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
				</div>

				<h3>Windows</h3>
				<div className="row">
					<Window
						theme="light"
						type="default"
						uiPlatform="win"
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
					<Window
						theme="dark"
						type="default"
						uiPlatform="win"
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
				</div>
				<div className="row">
					<Window
						theme="light"
						type="buttonbar"
						uiPlatform="win"
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
					<Window
						theme="dark"
						type="buttonbar"
						uiPlatform="win"
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
				</div>
				<div className="row">
					<h3>Web</h3>
					<Browser theme="light" />
					<Browser theme="dark" />
				</div>
				<div className="row">
					<Window
						theme="light"
						type="buttonbar"
						uiPlatform="web"
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
					<Window
						theme="dark"
						type="buttonbar"
						uiPlatform="web"
						sidebar={sidebar}
						setSidebar={setSidebar}
						showContent={showContent}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						folders={folders}
					/>
				</div>
			</div>
		</>
	);
}
