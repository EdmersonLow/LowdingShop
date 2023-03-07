import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {Banner } from '../components/Banner'
import { Products } from '../components/Products';
export function Home() {
    // type resultsProps{
    //     id: number;
    //     title: string;
    //     isNew: boolean;
    //     price: number;
    //     description: string;
    //     category: string;
    // };
    const [products, setProducts] = useState([]);
    const data = useLoaderData() 
    useEffect(()=> {
        setProducts(data.data);
    }, [data]);
    return (
        <div>
        <Banner/>
        <Products products={products} />
        </div>
    );
}
