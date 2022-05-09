import Post from "./Post";

export default function Posts() {
    //logica
    let posts = [
        ["assets/img/meowed.svg", "meowed", "assets/img/gato-telefone.svg", "assets/img/respondeai.svg", "respondeai", "101.523"],
        ["assets/img/barked.svg", "barked", "assets/img/dog.svg", "assets/img/adorable_animals.svg", "adorable_animals", "99.159"]
    ];


    //UI
    return (
    <div class="posts">
        {posts.map(post => <Post imageUsuario={post[0]} nomeUsuario={post[1]} imageConteudo={post[2]} imageCurtidas={post[3]} nomeCurtidas={post[4]} pessoasCurtidas={post[5]} /> )}
      </div>
    );
}