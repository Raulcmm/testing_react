import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import CounterApp from "./components/01_useState/CounterApp";
// import CounterWithCustomHook from "./components/01_useState/CounterWithCustomHook";
// import HookApp from "./HookApp";
// import SimpleForm from "./components/02_useeffect/SimpleForm";
// import FormWithCustomHook from "./components/02_useeffect/FormWithCustomHook";
// import MultipleCustomHooks from "./components/03_examples/MultipleCustomHooks";
// import FocusScreen from "./components/04_useRef/FocusScreen";
// import RealExampleRef from "./components/04_useRef/RealExampleRef";
// import Layout from "./components/05_useLayoutEffect/Layout";
// import Memorize from "./components/06_memo/Memorize";
// import MemoHook from "./components/06_memo/MemoHook";
// import Padre from "./components/07-tarea-memo/Padre";
// import IntroReducer from "./components/08-reducer/IntroReducer";
import MainApp from "./components/09-useContext/MainApp";

ReactDOM.render(
	<React.StrictMode>
		<MainApp />
	</React.StrictMode>,
	document.getElementById("root")
);
