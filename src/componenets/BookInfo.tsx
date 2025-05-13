interface BookInfoProps {
    name: string;
    author: string;
    year: number;
    price: number;
}

function BookInfo(props: BookInfoProps){
    return (
        <section className="m-5">
        <h2>Book Info</h2>
        <div className="card p-3">
            <h3>{props.name}</h3>
            <p>This book was written by {props.author} in the year {props.year}</p>
            <p>Price: Rs.{props.price}</p>
        </div>
        </section>
    )
}

export default BookInfo;