/*constantes*/
const radio1 = document.getElementById('rd1');
const radio2 = document.getElementById('rd2');
const containertotalproduto = document.getElementById('totalproduto');
const containertotalfrete = document.getElementById('totalfrete');
const containertotal = document.getElementById('totalsub');
let valorbolo = 0
let valortorta = 0
let total = 0



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

;
atualizarcarrinho = () =>{
    let containercarrinho = document.getElementById('carrinho');
    
    containercarrinho.innerHTML = "";
    valortorta = 0
    valorbolo = 0
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
    containertotalfrete.innerHTML = "";
    containertotal.innerHTML = "";
        
    valorestotais();
}


valorestotais = () => {
    let frete = 0
    if(radio2.checked == true){ frete = 2}else{frete = 0.00}
    let totalstring = valorbolo + valortorta
    total = frete + totalstring

    totalstring = totalstring.toFixed(2)
    frete = frete.toFixed(2)
    total = total.toFixed(2)

    containertotalproduto.innerHTML +=`
        R$ `+totalstring.replace(".",",")+`<br><br>
    `;

    containertotalproduto.innerHTML +=`
        R$ `+frete.replace(".",",")+`<br><br>
    `;
    containertotalproduto.innerHTML +=`
       <h2> R$ `+total.replace(".",",")+`</h2>
    `;


}

let links = document.getElementsByClassName("venda");
for(let i =0;i<links.length;i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        if((radio1.checked == true) || (radio2.checked == true)){
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
        }else{
            alert("Por favor selecione se vai retirar ou entregar!!")
        }
    })
}





enviar = () =>{
    atualizarcarrinho();
    let tipopagamento = document.getElementById("typepagamento").value;
    let lugar = document.getElementById("enderecotext").value;
    let numero = '5515998490850'
    let mensagem = ''
    console.log(lugar)
    console.log(radio1.checked)
    if(tipopagamento != ''){
        if((lugar == undefined) && (radio1.checked == true)){
            itenstorta.map((val)=>{  
                if(val.quantidade > 0){
                    valortorta += (val.preco * val.quantidade)
                    mensagem += `(`+val.nome+` | `+val.quantidade+` Un )\n`;
            }})
        
            itensbolos.map((val)=>{
                if(val.quantidade > 0){
                    quant = (val.quantidade*val.preco).toFixed(2)
                    mensagem +=` (`+val.nome+` | `+val.quantidade+` KG )\n`; 
                }})
            
            alert(`Retirar na Rua: Ozires Martins de Siqueira, 99`)
            mensagem += 'Entregar no endereço: Retirada\n'
            
            mensagem += 'Valor total: '+total
            
            window.open('https://api.whatsapp.com/send?phone='+numero+'&text='+mensagem)

            
        }else{
            itenstorta.map((val)=>{  
                if(val.quantidade > 0){
                    valortorta += (val.preco * val.quantidade)
                    mensagem += `(`+val.nome+` | `+val.quantidade+` Un )\n`;
            }})
        
            itensbolos.map((val)=>{
                if(val.quantidade > 0){
                    quant = (val.quantidade*val.preco).toFixed(2)
                    mensagem +=` (`+val.nome+` | `+val.quantidade+` KG )\n`; 
                }})
                
                mensagem += 'Entregar no endereço: '+lugar+'\n'
                mensagem += 'Valor total: '+total

                window.open('https://api.whatsapp.com/send?phone='+numero+'&text='+mensagem)
        }
    }else{
        alert(`Por favor, selecione o tipo de pagamento!!`)
    }
}

