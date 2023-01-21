import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
        inventore exercitationem dolor, modi minima natus molestias facilis
        aspernatur nemo esse sint cupiditate non quae at ipsum sed delectus.
        Porro, veritatis.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}

export default PizzaList;
