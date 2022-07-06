import { Header } from "./components/header/Header";
import "./global.css";
import styles from "./App.Module.css";
import { SalesHistory } from "./components/salesHistory/SalesHistory";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <SalesHistory />
    </div>
  );
}

export default App;
