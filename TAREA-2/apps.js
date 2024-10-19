const url = 'https://randomuser.me/api/';
const boton = document.getElementById('boton')
const contenido = document.querySelector('#contenido');

function mostrarData(){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data,'data');
            
            // contenido.innerHTML = `<img src='${data.results[0].picture.large}'>
            //                         <p>${data.results[0].name.first}</p>
            //                         <p>${data.results[0].name.last}</p>
            //                         <p>${data.results[0].email}</p>
            //                         <p>${data.results[0].phone}</p>  
            //                         `
        })
}

const mostrarData = async() =>{
    const res = await fetch(url);
    const data = await res.json();
    contenido.innerHTML = `<img src='${data.results[0].picture.large}'>
                            <p>${data.results[0].name.first}</p>
                                <p>${data.results[0].name.last}</p>
                                <p>${data.results[0].email}</p>
                                <p>${data.results[0].phone}</p>  
`
}

boton.addEventListener('click', mostrarData);