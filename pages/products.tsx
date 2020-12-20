import React from "react";
import { useShirts } from "../lib/swrHooks";

const Products = () => {
  const { shirts, isLoading, isError } = useShirts();

  return (
    <>
      {isLoading && <>Loading</>}
      {isError && <>Hubo un error</>}
      {shirts && (
        <>
          {shirts.map((shirt) => {
            return (
              <React.Fragment key={shirt.id}>
                <p>Nombre : {shirt.nombre}</p>
                <p>Precio : {shirt.precio}</p>
                <p>Caracteristicas : {shirt.caracteristicas}</p>
              </React.Fragment>
            );
          })}
        </>
      )}
    </>
  );
};

export default Products;
