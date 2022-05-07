import Sugestoes from "./Sugestoes";

export default function Sidebar(props) {
    return (
            <div class="sidebar">
                <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <strong>{props.username}</strong>
                    {props.name}
                </div>
                </div>

                <Sugestoes />

                <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
    );
}