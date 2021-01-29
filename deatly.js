/* Get Format */ 
function $(obj){
    obj = document.querySelector(obj);
    return obj;
}
/* Get Format /*/

/* Load Script */
function loadScript(scriptTag){
    var arr = document.getElementsByClassName(scriptTag);
    for (var n = 0; n < arr.length; n++)
        eval(arr[n].innerHTML);
}
/* Load Script /*/

let closeBtn = $('.close')
let wrap = $('.wrap')
let wrapContent = $('.wrap-content')
let sombra = $('.sombra')
let loading = $('#loading')
let mainContent = $('.main-content')

document.onload = call();

function call(){
    fecharWrap();
}

function setResponse(){
    wrapContent.innerHTML = ajax.response;
    loading.style.display = 'none';
}

function fecharWrap(){
    closeBtn.onclick = () => {
        wrap.style.display = 'none';
        wrapContent.innerHTML = '';
        sombra.style.display = 'none';
    } 
}

function abrirWrap(){
/*     wrapContent.innerHTML = ''; */
    wrap.style.display = 'block';
    sombra.style.display = 'block'; 
}

function buscarOrder(order){
    ajax = new XMLHttpRequest;
    ajax.open('GET','./source/order.php?order='+order)
    ajax.onloadend = () => {
        loading.style.display = 'none'        
        jsonResponse = JSON.parse(ajax.response)
        $('#orderNumber').innerHTML = jsonResponse[0].order
        $('#shipping_code').value = jsonResponse[0].shipping_code
        $('#shipping_status').value = jsonResponse[0].shipping_status
        $('#payment_id').value = jsonResponse[0].payment_id
        $('#product_id').value = jsonResponse[0].product_id
        $('#product_name').value = jsonResponse[0].product_name
        $('#v1').value = jsonResponse[0].v1
        $('#sku1').innerHTML += ' ('+jsonResponse[0].var1_name+')'
        $('#v2').value = jsonResponse[0].v2
        $('#sku2').innerHTML += ' ('+jsonResponse[0].var2_name+')'
        $('#v3').value = jsonResponse[0].v3
        $('#sku3').innerHTML += ' ('+jsonResponse[0].var3_name+')'
        $('#v4').value = jsonResponse[0].v4
        $('#sku4').innerHTML += ' ('+jsonResponse[0].var4_name+')'
        $('#v5').value = jsonResponse[0].v5
        $('#sku5').innerHTML += ' ('+jsonResponse[0].var5_name+')'
        $('#method').value = jsonResponse[0].method
        $('#payment_status').value = jsonResponse[0].payment_status
        $('#installments').value = jsonResponse[0].installments
        $('#value').value = jsonResponse[0].value
        $('#name').value = jsonResponse[0].name
        $('#fullname').value = jsonResponse[0].fullname
        $('#email').value = jsonResponse[0].email
        $('#area').value = jsonResponse[0].area
        $('#phone').value = jsonResponse[0].phone
        $('#document').value = jsonResponse[0].document
        $('#street').value = jsonResponse[0].street
        $('#number').value = jsonResponse[0].number
        $('#complement').value = jsonResponse[0].complement
        $('#neighborhood').value = jsonResponse[0].neighborhood
        $('#city').value = jsonResponse[0].city
        $('#state').value = jsonResponse[0].state
        $('#zip').value = jsonResponse[0].zip      
        $('#shipping_codeBtn').onclick = () => {
            $('#confirm-text').innerHTML = 'Você está alterando código de rastreio de \''+jsonResponse[0].shipping_code+'\' para \''+$('#shipping_code').value+'\'.'
            $('.confirmar').style.display = 'block'
            $('#confirmBtn').addEventListener('click', () => {
                $('.confirmar').style.display = 'none'
                $('#shipping_codeBtn').style.backgroundColor = 'rgb(129, 129, 129)';
                ajax = new XMLHttpRequest
                ajax.open('GET','./source/email.php?name='+jsonResponse[0].name+'&email='+jsonResponse[0].email+'&order='+parseInt(jsonResponse[0].order)+'&code='+$('#shipping_code').value)
                ajax.onloadend = () => {
                    console.log(ajax.status)
                    if(ajax.response == 'true'){
                        $('#shipping_codeBtn').style.backgroundColor = 'green'
                    }else{
                        $('#shipping_codeBtn').style.backgroundColor = 'red'
                        console.log(ajax.response)
                    }
                }
                ajax.send()
            })         
        }
        function alterar(column,value,ordem){
            $('.confirmar').style.display = 'none'
            $('#'+column+'Btn').style.backgroundColor = 'rgb(129, 129, 129)';
            ajax = new XMLHttpRequest
            ajax.open('GET','./source/alterar.php?column='+column+'&value='+value+'&order='+parseInt(ordem))
            ajax.onloadend = () => {
                if(ajax.status === 200){
                    $('#'+column+'Btn').style.backgroundColor = 'green'
                }else{
                    $('#'+column+'Btn').style.backgroundColor = 'red'
                    console.log(ajax.response)
                }
            }
            ajax.send()
        }
        function setar(column, alterado){
            $('#confirm-text').innerHTML = 'Você está alterando '+alterado+' de \''+jsonResponse[0][column]+'\' para \''+$('#'+column).value+'\'.'
            $('.confirmar').style.display = 'block'
            $('#confirmBtn').addEventListener('click', () => {
                alterar(column,$('#'+column).value, jsonResponse[0].order)
            })
        }
        $('#shipping_statusBtn').onclick = () => {
            setar('shipping_status','status de rastreio')
        }
        $('#payment_idBtn').onclick = () => {
            setar('payment_id','ID do pagamento')
        }
        $('#product_idBtn').onclick = () => {
            setar('product_id','ID do produto')
        }
        $('#product_nameBtn').onclick = () => {
            setar('product_name','Nome do produto')
        }
        $('#v1Btn').onclick = () => {
            setar('v1','a primeira variável do produto')
        }
        $('#v2Btn').onclick = () => {
            setar('v2','a segunda variável do produto')
        }
        $('#v3Btn').onclick = () => {
            setar('v3','a terceira variável do produto')
        }
        $('#v4Btn').onclick = () => {
            setar('v4','a quarta variável do produto')
        }
        $('#v5Btn').onclick = () => {
            setar('v5','a quinta variável do produto')
        }
        $('#methodBtn').onclick = () => {
            setar('method','método de pagamento')
        }
        $('#payment_statusBtn').onclick = () => {
            setar('payment_status','status de pagamento')
        }
        $('#installmentsBtn').onclick = () => {
            setar('installments','parcelas')
        }
        $('#valueBtn').onclick = () => {
            setar('value','valor')
        }
        $('#nameBtn').onclick = () => {
            setar('name','nome')
        }
        $('#fullnameBtn').onclick = () => {
            setar('fullname','nome completo')
        }
        $('#emailBtn').onclick = () => {
            setar('email','email')
        }
        $('#areaBtn').onclick = () => {
            setar('area','DDD')
        }
        $('#phoneBtn').onclick = () => {
            setar('phone','telefone')
        }
        $('#documentBtn').onclick = () => {
            setar('document','documento')
        }
        $('#streetBtn').onclick = () => {
            setar('street','rua')
        }
        $('#numberBtn').onclick = () => {
            setar('number','número da residência')
        }
        $('#complementBtn').onclick = () => {
            setar('complement','complemento')
        }
        $('#neighborhoodBtn').onclick = () => {
            setar('neighborhood','bairro')
        }
        $('#cityBtn').onclick = () => {
            setar('city','cidade')
        }
        $('#stateBtn').onclick = () => {
            setar('state','Estado')
        }
        $('#zipBtn').onclick = () => {
            setar('zip','CEP')
        }
        $('#wppBtn').onclick = () => {
            let selecionado = $('#wppMsg').value;
            function pegarMsg(option){
                let nome = jsonResponse[0].name.split(' ');
                let firstName = nome[0];
                let uncoded = $('#'+option+'text').value
                let user = uncoded.replace('%user%',firstName)
                let code = user.replace('%code%',$('#shipping_code').value)
                let produto = code.replace('%produto%',jsonResponse[0].product_name.toUpperCase())
                let encoded = encodeURI(produto)
                let url = 'https://api.whatsapp.com/send?phone=55'+jsonResponse[0].area+jsonResponse[0].phone+'&text='+encoded;
                window.open(url,'_blank')
            }
            pegarMsg(selecionado)
        }
    }
    ajax.send()
}

function buscarTemplate(order){
    ajax = new XMLHttpRequest;
    ajax.open('GET','./services/template.html')
    ajax.onloadend = () => {
        setResponse()
        buscarOrder(order)
        loadScript('templateScript')
    }
    ajax.send()
}

function buscarCompras(document){
    ajax = new XMLHttpRequest;
    ajax.open('GET','./source/compras.php?document='+document)
    ajax.onloadend = () => {
        loading.style.display = 'none'        
        jsonResponse = JSON.parse(ajax.response)
        let lines = $('.lines')
        lines.innerHTML = ''
        for(i=50; i>=0; i--){
            let orderLine = '<div '+jsonResponse[i].order+' class="order-line"><div class="ordem"><p>'+jsonResponse[i].order+'</p></div><div class="method"><p>'+jsonResponse[i].method+'</p></div><div class="pay"><p>'+jsonResponse[i].payment_status+'</p></div><div class="product"><p>'+jsonResponse[i].id+'</p></div><div class="date"><p>'+jsonResponse[i].date.slice(0, 10)+'</p></div></div>'
            lines.innerHTML += orderLine;
        }
        lines.innerHTML += '<script class="clickScript">let getOrder = document.getElementsByClassName("order-line");for (i = 0; i < getOrder.length; i++){getOrder[i].addEventListener("click", function(){abrirWrap();buscarTemplate(this.getAttributeNames()[0]);})}</script>'
        loadScript('clickScript')
    }
    ajax.send()
}

function go(column, value, tamanho){
    ajax = new XMLHttpRequest;
    ajax.open('GET','./source/search.php?column='+column+'&value='+value)
    ajax.onloadend = () => {
        loading.style.display = 'none'        
        jsonResponse = JSON.parse(ajax.response)
        let lines = $('.lines')
        lines.innerHTML = ''
        for(i=0; i<jsonResponse.length; i++){
            let orderLine = '<div '+jsonResponse[i].order+' class="order-line"><div class="ordem"><p>'+jsonResponse[i].order+'</p></div><div class="method"><p>'+jsonResponse[i].method+'</p></div><div class="pay"><p>'+jsonResponse[i].payment_status+'</p></div><div class="product"><p>'+jsonResponse[i].id+'</p></div><div class="date"><p>'+jsonResponse[i].date.slice(0, 10)+'</p></div></div>'
            lines.innerHTML += orderLine;
        }
        lines.innerHTML += '<script class="clickScript">let getOrder = document.getElementsByClassName("order-line");for (i = 0; i < getOrder.length; i++){getOrder[i].addEventListener("click", function(){abrirWrap();buscarTemplate(this.getAttributeNames()[0])})}</script>'
        loadScript('clickScript')
    }
    ajax.send()
}


for (i = 0; i < document.querySelectorAll('.order-line'); i++){
    document.querySelectorAll('.order-line')[i].addEventListener('click', function(){
    for (i = 0; i < document.querySelectorAll('.order-line'); i++){
      console.log('hello')
    }
  })
}

$('#financeiro').onclick = () => {
    ajax = new XMLHttpRequest;
    ajax.open('GET','./services/financeiro.html')
    ajax.onloadend = () => {
        mainContent.innerHTML = ajax.response
        loading.style.display = 'none'
        loadScript('financeiroScript')
    }
    ajax.send()
}

$('#buscar').onclick = () => {
    ajax = new XMLHttpRequest;
    ajax.open('GET','./services/buscar.html')
    ajax.onloadend = () => {
        mainContent.innerHTML = ajax.response
        loading.style.display = 'none'
        loadScript('buscarScript')
    }
    ajax.send()
}

$('#cancelBtn').onclick = () => {
    $('.confirmar').style.display = 'none'
}

$('#ordems').onclick = () => {
    init()
}

function limparSessao(tempo){
    setTimeout(() => {
        sessionStorage.clear()
        init()
    }, tempo);
}

function init(){
    let login = sessionStorage.getItem('01sMRSn')
    if(login && login == 'RTHvN7fdW3eN1IV6QI4DUgoynDLesYiIaDAEZRElRYcQG5sP0h'){
        limparSessao(300000)
        $('.login').style.display = 'none'
        getBuy()
    }else{
        window.location = 'https://deatly.com/clogin'
    }
}

function getBuy(){
    ajax = new XMLHttpRequest;
    ajax.open('GET','./source/init.php')
    ajax.onloadend = () => {
        loading.style.display = 'none'        
        jsonResponse = JSON.parse(ajax.response)
        let lines = $('.lines')
        lines.innerHTML = ''
        for(let i=0; i<jsonResponse.length; i++){
            let orderLine = '<div '+jsonResponse[i].order+' class="order-line"><div class="ordem"><p>'+jsonResponse[i].order+'</p></div><div class="method"><p>'+jsonResponse[i].method+'</p></div><div class="pay"><p>'+jsonResponse[i].payment_status+'</p></div><div class="product"><p>'+jsonResponse[i].id+'</p></div><div class="date"><p>'+jsonResponse[i].date.slice(0, 10)+'</p></div></div>'
            lines.innerHTML += orderLine;
        }
        lines.innerHTML += '<script class="clickScript">let getOrder = document.getElementsByClassName("order-line");for (i = 0; i < getOrder.length; i++){getOrder[i].addEventListener("click", function(){abrirWrap();buscarTemplate(this.getAttributeNames()[0]);})}</script>'
        loadScript('clickScript')
    }
    ajax.send()
}


window.onload = () => {
    init()
}

$('#exit').onclick = () => {
    sessionStorage.clear()
    init()
}