console.log('posts')




const postCards = document.querySelector('#photo-list') 

function fetchPhotos( n = 6) {  
for (let i = 0; i < n; i++)

    axios

    .get('https://jsonplaceholder.typicode.com/photos?_limit=6')

    .then ((res) => {

        const post = res.data
        
        console.log(post)

        postCards.innerHTML +=
         `<li> ${post.title}
            <img src="${post.url}" alt="${post.title}">
            Album ID: ${post.albumId} 
        </li>
         `;
      
        
    })

    .catch ((err) => {

        console.log(err)

    }) 
}



 fetchPhotos() 




 

 



    

    




    
    





