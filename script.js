console.log('posts')


// prendo l'ID dal file html

const postCards = document.querySelector('#photo-list .row');
const cards = document.querySelector('.card');


//verifico in console

console.log(postCards);
console.log(cards)



// eseguo la funzione


function fetchPhotos() {


//collego l'API

    axios
        .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then((res) => {

            const posts = res.data

// verifico in console la risposta dell'API 

            console.log(posts)

// eseguo il ciclo con il metodo forEach per tutte le sei cards 

            posts.forEach((post) => {

// concateno gli oggetti dati dall'API nell'interfaccia 


                postCards.innerHTML +=
                    `
                    <div class="card">
                    <img src="./img/pin.svg">
                        <div class="image">
                            <img src="${post.thumbnailUrl}">
                        </div>
                        <p class="title-card">${post.title}</p>
                        <div class="pin">          
                        </div>
                    </div>
                `;
            })

// in caso di errore 

        })
        .catch((err) => {

// verifico in console

            console.log(err)
        })
}


// richiamo la funzione

fetchPhotos()






// all'evento 'click' sulle cards verifico in console se risulta 

postCards.forEach(image => {
    image.addEventListener('click', (event) => {
        console.log()
        
    })
})


























