import axios from "axios"

export async function productsData(){
    const products = await axios.get
    ("http://localhost:9999/lowdingshop/query");
    console.log(products);
    return products;
}

export async function usersData(){
    const users = await axios.get
    ("http://localhost:9999/lowdingshop/checkuser");
    console.log(users);
    return users;
}
