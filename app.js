function generatePublicationsTemplate(publications) {
	return `
    <div class="col-4 p-5">
        <div class="card shadow text-black bg-light">
            <div class="card-body text-center">
                <h5 class="card-title">
                    ${publications.author}
                </h5>
                <p class="card-text">
                    <ul class="list-group">  
                        <li class="list-group-item list-group-item-light"><b>Contenido: </b>${publications.content}</li>
                        <li class="list-group-item list-group-item-light"><b>Tipo: </b>${publications.type}</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
    `;
}

const publicationDom = document.querySelector('#publications');

const traerPublicaciones = async() => {

    try{
        const response = await fetch('https://saldatweets.herokuapp.com/publications')
        const data = await response.json()

        data.map((item) => {
            publicationDom.innerHTML += generatePublicationsTemplate(item)
        })
    }catch(error){

    }
    
}

traerPublicaciones()

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});