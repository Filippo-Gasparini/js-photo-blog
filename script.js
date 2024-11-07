console.log('posts')
const postCards = document.querySelector('#photo-list .row')
console.log(postCards);

function fetchPhotos() {
    axios
        .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then((res) => {

            const posts = res.data

            console.log(posts)

            posts.forEach((post) => {
                postCards.innerHTML +=
                `
                    <div class="col">
                        <div class="image">
                            <img src="${post.url}">
                        </div>
                        <p class="title-card">${post.title}
                        </p>
                        <div class="pin">
                            <img src="./img/pin.svg">
                        </div>
                    </div>
                `;
            })

            
        })
        .catch((err) => {
            console.log(err)
        })
}



fetchPhotos()





























