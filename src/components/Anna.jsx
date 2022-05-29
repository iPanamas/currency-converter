const Anime = ({anime}) => {
    return <div>
            {anime.map(({webformatURL, type, tags, likes}) => (
             <div>
                 <img
         src= {webformatURL}
           width = {240}
       />
       <ul><li>{type}</li>
       <li>{tags}</li>
       <li>{likes}</li></ul>
       </div>
        ))}
     </div>
}
export default Anime;