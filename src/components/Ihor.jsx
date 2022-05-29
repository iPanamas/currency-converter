const Car = ({images}) => {
  return (
    <div>
      {images.map(({webformatURL}) => {
        <img src={webformatURL}/>
      })}
    </div>
  )
}

export default Car;
