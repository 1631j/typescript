import { createContext, ReactElement, useEffect, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [];

// const initState: ProductType[] = [
//   {
//     sku: "item001",
//     name: "widget",
//     price: 9.99,
//   },
//   {
//     sku: "item002",
//     name: "Premium widget",
//     price: 19.99,
//   },
//   {
//     sku: "item003",
//     name: "Deluxe widget",
//     price: 29.99,
//   },
// ];

export type useProductsContextTypes = { products: ProductType[] };

const initContextState: useProductsContextTypes = { products: [] };

const ProductsContext =
  createContext<useProductsContextTypes>(initContextState);

type childrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: childrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch("https://localhost:3500/products")
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) {
            console.log(err.message);
          }
        });
      return data;
    };

    fetchProducts().then((products) => setProducts(products));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
