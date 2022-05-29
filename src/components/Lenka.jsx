
function Lenka ({dinosaur}) {
    return (
        <div>
            <h2>Dinosaur</h2>
            <ul>
                {dinosaur.map(({ id, webformatURL, tags }) => (
                    <li key={id}>
                        <img src={webformatURL} alt={tags} />
                        <p>{tags}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
    
}

export default Lenka;