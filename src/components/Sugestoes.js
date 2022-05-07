import Sugestao from "./Sugestao";

export default function Sugestoes() {
    //logica
    const sugestoes = [
        ["assets/img/bad.vibes.memes.svg", "bad.vibes.memes", "Segue você"],
        ["assets/img/chibirdart.svg", "chibirdart", "Segue você"],
        ["assets/img/razoesparaacreditar.svg", "razoesparaacreditar", "Novo no Instagram"],
        ["assets/img/adorable_animals.svg", "adorable_animals", "Segue você"],
        ["assets/img/smallcutecats.svg", "smallcutecats", "Segue você"]
    ];
    
    //UI
    return (
        <div>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestoes.map(sugestao => <Sugestao image={sugestao[0]} nome={sugestao[1]} razao={sugestao[2]} />)}
            </div>
        </div>
    );
}