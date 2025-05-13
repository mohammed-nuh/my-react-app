interface productProps {
    id: number;
    title: string;
    description: string;
    price: number;
    imgLink: string;
}

let Product = (props: productProps) => {
    return (
        <>
            <div className="col-12 col-sm-6 col-lg-3">
                <div className="card productCard h-100">
                    <img src={props.imgLink} className="card-img-top" alt="Product 1" />
                    <div className="card-body">
                        <h5 className="card-title productCard-title">{props.title}</h5>
                        <p className="card-text productCard-text">Description: {props.description}</p>
                        <p className="card-text productCard-text text-green">Rs.{props.price}</p>
                    </div>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Product;