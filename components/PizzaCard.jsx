import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="150" height="150" />
      <h2 className={styles.title}>Frori di zucca</h2>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default PizzaCard;
