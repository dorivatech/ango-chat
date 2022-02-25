# Histórico de Alterações do projecto

Se quiser saber mais sobre o projecto, dá uma olhada no README.md. Neste arquivo eu explico quais ideias tive e como foi o processo de desenvolvimento do app.

Nota: Algumas vezes eu vou falar no passado e outras no presente, mas não liguem (é uma particularidade minha eu acho). E se calhar também falarei em inglês. But whatever 😂😁😅😅


## Data: 09 / 02 / 2022 => 10 / 02 / 2022

Hoje estou a trabalhar no layout da aplicação (estou a me inspirar em um layout que peguei de um template chamado "metronic", usei pela primeira vez no back-office do projecto [Portal Carreiras](http://portal-carreiras-bo.herokuapp.com), link este que pode mudar porque a plataforma ainda não está em produção).

Vou adicionar uma landing page com um form básico para guardar as informações do user que está a entrar na plataforma

Então bora codar... 😉

Primeiro tentei implementar uma funcionalidade de mudança de temas, tentei usar Cookies, mas tive alguns problemas. Neste momento estou a mudar para o localStorage e ver se me facilita. No caso eu quero guardar o tema em algum lugar no navegador e depois ir colocando classes no body.

Acabei por descobrir que afinal o problema não estava nos Cookies e sim na forma como eu interagia com eles. Então vou corrigir os meus problemas aqui com LocalStorage e depois voltar a usar Cookies.

Problema: o "```this```" retorna ```undefined``` nessa parte do código (o arquivo actualmente está em ```public/js/Theme.js```):
```bash
export const Theme = {
    ...
    theme: this.getLocalStorageTheme() || 'light'
    ...
}
```

Correção: resolvi o problema preenchendo o valor do atributo theme dentro do método init(), ficando assim o seguinte:
```bash
export const Theme = {
    ...
    theme: this.getLocalStorageTheme() || 'light',
    ...
    init: function() {
        this.theme = this.getLocalStorageTheme() || 'light';
        ...
    }
    ...
}
```

Voltei a trabalhar com os Cookies e adivinha só? Está tudo funcional 😊😊

Adicionei o .env ao jogo, nesse momento tem apenas a porta do projecto.

Pensei em usar o [sass](https://sass-lang.com/) e achei que tivesse que fazer bwede configurações ou algo assim. Mas adivinha, não precisei fazer nada além de colocar o arquivo style.scss na pasta de assets/scss. Depois de mandar o código que estava em assets/css/style.css para assets/scss/style.scss e salvar notei que o compilador já fazia todos os processos.
Afinal não, tinha outra janela do terminal compilando o sass 🙄🙄 mas vou deixar assim por enquanto.


## Data: 12 / 02 / 2022 => 13 / 02 / 2022

Comecei a trabalhar na estilização dos temas. Estou a usar um únimo arquivo scss chamado ```main.scss``` e nele faço o import de ambos os temas (```light.scss``` e ```dark.scss```) e também do style.scss.

Coloquei a funcionalidade de entrar sem nome ou entrar com um nome.

## Data: 22 / 02 / 2022 => Por acaso esse foi o último palíndromo da decada (nada a ver)

Estou a adicionar um botão de voltar para quando o usuário está em um chat.

## Data: 25 / 02 / 2022

Hoje pensei em procurar uma solução para a questão do sass não compilar com o node-sass. Encontrei algumas soluções que ainda nem testei, mas assim que o fizer (que é tipo daqui a uns minutos), vour deixar aqui os links para servir de referência.

Ah ia me esquecendo, para trabalhar nisso criei uma nova feature (git flow). Os links que usei a seguir, se precisarem de alguma ideia podem olhar lá nos links, com certeza eu vou deixar o link que me ajudou a resolver isso (isso se eu resolver 😅😄).

* [Trying to compile and use nodemon to run a server - Not behaving as expected](https://github.com/remy/nodemon/issues/1711) confeço que o que esse cara estava fazendo aqui me fez ver que ainda estou muito longe de ser um super programador. Tipo coisas que eu nem pensava em fazer, ele implementou e estava apenas com alguns probleminhas. Consolo, eu conegui entender mais ou menos, só não teria pensado naquilo sozinho.

* [Watch CSS setup with node-sass and nodemon](https://gist.github.com/andrew-rayco/0f94245718067affa0dc06f5ab3b998c) esse por acaso foi bem útil, me deu algumas dicas de como funcionam as coisas e o que deve estar em package.json, porém não funcionou para mim. Acho que só preciso me concentrar mais. Vamos ao que esse link me disse (ou o autor no caso)... Acabei de me lembrar que deixei o link para leitura então deixa pra lá.

Depois de um tempo me rendi e fui ver uma vídeo aula.

[Node Express and SASS/SCSS Setup](https://www.youtube.com/watch?v=EsSHjDo0Y3E) o que esse vídeo me ensinou? Básico, eu já consegui montar os meus scripts que vão rodar o ```index.js``` e outro para o sass. Então eu só preciso rodar eles ao mesmo tempo e esse vídeo recomendou o npm package [npm-run-all](https://www.npmjs.com/package/npm-run-all) que com um parâmetro ```--parallel``` eu consigo rodar vários scripts ao mesmo tempo. Então, bora codificar... e testar, porque ainda nem testei 😅😄

Prontos, está a funcionar, vamos lá ver o que fiz.
* Instalei o [npm-run-all](https://www.npmjs.com/package/npm-run-all) as a devDependency;
* Adicionei os seguintes scripts:
```bash
{
    ...
    "dev": "npm-run-all --parallel run-index build-css",
    "run-index": "nodemon index.js",
    "build-css": "sass --no-source-map --watch public/assets/scss/main.scss public/assets/css/main.css"
    ...
}
```
* Agora só preciso rodar ```yarn dev``` ou ```npm run dev``` e pumba! Está funcional