
const API_KEY='api_key=453f1039d18b66185378b17e5e13c6e2';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL ='https://image.tmdb.org/t/p/w500/'
const SEARCH_URL=BASE_URL+'/search/movie?'+API_KEY;


getMovies(API_URL);
function getMovies(url){
setTimeout(() => {
    fetch(url).then(response => response.json()).then(data =>{
        console.log(data)
         showMovies(data.results);
     }) 
}, 500);

}
function showMovies(data){
data.forEach(movies => {
    
    const movieContainer=document.querySelector(".movie-container");

   let post =document.createElement('div')
   post.className="post"
 
   let posterContainer =document.createElement('div')
   posterContainer.className="poster-container"

   let details =document.createElement('div')
   details.className="desc"
   details.innerHTML=`<h1>${movies.title}</h1> 
  <span class="rating">${movies.vote_average}</span>
   
   <span class="overview">${movies.overview}</span>
   <br>
   `

    let posterImg =document.createElement("div")
    posterImg.innerHTML=`<img src="${ IMG_URL+movies.poster_path}" alt="">`
    

    let title=document.createElement('h3')
    title.innerHTML+= movies.original_title

    let rating = document.createElement('p')
    rating.className ='rating'
    rating.innerHTML="Rating:"+movies.vote_average
    
    

    movieContainer.appendChild(post)
    post.appendChild(posterContainer)
    posterContainer.appendChild(posterImg)
    post.appendChild(details)

    
});

}

function find(){
    const searchkey=document.querySelector(".Skey").value
    const movieContainer=document.querySelector(".movie-container");
    movieContainer.innerHTML=""
    if(searchkey!==''){
        getMovies(SEARCH_URL+'&query='+searchkey)
        
    }
       else{
        getMovies(API_URL); 
       } 

       document.querySelector(".Skey").value=''
    }
    




