function Natalia({ flowers }) {
    return (
      <ul>
        {flowers.map(({ previewURL, tags, previewWidth, views, downloads, likes, comments, id }) => {
          return (
            <li class="item" key={id}>
              <img src={previewURL} alt={tags} width={previewWidth} />
              <p>{tags}</p>
              <ul>
                <li>Views:{views}</li>
                <li>Downloads:{downloads}</li>
                <li>Likes:{likes}</li>
                <li>Comments:{comments}</li>
            </ul>
             </li>
        )})}
    </ul>
);
}
  export default Natalia;