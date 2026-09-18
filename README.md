Aula-04/09/2026 - USE-STATE

1 - git clone endereço remoto do repositório

2 - Acessar a pasta do repositório e verificar a branch atual com o comando git branch

3 - Se a branch for main, rode o git flow init, caso a branch seja develop, rode git switch main e depois rode git flow init.
Obs: Se estiver nas máquinas da instituição de ensino é necessário realizar a instalação do GitFlow através da seguinte linha de comando.
//Instalação do GITFLOW no WINDOWS
winget install GitTower.GitFlowNext

4 - Após rodar o git-flow, você deve fazer com o terminal local reconheça as branchs remotas, rode o comando git branch -a, uma listagem acontece, vá até o final deste e quando aparecer o END(só aparece end no caso do gitbash), pressione a tecla Q.

5 - Agora você consegue acessar sua branch, rode o comando git switch nomeDaSuaBranch Ex: feature/exemplo-rm666999

6 - Estando em sua branch, acesse a pasta  my-app que foi criada na tarefa da aula do dia 02/09/2026, rode o comando cd my-app.

7 - Agora podemos acessar o VSCode, rode o comando code . e depois pode fechar o gitbash.

8 - No VSCode, abra um terminal, de preferência um que seja o CMD por causa da compatibilidade com o JS, verifique se realmente está na pasta my-app, se estiver rode o comando npm i ou npm install para baixar as dependências do projeto.

9 - Agora podemos colocar o projeto no AR em modo de desenvolvimento,  rodando o comando npm run dev, neste momento o terminal fica travado, utilize os atalhos disponiveis neste terminal.

10 - Abra um novo terminal para ficar disponível para novas tarefas.

-------------------------------------------------------------------
INSTALANDO E CONFIGURANDO ROTAS NO PROJETO
-------------------------------------------------------------------
## 1. Instalar os pacotes

Execute no terminal:
```bash
npm install react-router
```
---

## 2. Criar a pasta de rotas

Crie a pasta `routes` dentro de `src`:

```text
src/
└── routes/
```
---

## 3. Criar os componentes de rota

Adote o seguinte padrão dentro de `src/routes`:
* O nome da subpasta será o nome do componente (ex: `/Produtos`);
* O arquivo do componente sempre se chamará `index.tsx`;
* A função exportada terá o mesmo nome da subpasta: `export default function NomeDaPasta() { ... }`.

Rotas a serem criadas:
* `src/routes/Home/index.tsx`
* `src/routes/Produtos/index.tsx`
* `src/routes/EditarProdutos/index.tsx`
* `src/routes/Error/index.tsx`

---

## 4 e 5. Importar recursos no `main.tsx`

No arquivo `src/main.tsx`, importe os componentes criados e os utilitários de roteamento:

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router'

import App from './App'
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import EditarProdutos from './routes/EditarProdutos'
import Error from './routes/Error'
```

---

## 6. Configurar a árvore de rotas

Defina a constante `router` utilizando `createBrowserRouter`:

```tsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/editar-produtos', element: <EditarProdutos /> }
    ]
  }
])
```

---

## 7. Atualizar a renderização no `main.tsx`

Substitua `<App />` diretamente por `<RouterProvider router={router} />`:

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
```

---

## 8. Ajustar o layout no `App.tsx`

No componente `App.tsx`, substitua o conteúdo estático pelo componente `<Outlet />`:

```tsx
import { Outlet } from 'react-router'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

export default function App() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  )
}
```

---

## 9. Testar rotas no navegador

Acesse diretamente pela URL para validar a navegação:
* `http://localhost:5173/`
* `http://localhost:5173/produtos`
* `http://localhost:5173/editar-produtos`

> **Nota:** O cabeçalho e o rodapé permanecem estáticos na tela; apenas a área do `<Outlet />` é atualizada.

---

## 10. Criar o componente `<Menu />`

Crie o componente de navegação usando `<Link>` e insira-o dentro do `<Cabecalho />`:

```tsx
import { Link } from 'react-router'

export default function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/editar-produtos">Editar Produtos</Link></li>
      </ul>
    </nav>
  )
}
```
