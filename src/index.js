import ReactDOM from "react-dom";
import Sidebar from "./components/Sidebar";

function App() {
    return (
    <div>
        <Sidebar image="assets/img/catanacomics.svg" username="catanacomics" name="Catana" />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".sugestoes"));