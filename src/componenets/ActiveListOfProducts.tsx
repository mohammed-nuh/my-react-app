import './ActiveList.css';
import { useState } from 'react';

function ActiveList() {
    let products = ["mobile","laptop","earbuds","headphone"];

    let [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <section className='mb-4'>
            <h2>List of Product's Name</h2>
            <div className="container">
                <ul className='list-group'>
                    {
                        products.map((product, index) => (
                            <li className={selectedIndex == index ? 'list-group-item active': 'list-group-item'}
                            onClick={() => setSelectedIndex(index)}>{product}</li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

export default ActiveList;