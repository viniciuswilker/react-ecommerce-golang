# Loja Virtual - Teste Técnico Front-end

Aplicação de e-commerce desenvolvida como parte de um teste técnico para a vaga de Front-end Developer.

O projeto consiste em uma loja virtual que consome uma API REST simulada com JSON Server, permitindo a listagem de produtos, interação com itens e gerenciamento de um carrinho de compras funcional.

---

## Tecnologias utilizadas

* React com TypeScript
* Vite
* Context API
* JSON Server
* CSS

---

## Funcionalidades implementadas

* Listagem de produtos consumindo API REST
* Busca e filtragem de produtos
* Carrinho de compras com:

  * Adição de itens
  * Remoção de itens
  * Alteração de quantidade
* Persistência dos dados do carrinho via localStorage
* Cálculo automático de subtotal, frete e total
* Tratamento de estados de carregamento e erro
* Interface responsiva com abordagem mobile-first

---

## Estrutura do projeto

```
src/
├── components/
├── contexts/
├── hooks/
├── services/
├── types/
├── assets/
└── pages/
```

---

## Como executar o projeto

### 2. Instalar as dependências

```
npm install
```

### 3. Executar a aplicação

```
npm run start
```

Esse comando inicia simultaneamente o front-end e a API simulada.

### 4. Acessar no navegador

```
http://localhost:5173

Caso a porta 5173 esteja em uso, o Vite poderá sugerir automaticamente outra porta.

```

---

## API

A aplicação utiliza o JSON Server para simular uma API REST, com base no arquivo:

```
dbTeste.json
```

Endpoint principal:

```
http://localhost:3001/products
```

---

## Diferenciais

* Organização de código com separação de responsabilidades (components, hooks, services e context)
* Utilização de TypeScript para tipagem estática
* Gerenciamento de estado global com Context API
* Persistência de dados no navegador
* Tratamento de estados de loading e erro
* Foco em experiência do usuário e responsividade

---

## Possíveis melhorias

* Implementação de página de detalhes do produto
* Integração com API real
* Implementação de fluxo de checkout
* Adição de testes automatizados

---

## Desenvolvido por

Thábata Jorcovix
Front-end Developer com foco em UX/UI

---

## Observações

Este projeto foi desenvolvido com o objetivo de demonstrar conhecimentos técnicos em desenvolvimento front-end, organização de código e boas práticas.
