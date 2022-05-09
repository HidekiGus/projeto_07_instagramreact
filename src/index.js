import ReactDOM from "react-dom";
import Corpo from "./components/Corpo";

function App() {
    return (
    <div>
        <Corpo />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".corpoReact"));