import React, { useEffect, useState } from 'react';
import { FaDraft2Digital } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import {Banner } from '../components/Banner'
import { Products } from '../components/Products';

export function Home() {
    const [products, setProducts] = useState([]);
    const data:any = useLoaderData() // export the data variable
    
    useEffect(()=> {
        setProducts(data.data);
        console.log(data.data);
    }, [data]);
    return (
        <div>
            <Banner/>
            <Products products={products} />
        </div>
    );
}
