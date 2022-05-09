import Sidebar from "./Sidebar";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Corpo(props) {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>

      <Sidebar image={props.imageSidebar} username={props.usernameSidebar} name={props.nomeSidebar} />
    </div>
  )
}

