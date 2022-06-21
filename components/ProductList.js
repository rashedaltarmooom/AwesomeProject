const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product._id} />
  ));
};
