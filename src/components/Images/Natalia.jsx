function Natalia({ flowers }) {
  return (
    <ul>
      {flowers.map(
        ({ tags, views, downloads, likes, comments, id, webformatURL }) => {
          return (
            <li key={id}>
              <img src={webformatURL} alt={tags} />
              <p>{tags}</p>
              <ul>
                <li>Views:{views}</li>
                <li>Downloads:{downloads}</li>
                <li>Likes:{likes}</li>
                <li>Comments:{comments}</li>
              </ul>
            </li>
          );
        }
      )}
    </ul>
  );
}
export default Natalia;
