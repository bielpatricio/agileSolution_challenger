import styles from "./Product.module.css";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";

export function Product(props) {
  const { products, selectedOption, setSelectedOption, fieldName } = props;

  return (
    <div className={styles.product}>
      <h3>{fieldName}</h3>
      <div className={styles.listbox}>
        <Listbox value={selectedOption} onChange={setSelectedOption}>
          <Listbox.Button className={styles.listbox_button}>
            {selectedOption.length !== 0
              ? selectedOption.name
              : "select a products"}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={styles.listbox_options}>
              {products?.map((product, idx) => (
                <Listbox.Option
                  key={idx}
                  value={product}
                  className={styles.listbox_option}
                >
                  {product.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
    </div>
  );
}
