const Anime = ({anime}) => {
    return <div>
            {anime.map(({webformatURL, type, tags, likes}) => (
             <div>
                 <img
         src= {webformatURL}
           alt="images"
       />
       <ul><li>{type}</li>
       <li>{tags}</li>
       <li>{likes}</li></ul>
       </div>
        ))}
     </div>
}
export default Anime;
