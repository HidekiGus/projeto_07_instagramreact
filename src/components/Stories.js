import Storie from "./Storie";

export default function Stories() {
    //logica
    let stories = [
        ["assets/img/9gag.svg", "9gag"],
        ["assets/img/meowed.svg", "meowed"],
        ["assets/img/barked.svg", "barked"],
        ["assets/img/nathanwpylestrangeplanet.svg", "nathanwpylestrangeplanet"],
        ["assets/img/wawawicomics.svg", "wawawicomics"],
        ["assets/img/respondeai.svg", "respondeai"],
        ["assets/img/filomoderna.svg", "filomoderna"],
        ["assets/img/memeriagourmet.svg", "memeriagourmet"]
    ];


    //UI
    return (
    <div class="stories">
        {stories.map(storie => <Storie image={storie[0]} usuario={storie[1]} />)}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
}