import styles from "./icecream.module.css";
import { useDispatch } from "react-redux";
import { orderIcecream, restockIcecream } from "../../feature/icecream/icecreamSlice";

const Icecream = () => {
  const icecreamCount = useSelector((state) => state.icecream.icecream);
  const dispatch = useDispatch();
  
  return (
    <div className={styles.container}>
      <h1>Icecream</h1>
      <div>
        <h2>{icecreamCount}</h2>
        <div>
        <button onClick={() => dispatch(orderIcecream())}>Order Icecream</button>
        <button onClick={() => {
      dispatch(restockIcecream(2))
        }}>Restock Icecream</button>
        </div>
      </div>
    </div>
  );
};

export default Icecream;
