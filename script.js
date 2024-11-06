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
         `<li>${post.title}</li>
         <img src="${post.url}" alt="${post.title}" />
         <li>${post.albumId}
         `;
      
        
    })

    .catch ((err) => {

        console.log(err)

    }) 
}



 fetchPhotos() 




 

 



    

    




    
    





