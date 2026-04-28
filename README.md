# PetroEnergy — Site Corporativo

Projeto desenvolvido como trabalho semestral da disciplina de Codigos de alta performance. Trata-se de um site corporativo fictício para a empresa PetroEnergy, uma grande companhia petroleira listada em bolsa, construído com o framework Angular.

---

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Páginas](#páginas)
- [Componentes](#componentes)
- [Como Executar](#como-executar)
- [Integrantes do Grupo](#integrantes-do-grupo)

---

## Sobre o Projeto

O site foi desenvolvido com o objetivo de apresentar a identidade visual e institucional da PetroEnergy. O projeto contempla três páginas principais, componentes compartilhados entre elas e navegação por rota sem recarregamento de página (SPA — Single Page Application).

O conteúdo do site abrange:

- A história, missão, visão e valores da empresa
- Um feed com os três últimos projetos de exploração de combustíveis fósseis, com link para leitura completa de cada post
- Uma página dedicada aos projetos sociais mantidos pela empresa

Todo o HTML foi desenvolvido de forma semântica e acessível, e o layout é responsivo para dispositivos móveis.

---

## Tecnologias Utilizadas

- Angular 17
- TypeScript
- HTML5 semântico
- CSS3 com variáveis e media queries
- Angular Router para navegação SPA

---

## Estrutura de Pastas

```
src/
└── app/
    ├── components/
    │   ├── header/           # Cabecalho com logo da empresa
    │   ├── navbar/           # Menu de navegacao entre paginas
    │   ├── footer/           # Rodape com contato e copyright
    │   ├── homeComponent/    # Banner hero da pagina inicial
    │   └── post-card/        # Card reutilizavel de post
    ├── pages/
    │   ├── home/             # Pagina inicial com feed de posts
    │   ├── sobre/            # Pagina institucional com MVV
    │   ├── projetos/         # Pagina de projetos sociais
    │   └── post-view/        # Pagina de leitura completa do post
    ├── app.html              # Template raiz com router-outlet
    ├── app.ts                # Componente raiz
    ├── app.css               # Estilos globais
    └── app.routes.ts         # Definicao de rotas
```

---

## Páginas

### Inicio — `/`

Exibe o banner hero com apresentação da empresa e um feed com os três últimos projetos de exploração. Cada card possui uma imagem, data, título, resumo e link para a leitura completa do post.

### Sobre — `/sobre`

Apresenta a história da empresa, números em destaque (anos de mercado, países de atuação, colaboradores e reservas), as seções de Missão, Visão e Valores, e as áreas de atuação da PetroEnergy.

### Projetos Sociais — `/projetos`

Exibe seis projetos sociais da empresa em formato de cards com imagem, categoria, título e descrição. Ao clicar em um card, um modal é aberto com os detalhes completos do projeto, incluindo localização, número de beneficiados e ano de início.

### Post Completo — `/post/:id`

Página de leitura de um post específico, acessada ao clicar em "Ler post completo" em um dos cards do feed. Exibe a imagem de capa, título, autor, data e o conteúdo completo do post em parágrafos. O parâmetro `:id` na URL determina qual post é exibido.

---

## Componentes

### Header — `app-header`

Exibe o logotipo textual da empresa no topo da aplicação. Presente em todas as páginas por estar no template raiz.

### Navbar — `app-navbar`

Menu de navegação com os links para as três páginas principais. Utiliza `routerLink` para navegação SPA e `routerLinkActive` para destacar a página atual.

### Footer — `app-footer`

Rodapé com o logotipo, informações de contato (endereço, e-mail e telefone), links legais e copyright com ano dinâmico.

### HomeBanner — `app-home-banner`

Banner hero exibido no topo da página inicial. Contém título, texto de apresentação, botões de ação e um painel lateral com números em destaque da empresa.

### PostCard — `app-post-card`

Card reutilizável que exibe as informações resumidas de um post. Recebe os dados via `@Input()` e é utilizado no feed da página inicial. Ao clicar no link do card, navega para a página de leitura completa.

---

## Como Executar

**Pré-requisitos:** Node.js instalado na máquina.

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/petro-energy-av1.git
```

2. Acesse a pasta do projeto:

```bash
cd petro-energy-av1
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

5. Acesse no navegador:

```
http://localhost:4200
```

---

## Integrantes do Grupo

| Nome | RA |
|------|----|
| Gabriel Camargo Vanin | 28325665 |
| Integrante 2 | 000000 |
| Integrante 3 | 000000 |
| Integrante 4 | 000000 |

---
