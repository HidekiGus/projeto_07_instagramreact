import Sidebar from "./Sidebar";
import Curtidas from "./Curtidas";
import Usuario from "./Usuario";

export default function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <div class="stories">
          <div class="story">
            <div class="imagem">
              <img src="assets/img/9gag.svg" />
            </div>
            <div class="usuario">
              9gag
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/meowed.svg" />
            </div>
            <div class="usuario">
              meowed
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/barked.svg" />
            </div>
            <div class="usuario">
              barked
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/nathanwpylestrangeplanet.svg" />
            </div>
            <div class="usuario">
              nathanwpylestrangeplanet
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/wawawicomics.svg" />
            </div>
            <div class="usuario">
              wawawicomics
            </div>
          </div>
          
          <div class="story">
            <div class="imagem">
              <img src="assets/img/respondeai.svg" />
            </div>
            <div class="usuario">
              respondeai
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/filomoderna.svg" />
            </div>
            <div class="usuario">
              filomoderna
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/memeriagourmet.svg" />
            </div>
            <div class="usuario">
              memeriagourmet
            </div>
          </div>

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

        <div class="posts">
          <div class="post">
            <div class="topo">
              <Usuario image="assets/img/meowed.svg" nome="meowed" />
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/gato-telefone.svg" />
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
                <Curtidas image="assets/img/respondeai.svg" nome="respondeai" pessoas="101.523" />
            </div>
          </div>

          <div class="post">
            <div class="topo">
              <Usuario image="assets/img/barked.svg" nome="barked" />
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/dog.svg" />
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
              
              <Curtidas image="assets/img/adorable_animals.svg" nome="adorable_animals" pessoas="99.159" />
            </div>
          </div>
        </div>
      </div>

      <Sidebar image="assets/img/catanacomics.svg" username="catanacomics" name="Catana" />
    </div>
  )
}

