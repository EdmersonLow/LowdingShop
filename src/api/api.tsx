import axios from "axios"

export async function productsData(){
    const products = await axios.get
    ("http://localhost:9999/lowdingshop/query");
    console.log(products);
    return products;
}

