'use client';

import { Button } from "@mui/material";
import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2";


const MyCart = () => {
    const [cartData, setCartData] = useState([]);
    console.log(cartData);

    const fetchCartData = () => {
        axios.get('https://mobile-sell-server.vercel.app/cartData')
            .then(res => res.data)
            .then(data => setCartData(data))
            .catch(err => {
                console.error('Error fetching cart data:', err);
            });
    };

    useEffect(() => {
        fetchCartData();
    }, []);

    const totalPrice = cartData.reduce((total, cart) => total + cart.price, 0);

    const handleDelete = (cart) => {
        console.log('Product added to the cart:', cart);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://mobile-sell-server.vercel.app/cartData/${cart._id}`)
                    .then(res => {
                        console.log(res.data);

                        
                        fetchCartData();

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        });
    };

  
    
    return (
        <div className='mt-32 flex h-full mb-6 flex-col-reverse lg:flex-row gap-4 justify-between '>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-5">
        {
            cartData.map(cart => 
                <Card key={cart._id} className="max-w-lg p-4" imgSrc={cart.image} horizontal>
                <div className="flex w-400px justify-between items-center gap-6">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {cart.name}
                </h5>
                <div className="">
                <p className="font-normal ml-28 mb-9 text-gray-700 dark:text-gray-400 ">
                  ${cart.price}
                </p>
                <div>
                <Button onClick= {() => handleDelete (cart)} sx={{marginLeft: 11}} variant="contained" startIcon={<DeleteIcon />}>
                    Del
                </Button>
                </div>
                </div>
                </div>
              </Card>    
            )
        }
    </div>
    <div>
    <Card className="w-sm">
      <div className="flex justify-evenly items-center gap-3">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Cart Total
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Sub Total:  ${totalPrice.toFixed(2)}
      </p>
      </div>
      <Button variant="contained" color="success">
        Pay
      </Button>
    </Card>
    </div>
      </div>

      
    );
};

export default MyCart;