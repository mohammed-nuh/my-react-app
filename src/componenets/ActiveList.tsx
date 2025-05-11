import mobileImg from '../assets/mobile.png';
import laptopImg from '../assets/laptop.png';
import earBudsImg from '../assets/earbuds.png';
import headphoneImg from '../assets/headphone.png';
import './ActiveList.css';
import { useState } from 'react';

function ActiveList() {
    let products = [
        {
            "id": 1,
            "title": "mobile",
            "description": "A sleek and powerful mobile phone with a vibrant display, long-lasting battery, and high-resolution camera, ideal for daily use, gaming, and photography.",
            "price": 8000,
            "imgLink": mobileImg
        },
        {
            "id": 2,
            "title": "laptop",
            "description": "A reliable personal laptop equipped with a fast processor, ample RAM, and SSD storage—perfect for work, study, or entertainment on the go.",
            "price": 45000,
            "imgLink": laptopImg
        },
        {
            "id": 3,
            "title": "earbuds",
            "description": "Compact and lightweight wireless earbuds offering clear audio, noise isolation, and a snug fit—ideal for music lovers and people on the move.",
            "price": 2000,
            "imgLink": earBudsImg
        },
        {
            "id": 4,
            "title": "headphone",
            "description": "Comfortable over-ear headphones with rich bass, crisp sound, and noise-canceling capabilities, designed for immersive listening experiences.",
            "price": 3000,
            "imgLink": headphoneImg
        },
        {
            "id": 5,
            "title": "headphone",
            "description": "High-quality over-ear headphones offering superior sound clarity and comfort, perfect for gaming, calls, or extended music sessions.",
            "price": 3000,
            "imgLink": headphoneImg
        }
    ];

    let [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <section className='mb-4'>
            <h2>List of Products</h2>
            <div className="container">
                <ul className='list-group'>
                    {
                        products.map((product, index) => (
                            <li className={selectedIndex == index ? 'list-group-item active' : 'list-group-item'}
                                onClick={() => setSelectedIndex(index)}>
                                {product.title} - Rs.{product.price}
                                <div>{product.description}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

export default ActiveList;