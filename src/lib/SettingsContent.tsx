import type { FC } from "react";

interface SettingsContentProps {
	onChange?: () => void;
	version?: string;
}

const SettingsContent: FC<SettingsContentProps> = ({
	onChange = () => {},
	version = "0.1",
}) => {
	return (
		<div className="settings-content">
			<h2>Settings</h2>
			<p>Version {version}</p>
			<div className="settings-placeholder">
				<p>This is a placeholder for React settings content.</p>
				<button onClick={onChange}>Refresh</button>
			</div>
		</div>
	);
};

export default SettingsContent;
