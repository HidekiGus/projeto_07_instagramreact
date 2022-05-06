import ReactDOM from "react-dom";
import Sidebar from "./components/Sidebar";

function App() {
    return (
    <div>
        <Sidebar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".sugestoes"));