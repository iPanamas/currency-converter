
function Sunrises({sunrises}){
    return(
        <ul>
        {sunrises.map (sunrise => (
            <li key={sunrise.id}>
        <img width = '100px'
      src={sunrise.userImageURL}
      alt="Sunrises"
      className="Sunrises"
    />
    
    <p>Name: {sunrise.tags}</p>
    <p>Views: {sunrise.views}</p>
    <p>Downloads: {sunrise.downloads}</p>
    <p>Collections: {sunrise.collections}</p>
    </li>
    ))}
    </ul>)
}
export default Sunrises