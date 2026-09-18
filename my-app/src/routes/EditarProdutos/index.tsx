import { useEffect, useState } from "react";
import { useParams } from "react-router";

const listaProdutos = [

<<<<<<< HEAD
  {id: 1, nome: "Produto-1", preco: 23.90 },
  {id: 2, nome: "Produto-2", preco: 99.10 },
  {id: 3, nome: "Produto-3", preco: 132.40 },
=======
  { id: 1, nome: "Produto-1", preco: 23.90 },
  { id: 2, nome: "Produto-2", preco: 99.10 },
  { id: 3, nome: "Produto-3", preco: 132.40 },
>>>>>>> f9f31d3e0bd5ef8ca1c8c45de8b1ca939dbbff5b
];

export default function EditarProdutos() {
  document.title = "Editar Produtos";

<<<<<<< HEAD
  const { id } = useParams<{id:string}>();

  const [produto, setProduto] = useState<{ id: number, nome: string, preco: number }>({} as { id: number, nome: string, preco: number });

  useEffect( ()=> {
    const produtoEncontrado = listaProdutos.find( (p)=> p.id ===  Number(id) );
    setProduto(produtoEncontrado!);
  },[]);

  return (
    <main>
        <h2>Editar Produtos</h2>
        <p>ID : {id}</p>

        <div>

        {produto ?
          (
          <div>
            <p>Nome : {produto.nome}</p>
            <p>Preço: {produto.preco}</p>
          </div>
          ):
          (<p>Produto não encontrado!</p>)
         }

        </div>
=======
  const { id } = useParams<{ id: string }>();

  const [produto, setProduto] = useState<{ id: number, nome: string, preco: number }>({} as { id: number, nome: string, preco: number });

  useEffect(() => {

    const produtoEncontrado = listaProdutos.find((p) => p.id === Number(id));

    setProduto(produtoEncontrado!);

  }, []);



  return (
    <main>
      <h2>Editar Produtos</h2>
      <p>ID : {id}</p>

      <div>

        {produto ?
          (
            <div>
              <p>Nome : {produto.nome}</p>
              <p>Preço: {produto.preco}</p>
            </div>
          ) :
          (<p>Produto não encontrado!</p>)
        }

      </div>
>>>>>>> f9f31d3e0bd5ef8ca1c8c45de8b1ca939dbbff5b

    </main>
  )
}