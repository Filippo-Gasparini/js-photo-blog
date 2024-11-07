console.log('posts')




const postCards = document.querySelector('#photolist') 

function fetchPhotos( n = 6) {  
for (let i = 0; i < n; i++)

    axios

    .get('https://jsonplaceholder.typicode.com/photos?_limit=6')

    .then ((res) => {

        const post = res.data
        
        console.log(post)

        postCards.innerHTML +=
         ` <div id="photo-list">
                <div class="row">
                    <div class="col">
                        <div class="image">
                            <img src="${url}">
                        </div>
                        <p class="title-card">${post.title}
                        </p>
                    <div class="pin">
                        <img src="./img/pin.svg">
                    </div>
                    </div>
                    </div>
                </div>
            </div>  
         `;
      
        
    })

    .catch ((err) => {

        console.log(err)

    }) 
}



 fetchPhotos() 









 

 



    

    




    
    





