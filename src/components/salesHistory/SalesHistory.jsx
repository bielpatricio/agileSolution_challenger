import { Chart } from "./chart/Chart";
import styles from "./SalesHistory.module.css";
import { useState } from "react";
import { Product } from "./product/Product";

const category = [
  {
    name: "Clothes",
    product: [
      {
        name: "T-Shirt",
        brand: [
          {
            name: "Nike",
            data: [
              { month: "January", quantity: 44 },
              { month: "February", quantity: 55 },
              { month: "March", quantity: 26 },
              { month: "April", quantity: 39 },
              { month: "May", quantity: 64 },
              { month: "June", quantity: 26 },
            ],
          },
          {
            name: "Adidas",
            data: [
              { month: "January", quantity: 24 },
              { month: "February", quantity: 66 },
              { month: "March", quantity: 17 },
              { month: "April", quantity: 37 },
              { month: "May", quantity: 59 },
              { month: "June", quantity: 23 },
            ],
          },
          {
            name: "Fila",
            data: [
              { month: "January", quantity: 32 },
              { month: "February", quantity: 26 },
              { month: "March", quantity: 35 },
              { month: "April", quantity: 29 },
              { month: "May", quantity: 45 },
              { month: "June", quantity: 13 },
            ],
          },
          {
            name: "Reebok",
            data: [
              { month: "January", quantity: 35 },
              { month: "February", quantity: 14 },
              { month: "March", quantity: 22 },
              { month: "April", quantity: 28 },
              { month: "May", quantity: 19 },
              { month: "June", quantity: 27 },
            ],
          },
        ],
      },
      {
        name: "Pants",
        brand: [
          {
            name: "Puma",
            data: [
              { month: "January", quantity: 52 },
              { month: "February", quantity: 41 },
              { month: "March", quantity: 33 },
              { month: "April", quantity: 15 },
              { month: "May", quantity: 18 },
              { month: "June", quantity: 23 },
            ],
          },
          {
            name: "Adidas",
            data: [
              { month: "January", quantity: 26 },
              { month: "February", quantity: 28 },
              { month: "March", quantity: 35 },
              { month: "April", quantity: 24 },
              { month: "May", quantity: 38 },
              { month: "June", quantity: 39 },
            ],
          },
          {
            name: "The North Face",
            data: [
              { month: "January", quantity: 12 },
              { month: "February", quantity: 15 },
              { month: "March", quantity: 22 },
              { month: "April", quantity: 17 },
              { month: "May", quantity: 23 },
              { month: "June", quantity: 34 },
            ],
          },
        ],
      },
      {
        name: "Sneakers",
        brand: [
          {
            name: "Nike",
            data: [
              { month: "January", quantity: 68 },
              { month: "February", quantity: 42 },
              { month: "March", quantity: 51 },
              { month: "April", quantity: 66 },
              { month: "May", quantity: 52 },
              { month: "June", quantity: 44 },
            ],
          },
          {
            name: "Adidas",
            data: [
              { month: "January", quantity: 33 },
              { month: "February", quantity: 64 },
              { month: "March", quantity: 73 },
              { month: "April", quantity: 51 },
              { month: "May", quantity: 27 },
              { month: "June", quantity: 13 },
            ],
          },
          {
            name: "Under Armour",
            data: [
              { month: "January", quantity: 55 },
              { month: "February", quantity: 36 },
              { month: "March", quantity: 35 },
              { month: "April", quantity: 32 },
              { month: "May", quantity: 23 },
              { month: "June", quantity: 43 },
            ],
          },
          {
            name: "New Balance",
            data: [
              { month: "January", quantity: 29 },
              { month: "February", quantity: 26 },
              { month: "March", quantity: 50 },
              { month: "April", quantity: 39 },
              { month: "May", quantity: 47 },
              { month: "June", quantity: 46 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Foods",
    product: [
      {
        name: "Snacks",
        brand: [
          {
            name: "Cheetos",
            data: [
              { month: "January", quantity: 78 },
              { month: "February", quantity: 86 },
              { month: "March", quantity: 64 },
              { month: "April", quantity: 77 },
              { month: "May", quantity: 49 },
              { month: "June", quantity: 83 },
            ],
          },
          {
            name: "Oreo",
            data: [
              { month: "January", quantity: 54 },
              { month: "February", quantity: 65 },
              { month: "March", quantity: 49 },
              { month: "April", quantity: 47 },
              { month: "May", quantity: 47 },
              { month: "June", quantity: 52 },
            ],
          },
          {
            name: "Pringles",
            data: [
              { month: "January", quantity: 33 },
              { month: "February", quantity: 34 },
              { month: "March", quantity: 13 },
              { month: "April", quantity: 21 },
              { month: "May", quantity: 15 },
              { month: "June", quantity: 43 },
            ],
          },
        ],
      },
      {
        name: "Chocolate",
        brand: [
          {
            name: "M&M's",
            data: [
              { month: "January", quantity: 73 },
              { month: "February", quantity: 74 },
              { month: "March", quantity: 73 },
              { month: "April", quantity: 71 },
              { month: "May", quantity: 75 },
              { month: "June", quantity: 73 },
            ],
          },
          {
            name: "KitKat",
            data: [
              { month: "January", quantity: 23 },
              { month: "February", quantity: 54 },
              { month: "March", quantity: 73 },
              { month: "April", quantity: 61 },
              { month: "May", quantity: 25 },
              { month: "June", quantity: 43 },
            ],
          },
          {
            name: "Reese's",
            data: [
              { month: "January", quantity: 42 },
              { month: "February", quantity: 44 },
              { month: "March", quantity: 42 },
              { month: "April", quantity: 55 },
              { month: "May", quantity: 55 },
              { month: "June", quantity: 53 },
            ],
          },
        ],
      },
      {
        name: "Fast-Foods",
        brand: [
          {
            name: "Mc Donald's",
            data: [
              { month: "January", quantity: 35 },
              { month: "February", quantity: 34 },
              { month: "March", quantity: 33 },
              { month: "April", quantity: 31 },
              { month: "May", quantity: 35 },
              { month: "June", quantity: 33 },
            ],
          },
          {
            name: "Burguer King",
            data: [
              { month: "January", quantity: 11 },
              { month: "February", quantity: 74 },
              { month: "March", quantity: 33 },
              { month: "April", quantity: 27 },
              { month: "May", quantity: 38 },
              { month: "June", quantity: 62 },
            ],
          },
          {
            name: "Shake Shack",
            data: [
              { month: "January", quantity: 21 },
              { month: "February", quantity: 68 },
              { month: "March", quantity: 34 },
              { month: "April", quantity: 31 },
              { month: "May", quantity: 41 },
              { month: "June", quantity: 37 },
            ],
          },
        ],
      },
    ],
  },
];

export function SalesHistory() {
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
          products={category}
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
