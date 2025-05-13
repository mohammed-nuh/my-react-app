import mobileImg from '../assets/mobile.png';
import laptopImg from '../assets/laptop.png';
import earBudsImg from '../assets/earbuds.png';
import headphoneImg from '../assets/headphone.png';
import "./ProductList.css"
import { ProductStructure } from './ProductStructure';
import Product from './Product';

function Products() {
    let products: ProductStructure[] = [
    {
        id: 1,
        title: "Mobile",
        description: "mobile phone",
        price: 8000,
        imgLink: mobileImg
    },
    {
        id: 2,
        title: "Laptop",
        description: "personal laptop",
        price: 45000,
        imgLink: laptopImg
    },
    {
        id: 3,
        title: "Earbuds",
        description: "wireless earbuds",
        price: 2000,
        imgLink: earBudsImg
    },
    {
        id: 4,
        title: "Headphone",
        description: "over-ear headphone",
        price: 3000,
        imgLink: headphoneImg
    }
];


    return (
        <section className='my-3 py-2'>
            <h2>Product Cards</h2>
            <div className="container">
                <div className="row g-4">
                    {
                        products.map((product) => (
                            <Product id={product.id} title={product.title} description={product.description} price={product.price} imgLink={product.imgLink} />
                        ))}
                </div>

            </div>
        </section>
    );
}

export default Products;