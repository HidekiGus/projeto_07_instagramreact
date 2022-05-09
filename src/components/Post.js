import Usuario from "./Usuario";
import Curtidas from "./Curtidas";

export default function Post(props) {
    return (
        <div class="post">
            <div class="topo">
              <Usuario image={props.imageUsuario} nome={props.nomeUsuario} />
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>
        
            <div class="conteudo">
              <img src={props.imageConteudo} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>
                <Curtidas image={props.imageCurtidas} nome={props.nomeCurtidas} pessoas={props.pessoasCurtidas} />
            </div>
        </div>
    );
}

<Post imageUsuario="assets/img/meowed.svg" nomeUsuario="meowed" imageConteudo="assets/img/gato-telefone.svg" imageCurtidas="assets/img/respondeai.svg" nomeCurtidas="respondeai" pessoasCurtidas="101.523" />