const usuarios=[
    {nome:"Caique", idade:18},
    {nome:"zezão", idade:19},
    {nome:"luizão", idade:20},
];

let msg= document.getElementById('msg')

const users = usuarios.length;

for(let i=0; i <users; i++){
msg.innerHTML+=`<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

var imagens=[
    'imagens/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x50.jpg',
    'imagens/images.jpg',
    'imagens/images (1).jpg'
];

var Index=0; 
var time=2000;

function slideShow(){
    document.getElementById('image').src= imagens[Index];
    Index++;
    if (Index== imagens.length) {Index= 0;}
    setTimeout("slideShow()", time);
}

slideShow();