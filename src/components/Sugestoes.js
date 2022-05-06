import Sugestao from "./Sugestao";

export default function Sugestoes() {
    return (
        <div>
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao image="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você"/>
            <Sugestao image="assets/img/chibirdart.svg" nome="chibirdart" razao="Segue você"/>
            <Sugestao image="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" razao="Novo no Instagram"/>
            <Sugestao image="assets/img/adorable_animals.svg" nome="adorable_animals" razao="Segue você"/>
            <Sugestao image="assets/img/smallcutecats.svg" nome="smallcutecats" razao="Segue você"/>
        </div>
    );
}