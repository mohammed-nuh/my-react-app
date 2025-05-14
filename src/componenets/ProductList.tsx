import "./ProductList.css"
import { Product } from '../types/Product';
import ProductCard from './ProductCard';
import { getProducts } from '../services/productService';

function ProductList() {

    let products: Product[] = getProducts();

    return (
        <section className='my-4 py-2'>
            <h2>Product Cards</h2>
            <div className="container">
                <div className="row g-4">
                    {
                        products.map((product) => (
                            <ProductCard id={product.id} title={product.title} description={product.description} price={product.price} imgLink={product.imgLink} />
                        ))}
                </div>

            </div>
        </section>
    );
}

export default ProductList;