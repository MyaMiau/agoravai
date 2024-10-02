const handleSubmit = (event)=>{
    event.preventDefault();

    const name = document.querySelector(`input[name=name]`).value;
    const email = document.querySelector(`input[name=email]`).value;
    const telefone = document.querySelector(`input[name=telefone]`).value;
    const endereco = document.querySelector(`input[name=endereco]`).value;
    const genero = document.querySelector(`input[name=genero]`).value;
    const data = document.querySelector(`input[name=data]`).value;
    const preferencias = document.querySelector(`input[name=preferencias]`).value;

    fetch('https://api.sheetmonkey.io/form/k8V6sr9LU8cUDqQA572C2v', {
    method:'post',
    headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json',
    },

    body: JSON.stringify({name:name, email:email, telefone:telefone, endereco:endereco, genero:genero, data:data, preferencias:preferencias})
});

}

    document.querySelector('form').addEventListener("submit",handleSubmit);



