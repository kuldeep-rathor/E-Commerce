import React, { Fragment } from "react";
import ProductItem from "./ProductItem";

const Products = (props) => {
  const products = props.items;

  // Helper function to chunk the products into rows of 2
  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedProducts = chunkArray(products, 2);

  return (
    <Fragment>
      {chunkedProducts.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", justifyContent: "center" }}>
          {row.map((product, index) => (
            <ProductItem
              key={index}
              // title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      ))}
    </Fragment>
  );
};

export default Products;
