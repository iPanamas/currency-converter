const Anime = ({ anime }) => {
  return (
    <div>
      {anime.map(({ id, webformatURL, type, tags, likes }) => (
        <div key={id}>
          <img src={webformatURL} alt="images" />
          <ul>
            <li>{type}</li>
            <li>{tags}</li>
            <li>{likes}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Anime;
