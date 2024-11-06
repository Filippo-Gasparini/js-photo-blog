console.log('posts')




const postCards = document.querySelector('posts') 

function fetchPhotos( n = 6) {  
for (let i = 0; i <= n; i++)
    axios
    .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then ((res) => {
        const post = res.data
        console.log(post)
    })
    .catch ((err)=> {
        console.log(err)
    }) 
}



fetchPhotos(postCards) 
    
