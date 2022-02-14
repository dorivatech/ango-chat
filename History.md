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

Agora vou começar a trabalhar nas funcionalidades de entrada no chat e conversa. Começando pela landing page where the user defini se vai entrar com nome ou não e depois vai para o chat e começa a conversar.