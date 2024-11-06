console.log('posts')




const postCards = document.querySelector('card') 

function fetchPhotos( n = 6) {  
for (let i = 0; i < n; i++)
    axios
    .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then ((res) => {
        const post = res.data
        console.log(post)
        //appendPost (post, postCards)
        //console.log(appendPost) 
    })
    .catch ((err) => {
        console.log(err)
    }) 
}



const foto = fetchPhotos() 


/*function appendPost(){
    console.log(post)

    postCards.forEach((post) => {
        console.log(postCards)
    })
}/** */