import { gql, useQuery } from "@apollo/client";
import { Banner, Layout, Card, Button } from "@shopify/polaris";
import React from "react";
import { ProductsList } from "./ProductsList";
import { Loading } from "@shopify/app-bridge-react";
import Axios from "../services/reqService"

const PRODUCTS_QUERY = gql`
  {
    products(first: 10) {
      edges {
        cursor
        node {
          id
          title
          onlineStoreUrl
        }
      }
    }
  }
`;

function ProductsPage() {
  // const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  async function fetchData() {
    console.log("HAHHAAHH")

    let axios = Axios;

    let response = await axios.post("/trigger/create", {"a": "b"}, {
      parse: true,
    });

    console.log("🚀 ~ file: ProductsPage.js ~ line 34 ~ fetchData ~ response", response)

    return response  
  }
  

  // if (loading) return <Loading />;

  // if (error)
  //   return (
  //     <Banner status="critical">There was an issue loading products.</Banner>
  //   );

  // const products = data.products.edges.map((edge) => {
  //   return {
  //     id: edge.node.id,
  //     title: edge.node.title,
  //   };
  // });

  return (
    <Layout.Section>
      <Card>
        {/* <ProductsList data={products} /> */}
    <Button onClick={() => fetchData()}> Check session</Button>

      </Card>
    </Layout.Section>
  );
}

export default ProductsPage;
