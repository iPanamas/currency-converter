function Plane({ plane }) {
  return (
    <section>
      <ul>
        {plane.map(({ id, webformatURL, views, downloads, likes, tags }) => (
          <li key={id}>
            <img src={webformatURL} alt={tags} width="640" />
            <ul>
              <li>{views}</li>
              <li>{downloads}</li>
              <li>{likes}</li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Plane;
