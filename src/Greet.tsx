import './Greet.css'

function Greet() {
    let name: string = "";
    if (name) {
        return <h3 className='greeting'>Hello {name}, welcome to React World</h3>;
    } else {
        return <h3 className='greeting'>Hello user, welcome to React World</h3>;
    }
}

export default Greet;
