import React from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/Navbar/Navbar";
import { useShirt } from "../../lib/swrHooks";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  const { data: shirt, error, isValidating } = useShirt(id);

  if (error) return "An error has occurred.";
  if (!shirt) return "Loading...";
  return (
    <div>
      <NavBar />
      {isValidating ? (
        <p>Loading</p>
      ) : (
        <>
          <p>Nombre : {shirt.nombre}</p>
          <p>Precio : {shirt.precio}</p>
          <p>Caracteristica : {shirt.caracteristica}</p>
        </>
      )}
      Esta es la pagina del producto : {id}
    </div>
  );
};

export default ProductItem;
