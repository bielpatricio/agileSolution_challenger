import { Chart } from "./chart/Chart";
import styles from "./SalesHistory.module.css";
import { useEffect, useState } from "react";
import { Product } from "./product/Product";
import { api } from "../../services/api";

export function SalesHistory() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await api.get("/products");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log("Error get data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  const handleCategory = (event) => {
    setSelectedCategory(event);
    setSelectedProduct([]);
    setSelectedBrand([]);
  };

  const handleProduct = (event) => {
    setSelectedProduct(event);
    setSelectedBrand([]);
  };

  const handleBrand = (event) => {
    setSelectedBrand(event);
  };

  return (
    <div className={styles.salesHistory}>
      <div className={styles.forms}>
        <Product
          products={data}
          selectedOption={selectedCategory}
          setSelectedOption={handleCategory}
          fieldName="Category: "
        />

        <Product
          products={selectedCategory ? selectedCategory.product : []}
          selectedOption={selectedCategory ? selectedProduct : []}
          setSelectedOption={handleProduct}
          fieldName="Product: "
        />

        <Product
          products={selectedProduct ? selectedProduct.brand : []}
          fieldName="Brands: "
          selectedOption={selectedProduct ? selectedBrand : []}
          setSelectedOption={handleBrand}
        />
      </div>
      <div className={styles.chartField}>
        <h1>Sales by Month for:</h1>
        <Chart data={selectedBrand.data} />
      </div>
    </div>
  );
}
