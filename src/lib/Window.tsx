import type { FC } from "react";
import AppMenu from "@/pureUI/react/AppMenu";
import AppMenuItem from "@/pureUI/react/AppMenuItem";
import NavItem from "@/pureUI/react/NavItem";
import NavFolder from "@/pureUI/react/NavFolder";
import SelectionBox from "@/pureUI/react/SelectionBox";
import TopBarButton from "@/pureUI/react/TopBarButton";
import TopBarDropdown from "@/pureUI/react/TopBarDropdown";
import TopBarDropdownItem from "@/pureUI/react/TopBarDropdownItem";
import TopBarWebMenu from "@/pureUI/react/TopBarWebMenu";
import WinButtonsMac from "@/pureUI/react/WinButtonsMac";
import WinButtonsMS from "@/pureUI/react/WinButtonsMS";

interface WindowProps {
	theme: "light" | "dark";
	type: "default" | "buttonbar" | "toolbar";
	uiPlatform: "mac" | "win" | "web" | "tahoe";
	largeCorner?: boolean;
	fullContent?: boolean;
	sidebar: boolean;
	setSidebar: (value: boolean) => void;
	showContent: boolean;
	selectedItem: number;
	setSelectedItem: (value: number) => void;
	folders: boolean;
}

const Window: FC<WindowProps> = ({
	theme,
	type,
	uiPlatform,
	largeCorner = false,
	fullContent = false,
	sidebar,
	setSidebar,
	showContent,
	selectedItem,
	setSelectedItem,
	folders,
}) => {
	const toggleSelected = (value: number) => {
		setSelectedItem(value === selectedItem ? 0 : value);
	};

	const windowStyle: React.CSSProperties = {
		...(uiPlatform === "tahoe" && type === "buttonbar"
			? { borderRadius: "var(--win-corner-large)" }
			: {}),
		...(uiPlatform === "tahoe"
			? ({ cornerShape: "superellipse(1.1)" } as any)
			: {}),
	} as React.CSSProperties;

	return (
		<main
			className={`window-body ${uiPlatform} ${theme} ${fullContent ? "fullContent" : ""} ${showContent ? "showContent" : ""}`}
			style={windowStyle}
		>
			<div className={`topbar ${type}`}>
				<div className="topbar-container">
					{(uiPlatform === "mac" || uiPlatform === "tahoe") && (
						<WinButtonsMac />
					)}

					{uiPlatform === "web" && <TopBarWebMenu active="none" name="Test" />}

					{(type === "buttonbar" || type === "toolbar") && (
						<TopBarButton
							id=""
							icon="sidebar"
							onClick={() => setSidebar(!sidebar)}
							toolTip=""
							addClass={sidebar ? "active over-sidebar" : ""}
						/>
					)}

					{uiPlatform === "mac" &&
						(type === "toolbar" || type === "buttonbar") &&
						sidebar && (
							<div
								className="spacer"
								style={{ width: type === "buttonbar" ? 80 : 58, flex: "none" }}
							/>
						)}

					{(uiPlatform === "win" || uiPlatform === "web") &&
						(type === "toolbar" || type === "buttonbar") && (
							<AppMenu name="File">
								<AppMenuItem name="Open" id="" accelerator="Ctrl+O" />
								<AppMenuItem name="Save" id="" accelerator="Ctrl+S" />
								<AppMenuItem name="Save as" id="" accelerator="Ctrl+Shift+S" />
								<div className="seperator" />
								<AppMenuItem name="Quit" id="" accelerator="Ctrl+Q" />
							</AppMenu>
						)}

					{type !== "default" && (
						<SelectionBox
							options={[
								{ name: "One", value: 1 },
								{ name: "Two", value: 2 },
								{ name: "Three", value: 3 },
							]}
							selected={1}
						/>
					)}

					<div className="spacer" />
					{type === "default" ? (
						<div
							className={`window-title ${type === "default" ? "static" : ""}`}
						>
							Window
						</div>
					) : (
						<div className="document-title">
							<p>Document</p>
							<p className="save-indicator">• Edited</p>
						</div>
					)}
					<div className="spacer" />

					{(type === "toolbar" || type === "buttonbar") && (
						<>
							<div className="topbar-group">
								<TopBarButton
									id=""
									icon="pause"
									onClick={() => {}}
									toolTip=""
								/>
								<TopBarDropdown icon={null} toolTip="">
									<TopBarDropdownItem name="Option 1" />
									<TopBarDropdownItem name="Option 2" />
								</TopBarDropdown>
							</div>
							<TopBarDropdown icon="display" toolTip="">
								<TopBarDropdownItem name="Option 1" />
								<TopBarDropdownItem name="Option 2" />
							</TopBarDropdown>
							<div className="topbar-group">
								<TopBarButton
									id=""
									icon="settings"
									onClick={() => {}}
									toolTip=""
								/>
								<TopBarButton
									id=""
									icon="settings"
									onClick={() => {}}
									toolTip=""
								/>
							</div>
						</>
					)}

					{uiPlatform === "win" && <WinButtonsMS />}
				</div>
			</div>

			{type !== "default" && (
				<div className="sidebar" style={{ width: sidebar ? 200 : 0 }}>
					<div className="sidebar-inner">
						<div className="nav-list">
							<NavItem
								name="Home"
								icon="home"
								onClick={() => toggleSelected(1)}
								active={selectedItem === 1}
							/>
							<NavItem
								name="Home"
								icon="home"
								onClick={() => toggleSelected(2)}
								active={selectedItem === 2}
							/>
							{folders && (
								<>
									<NavFolder
										name="Folder 1"
										icon="folder"
										active={selectedItem === 3}
										exposed={true}
										onClick={() => toggleSelected(3)}
										depth={0}
									>
										<NavItem
											name="Subitem 1"
											icon="play"
											onClick={() => toggleSelected(4)}
											active={selectedItem === 4}
											depth={1}
										/>
										<NavFolder
											name="Subfolder 1"
											icon="folder"
											active={selectedItem === 5}
											exposed={true}
											onClick={() => toggleSelected(5)}
											depth={1}
										>
											<NavItem
												name="Subitem 1"
												icon="pause"
												onClick={() => toggleSelected(6)}
												active={selectedItem === 6}
												depth={2}
											/>
										</NavFolder>
									</NavFolder>
									<NavFolder
										name="Folder 1"
										icon="document"
										active={selectedItem === 7}
										exposed={true}
										onClick={() => toggleSelected(7)}
										depth={0}
									>
										<NavItem
											name="Subitem 1"
											icon="settings"
											onClick={() => toggleSelected(8)}
											active={selectedItem === 8}
											depth={1}
										/>
									</NavFolder>
								</>
							)}
						</div>
					</div>
				</div>
			)}

			<div
				className={`content ${showContent ? "showContent" : ""} ${fullContent ? "fullContent" : ""}`}
			/>
			<div className="window-rim"></div>
		</main>
	);
};

export default Window;
