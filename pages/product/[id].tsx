import React from "react";
import { useRouter } from "next/router";
import { useShirt } from "@/lib/swrHooks";
import { Dimmer, Loader, Container } from "semantic-ui-react";
import { ShirtCard } from "@/components/Card/ShirtCard";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  const { data: shirt, error, isValidating } = useShirt(id);

  if (error) return "An error has occurred.";
  if (!shirt)
    return (
      <Dimmer active={true}>
        <Loader />
      </Dimmer>
    );
  return (
    <Container>
      <ShirtCard
        price={shirt.precio}
        name={shirt.nombre}
        description={shirt.caracteristicas}
        image={shirt.imagen}
      />
      Esta es la pagina del producto : {id}
    </Container>
  );
};

export default ProductItem;
