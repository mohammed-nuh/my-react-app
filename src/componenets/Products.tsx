import mobileImg from '../assets/mobile.png';
import laptopImg from '../assets/laptop.png';
import earBudsImg from '../assets/earbuds.png';
import headphoneImg from '../assets/headphone.png';
import "./Products.css"

function Products() {
    let products = [
        {
            "id": 1,
            "title": "mobile",
            "description": "mobile phone",
            "price": 8000,
            "imgLink": mobileImg
        },
        {
            "id": 2,
            "title": "laptop",
            "description": "personal laptop",
            "price": 45000,
            "imgLink": laptopImg
        },
        {
            "id": 3,
            "title": "earbuds",
            "description": "wireless earbuds",
            "price": 2000,
            "imgLink": earBudsImg
        },
        {
            "id": 4,
            "title": "headphone",
            "description": "over-ear headphone",
            "price": 3000,
            "imgLink": headphoneImg
        }, {
            "id": 5,
            "title": "headphone",
            "description": "over-ear headphone",
            "price": 3000,
            "imgLink": headphoneImg
        }
    ];

    return (
        <section>
            <h2>Products</h2>
            <div className="container">
                <div className="row g-4">
                    {
                        products.map((product) => (
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card productCard h-100">
                                    <img src={product.imgLink} className="card-img-top" alt="Product 1" />
                                    <div className="card-body">
                                        <h5 className="card-title productCard-title">{product.title}</h5>
                                        <p className="card-text productCard-text">Description: {product.description}</p>
                                        <p className="card-text productCard-text text-green">Rs.{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

            </div>
        </section>
    );
}

export default Products;