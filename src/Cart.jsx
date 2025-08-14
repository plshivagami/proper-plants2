import { useCart } from "./CartContext";
export default function Cart() {
  const { cart, increaseQty, decreaseQty } = useCart();
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="toCart">
          {cart.map((item) => (
            <li key={item.id}>
              {item.image} {item.name}
              <br />
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span className="qty">{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
