console.log('posts')




const postCards = document.querySelector('posts') 

function fetchPhotos(root, n = 6) {  
for (let i = 0; i <= n; i++)
    axios
    .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then ((res) => {
        console.log(res.data)
    })
    .catch ((err)=> {
        console.log(err)
    }) 
}


//fetchPhotos(postCards)