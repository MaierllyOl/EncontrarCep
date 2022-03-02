const log = console.log;
const cep = document.querySelector('#cep');
const button = document.querySelector('button');
const showCep = document.querySelector('#showCep');

button.addEventListener('click', (event) => {
    
    event.preventDefault();

    showCep.innerHTML = `CEP Buscado : ${ cep.value}`;

    cep.value = '';

})

const showData = result =>{
    
    for(const fill in result){
        
        if(document.querySelector('#'+fill)){
            
            document.querySelector('#'+fill).value = result[fill];

        }    
    }
}

cep.addEventListener('blur', (event) => {
    
    let search = cep.value.replace("-", "");

    const options = {
        method: "GET",
        mode:"cors",
        cache:"default"
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then( response => { response.json().then(data => showData(data))})
    .catch( error => log("Broken all " + error.message));
});
