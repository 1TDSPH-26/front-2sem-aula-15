
import { useState } from "react";
import imgQuadrada from "../../img/png.png";

export default function Conteudo(){

    let nome:string|null = "Felipe";

    const [nomeState, setNomeState] = useState<string | null>("Joel");

    function alteraNome(){
        nome = prompt("Digite o novo nome: ");
        console.log("nome digitado: ", nome);
    }

    function alteraState(){
        const nome:string | null = prompt("Digite seu nome: ")
        setNomeState((nomeStateAnterior) => nomeStateAnterior = nome);
        console.log("Nome digitado: ",nomeState);
    }

    return(
        <main>
            <div>
                <p>Nome : {nome}</p>
                <button onClick={alteraNome}>Nome = {nome}</button>
            </div>
            <div>
                <p>Nome State: {nomeState}</p>
                <button onClick={alteraState}>Nome = {nomeState}</button>
            </div>
            <section>
                <h2>conteudo basico</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque ipsum voluptate voluptatibus minima animi dolores accusamus nulla laborum asperiores ratione fugit molestias dignissimos vero expedita odio, eum dolore voluptas.</p>
            </section>
            <section>
                <h2>Imagem Exemplo</h2>
                
                <figure>
                    <img src="https://placehold.co/600x400/FFFFF0/FFFFFF/png" alt="exemplo de imgem" />
                    <figcaption> Bolco de imagem 600 x 400</figcaption>

                </figure>
                <figure>
                    <img src={imgQuadrada} alt="exemplo de imgem" />
                    <figcaption> Bolco de imagem 600 x 400</figcaption>

                </figure>

                <figure>
                    <img src="/img/image.png" alt="exemplo de imgem" />
                    <figcaption> Bolco de imagem 600 x 400</figcaption>

                </figure>

            </section>

            <section>
                <h2>Especial</h2>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore distinctio enim debitis quod quaerat cupiditate, optio eaque obcaecati nihil excepturi quam consequuntur, magnam beatae delectus. Doloribus placeat, recusandae reiciendis deleniti sequi est dicta doloremque eum nihil earum vero sed libero qui nesciunt dolorem minus alias nostrum hic quisquam laboriosam!</p>

            </section>
            
        </main>
    )
}

