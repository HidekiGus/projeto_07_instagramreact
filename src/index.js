import ReactDOM from "react-dom";
import Corpo from "./components/Corpo";

function App() {
    return (
    <div>
        <Corpo imageSidebar="assets/img/catanacomics.svg" usernameSidebar="catanacomics" nomeSidebar="Catana" />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".corpo"));