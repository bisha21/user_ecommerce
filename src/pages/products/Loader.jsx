import ProductsLoadingCard from "./ProductCardLoading";

const ProductsLoader = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <ProductsLoadingCard />
      <ProductsLoadingCard />
      <ProductsLoadingCard />
      <ProductsLoadingCard />
      <ProductsLoadingCard />
      <ProductsLoadingCard />
      <ProductsLoadingCard />
      <ProductsLoadingCard />
    </div>
  );
};

export default ProductsLoader;