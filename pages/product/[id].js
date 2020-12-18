import React from 'react';
import {useRouter} from "next/router";
import NavBar from "../../components/Navbar/Navbar";

const ProductItem = () => {
    const router = useRouter();
    return (
        <div>
            <NavBar/>
            Esta es la pagina del producto : {router.query.id}
        </div>
    );
};

export default ProductItem;
