import { useDispatch, useSelector } from "react-redux";
import styles from "./cake.module.css";
import { orderCake } from "../../feature/cake/cakeSlice";
import { restockIcecream } from "../../feature/icecream/icecreamSlice";

const Cake = () => {
  const cakeCount = useSelector((state) => state.cake.cake);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1>Cake</h1>
      <div>
        <h2>{cakeCount}</h2>
        <button onClick={() => dispatch(orderCake())}>Order Cake</button>
        <button onClick={() => dispatch(restockIcecream(5))}>
          Restock Cake
        </button>
      </div>
    </div>
  );
};

export default Cake;
