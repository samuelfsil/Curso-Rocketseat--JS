    var textoNovo = document.querySelector('#app input');
    var botaoNovo = document.querySelector('#app button');
    var listaTodo = document.querySelector('#app ul');

    

     /*var todos = [
        'Kombi',
        'Fusca',
        'Brasilia',
        'Uno',
        'Parati'
    ];*/


    var todos = JSON.parse(localStorage.getItem('lista_item')) ||[];

    function renderizaTodos(){

        listaTodo.innerHTML='';

        for (todo of todos){

        var itemLista = document.createElement('li');
        var textoItem = document.createTextNode(todo);

        var linkElement = document.createElement('a');
            
        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick','delItem('+ pos +')');
        
        var linkTexto = document.createTextNode('Excluir');

        linkElement.appendChild(linkTexto);
        
        itemLista.appendChild(textoItem);
        itemLista.appendChild(linkElement);
        

        listaTodo.appendChild(itemLista);
    
        }
    } 
    
    renderizaTodos();
    
    function adicionaLista(){

        

        var textoNovoAdd = textoNovo.value;

        todos.push(textoNovoAdd);

        textoNovo.value='';

        renderizaTodos();
        savetostore();
    }


    botaoNovo.onclick = adicionaLista;


    function delItem(pos){

        todos.splice(pos, 1);
        renderizaTodos();
        savetostore();

    }


    function savetostore(){
            localStorage.setItem('lista_item', JSON.stringify(todos));


    }
