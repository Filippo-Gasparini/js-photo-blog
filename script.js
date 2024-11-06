console.log('posts')




const postCards = document.querySelector('li') 

function fetchPhotos( n = 6) {  
for (let i = 0; i < n; i++)

    axios

    .get('https://jsonplaceholder.typicode.com/photos?_limit=6')

    .then ((res) => {

        const post = res.data
        
        console.log(post)

        postCards.innerHTML += `<li>${post}</li>`
        
    })

    .catch ((err) => {

        console.log(err)

    }) 
}



 fetchPhotos() 




 

 post.forEach((post) => {
    
    console.log(post)
    const body = res.id
    const title = res.title
    console.log(body, title)



    
 })
    




    
    





