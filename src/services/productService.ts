import mobileImg from '../assets/mobile.png';
import laptopImg from '../assets/laptop.png';
import earBudsImg from '../assets/earbuds.png';
import headphoneImg from '../assets/headphone.png';
import { Product } from "../types/Product";

export function getProducts(): Product[] {
    let products: Product[] = [
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
return products
}