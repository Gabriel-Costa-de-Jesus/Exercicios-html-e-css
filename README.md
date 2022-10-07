<html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Git Hub</title>
    <link rel="shortcut icon" href="img/Thesquid.ink-Free-Flat-Sample-Space-rocket.ico" type="image/x-icon">
    <style>
        @import url('https://fonts.googleapis.com/css2? família= Abissinica+SIL &family= Passion+One & display=swap');
:root {
    --font-biografia: 'Abyssinica SIL', sans-serif;
}
@media screen and (max-width: 700px) {
    body #content-bio #img-programador {width: 150px;height: 150px;}
    html body main {width: 98%;}
    main #content-projetos #div-projetos a {font-size: 1em;}
    main #content-projetos #div-projetos {width: 99%;}
    body #content-bio h1 {font-size: 1em;}
    main aside #nave {display: none;} 
    
    
}
@media screen and (max-width: 1100px) {
    body main {width: 100%;}
    #content-projetos #div-projetos a {font-size: 1em;}
    #content-projetos #div-projetos {width: 100%;}
    main aside #nave {display: none;} 
}
@keyframes nave {
    0% { bottom: 5%; left: -2%; opacity: 1;}
    10% {left: 85%;bottom: 80%; transform: rotate(90deg);}
    15% {transform: rotate(270deg);  left: 85%;}
    20% {transform: rotate(270deg);  left: 5%;}
    30% {transform: rotate(180deg);  left: 5%;}
    40% {transform: rotate(90deg);  left: 5%;}
    50% {transform: rotate(90deg);  left: 85%; bottom: 5%;}
    60% {transform: rotate(180deg);  left: 85%; bottom: 5%; width: 100px;}
    70% {transform: rotate(230deg);  left: 70%; bottom: 9%; width: 200px;}
    80% {transform: rotate(270deg);  left: 85%; bottom: 8%;}
    100% {transform: rotate(270deg);  left: -100%; bottom: 8%; opacity: 1;}
}
* {margin: 0; padding: 0;}

body {
    background-color: darkblue;
    color: white;
}
main {
    width: 65%;
    margin: 0 auto;
    border: 2px solid rgba(255, 255, 255, 0.699);
    box-shadow: 1px 1px 5px black;
}
/* Formatação de containers */
#content-bio {
    margin-top: 30px;
    padding: 20px; 
}
#content-projetos div {
    width: 60%;
    margin: 0 auto;
    border: 2px  solid wheat;
    margin-bottom: 20px;
}
#content-projetos div a {
    display: block;
    color: black;
    font-size: 1.7em;
    text-decoration: none;
    font-weight: bolder;
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 2px;
    background-color: beige;
    text-align: center;
    border: 2px solid black;
    padding: 15px;
    margin: 15px 20px 15px 20px;
}
#content-projetos div a:hover {
    border: 2px solid darkturquoise;
    transform: scale(1.05);
    color: white;
    background-color: rgba(0, 0, 0, 0.699);
    font-family: Arial, Helvetica, sans-serif;
}
#content-projetos div a:active {
    color: red;
}
/* Formatação de imagens */
#img-programador {
    float: right;
    border-radius: 250px;
    width: 37%;
    height: 300px;
    margin-left: 5px;
}
.img-logo {
    width: 50px;
    height: 50px;
    margin-top: 50px;
}
/* Formatação de texto */
#content-bio h1 {
    text-transform: uppercase;
    margin-bottom: 20px;
}
#content-bio p {
    margin-top: 20px;
    font-size: 20px;
    font-family: var(--font-biografia);
}
#content-projetos h1 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
}
/* Nave animação */
#nave{
    opacity: 0;
    position: absolute;
    height: 30%;
    width: 10%;
    transform: rotate(45deg);
    animation: nave 20s ease-in-out;
}
    </style>
</head>
<body>
    <main>
        <section id="content-bio">
            <img src="data:image/jpeg;base64,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" alt="" id="img-programador">
            <h1>Sobre mim</h1>
            <p><strong>Seja bem vindo (a) a página!</strong></p>
            <p>Olá! Criei essa página para hospedar todos os meus projetos</p>
            <p>Aqui você podera ver meus projetos feito com Html e CSS, alguns envolvem JavaScript</p>
            <p>Fique a vontade para olhar a Página e clicar em um dos meus projetos</p>
            <a href=""><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="" class="img-logo"></a>
            <a href=""><img src="https://o.remove.bg/downloads/f4c01262-0b0c-4c74-a80c-b1807e686a90/png-transparent-whatsapp-computer-icons-android-emoji-whatsapp-trademark-logo-payment-thumbnail-removebg-preview.png" alt="" class="img-logo"></a>
            <a href=""><img src="https://o.remove.bg/downloads/991099a5-a04f-4a50-b42f-ef29894047e0/1384017-removebg-preview.png" alt="" class="img-logo"></a>
            <a href=""><img src="https://o.remove.bg/downloads/e25c926f-4c23-4bd4-998f-47f221b4bb3f/image-removebg-preview.png" alt="" class="img-logo"></a>
            <div style="clear: both;"></div>
            <br>
            <hr>
        </section>
        <section id="content-projetos">
            <h1>Meus Projetos</h1>
            <div id="div-projetos">
                <a href="https://gabriel-costa-de-jesus.github.io/Projetos-Html-Css/Projeto1/index.html">Android Site</a>
                <a href="https://gabriel-costa-de-jesus.github.io/Projetos-Html-Css/Projeto2/index.html">Cordel Moderno</a>
                <a href="https://gabriel-costa-de-jesus.github.io/Projetos-Html-Css/Efeito-Parallax/index.html">Efeito Parallax</a>
            </div>
            <aside><img src="https://jornalismo.portaldaindustria.com.br/torneiro-de-robotica-2018/assets/imgs/FogueteAnimado.gif" alt="" id="nave"></aside>
        </section>
    </main>
</body>
</html>
