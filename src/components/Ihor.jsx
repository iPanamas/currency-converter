const Car = ({images}) => {
  return (
    <ul>
      {images.map(({id, webformatURL}) => (
        <li key={id}>
          <img src={webformatURL} alt="Car"/>
        </li>
      ))}
    </ul>
  )
}

export default Car;
