const Fox = ({ stats }) => (
  <div>
    {stats.map(item => (
      <div key={item.id}>
        <img src={item.webformatURL} alt="Fox" />
        <p>{item.views}</p>
        <p>{item.downloads}</p>
        <p>{item.likes}</p>
      </div>
    ))}
  </div>
);

export default Fox;
