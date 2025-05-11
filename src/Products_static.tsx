import './Products_static.css'
import mobileImg from './assets/mobile.png';
import laptopImg from './assets/laptop.png';
import earBudsImg from './assets/earbuds.png';
import headphoneImg from './assets/headphone.png';

function Product_static() {
  return (
    <>
      <h2>Dummy Products</h2>
      <div className="container">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card productCard h-100">
              <img src={mobileImg} className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title productCard-title">Product Title 1</h5>
                <p className="card-text productCard-text">This is a dummy description for product 1.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card productCard h-100">
              <img src={headphoneImg} className="card-img-top" alt="Product 2" />
              <div className="card-body">
                <h5 className="card-title productCard-title">Product Title 2</h5>
                <p className="card-text productCard-text">This is a dummy description for product 2.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card productCard h-100">
              <img src={earBudsImg} className="card-img-top" alt="Product 3" />
              <div className="card-body">
                <h5 className="card-title productCard-title">Product Title 3</h5>
                <p className="card-text productCard-text">This is a dummy description for product 3.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card productCard h-100">
              <img src={laptopImg} className="card-img-top" alt="Product 4" />
              <div className="card-body">
                <h5 className="card-title productCard-title">Product Title 4</h5>
                <p className="card-text productCard-text">This is a dummy description for product 4.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_static;
