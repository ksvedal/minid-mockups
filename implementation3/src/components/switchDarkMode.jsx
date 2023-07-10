import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkmode from "../hooks/useDarkmode";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkmode();
	const [darkmode, setDarkmode] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkmode = (checked) => {
		setTheme(colorTheme);
		setDarkmode(checked);
	};

	return (
		<>
		<DarkModeSwitch className="m-3 text-custom-black dark:text-custom-white"
			checked={darkmode}
			onChange={toggleDarkmode}
			size={30}
		/>
		</>
	);
}
