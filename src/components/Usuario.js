export default function Usuario(props) {
    return (
    <div class="usuario">
        <img src={props.image} />
        {props.nome}
    </div>
    );
}