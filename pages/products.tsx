import React from "react";
import { Grid, Container } from "semantic-ui-react";
import { useShirts } from "../lib/swrHooks";
import { ShirtCard } from "@/components/Card/ShirtCard";
import Link from "next/link";

const Products = () => {
  const { shirts, isLoading, isError } = useShirts();

  return (
    <>
      {isLoading && <>Loading</>}
      {isError && <>Hubo un error</>}
      {shirts && (
        <Container>
          <Grid stackable columns={3}>
            {shirts.map(({ id, nombre, precio, caracteristicas, imagen }) => {
              return (
                <Grid.Column key={id}>
                  <Link href={`/product/${id}`}>
                    <a>
                      <ShirtCard
                        name={nombre}
                        price={precio}
                        description={caracteristicas}
                        image={imagen}
                      />
                    </a>
                  </Link>
                </Grid.Column>
              );
            })}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Products;
