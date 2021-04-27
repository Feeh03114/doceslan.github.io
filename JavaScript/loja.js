const itenstorta = [
    {
        id:0,
        nome: 'Frango com catupiry',
        preco: 5.00,
        quantidade:0

    },
    {
        id:1,
        nome: 'Brócolis com mussarela',
        preco: 5.00,
        quantidade:0

    },
    {
        id:2,
        nome: 'Calabresa com mussarela',
        preco: 5.00,
        quantidade:0

    }
]
const itensbolos = [
    {
        id:0,
        nome: 'Bolo de cenoura',
        preco: 50.00,
        quantidade:0

    },
    {
        id:1,
        nome: 'Bolo de prestígio',
        preco: 50.00,
        quantidade:0

    }
]

const itenschocolate = [
    
]

inicializarloja = () => {
    let containerprodutos = document.getElementById('tortas');
    itenstorta.map((val)=>{
        preco = (val.preco).toFixed(2)
        containerprodutos.innerHTML +=`
            <a  key="`+val.id+`" href="#" class='venda' id="torta">ADD</a>
            `+val.nome+` <strong>R$</strong>`+preco.replace(".",",")+`<br>
        `;
    })

    containerprodutos = document.getElementById('bolos');

    itensbolos.map((val)=>{
        preco = (val.preco).toFixed(2)
        containerprodutos.innerHTML +=`
            <a  key="`+val.id+`" href="#" class='venda' id='bolo'>ADD</a>
            `+val.nome+` <strong>R$</strong>`+preco.replace(".",",")+`<br>

        `;
    })

    /*itenschocolate.map((val)=>{
        containerprodutos.innerHTML +=`
            <a  key="`+val.id+`" href="#" class='venda' id='bolo'>ADD</a>
            `+val.nome+` <strong>R$</strong>`+val.preco+`<br>

        `;
    })*/


}

inicializarloja();

var valorbolo = 0
var valortorta = 0
var containertotalproduto = document.getElementById('totalproduto');
atualizarcarrinho = () =>{
    console.log(itensbolos)
    console.log(itenstorta)
    
    let containercarrinho = document.getElementById('carrinho');
    
    containercarrinho.innerHTML = "";

        itenstorta.map((val)=>{
            
            if(val.quantidade > 0){
                quant = (val.quantidade*val.preco).toFixed(2)
                valortorta += (val.preco * val.quantidade)
                containercarrinho.innerHTML +=`
                `+val.nome+` | `+val.quantidade+` Un | R$`+quant.replace(".",",")+`<br>
        `;
        }})
        
        itensbolos.map((val)=>{
            if(val.quantidade > 0){
                quant = (val.quantidade*val.preco).toFixed(2)
                valorbolo += (val.preco * val.quantidade)
                containercarrinho.innerHTML +=`
                `+val.nome+` | `+val.quantidade+` KG | R$`+quant.replace(".",",")+` <br>
            `; 
            }})

    
    containertotalproduto.innerHTML = "";
        
    valorestotais();
}


valorestotais = () => {
    let total = valorbolo + valortorta
    let total2 = total.toFixed(2)
    let totalstring =  total2.replace(".",",")
    containertotalproduto.innerHTML +=`
        R$ `+totalstring+`<br>
    `;
}

let links = document.getElementsByClassName("venda");
for(let i =0;i<links.length;i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        if(links[i].id =='torta'){
            itenstorta[key].quantidade++;
            atualizarcarrinho();
            return false;
        }else if (links[i].id=='bolo'){
            itensbolos[key].quantidade++;
            atualizarcarrinho();
            return false;
        }else{

        }  
    })
}

var radios = document.getElementById('retirar');
for(var i =0;i<radios.length;i++){
    radios[i].addEventListener("click",function(){
        if(radios[i].checked =='true' ){
            valorestotais();
        }
    })
}


enviar = () =>{

}

