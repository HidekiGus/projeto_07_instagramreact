export default function Curtidas(props) {
    return (
        <div class="curtidas">
                <img src={props.image} />
                <div class="texto">
                  Curtido por <strong>{props.nome}</strong> e <strong>outras {props.pessoas} pessoas</strong>
                </div>
        </div>
    );
}
