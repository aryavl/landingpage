import { useEffect, useState } from "react";
import { getSearchProducts } from "../helper/fetcher";

interface Product {
  image: string;
  title: string;
}

interface SearchProps {
  searchResult: string;
}

const SearchedProduct: React.FC<SearchProps> = ({ searchResult }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchPdt, setSearchPdt] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSearchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching popular categories data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter(
      (prd) => prd.title.toLowerCase() === searchResult.toLowerCase()
    );
    setSearchPdt(filteredProducts);
  }, [products, searchResult]);

  return (
    <div className="container__style my-12 justify-center">
      {searchPdt.map((product, index) => (
        <div
          key={index}
          className="bg-white h-[280px] w-[200px]  text-black rounded-xl flex flex-col border__style px-4 py-3"
        >
          <div className="rounded-t-xl h-40 ">
            <img
              src={product.image}
              alt=""
              className="h-[100%] w-[100%] object-contain"
            />
          </div>
          <div className="py-2">
            <h2 className="text-center">{product.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchedProduct;
