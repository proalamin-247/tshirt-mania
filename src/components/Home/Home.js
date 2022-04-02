import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTshirt([]);
    const [cart, setCart] = useState([]);

    // add item from cart
    const handleAddToCart = (selectedItem)=>{
        // console.log(selectedItem);
        const exists = cart.find(tshirt => tshirt._id === selectedItem._id); // কার্ট এ যে আইটেম টা এড করতে চাচ্চি সেটা কি আগে থেকে আছে কি না সেটা চেক।

        if(!exists){ // যদি না থাকে 
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }
        else{ // যদি আগে থেকেই সেই আইটেম থাকে তাইলে এলার্ট দিবে।
            alert(`already item added  {tshirt.name}`) // এখানে আমি এলার্ট দেখাবো যে এই টিশার্ট টা তুমি এড করছেও সেটার নাম + ছবি ও দেখাবো? এটা কি ভাবে কতবো ?? #problem
        }
        
    }

    // remove item from cart
    const handleRemoveFromCart = (selectedItem)=>{
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id);
        setCart(rest);
    }

    return (
        <div className='home-container'>
           <div className='tshirt-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddToCart ={handleAddToCart}
                    ></Tshirt>)
                }
           </div>
           <div className='cart-container'>
               <Cart 
                    handleRemoveFromCart={handleRemoveFromCart}
               cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Home;