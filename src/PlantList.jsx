import { useCart } from "./CartContext";

export default function PlantList({ plants }) {
  const { addToCart } = useCart();
  return (
    <div>
      <h2>Plants</h2>
      <div className="plant-list">
        {plants.map((plant) => (
          <li className="plant-item" key={plants.id}>
            <div className="plant-image">{plant.image} </div>
            <div className="plant-name">{plant.name}</div>
            <button onClick={() => addToCart(plant)}>Add to Cart </button>
          </li>
        ))}
      </div>
    </div>
  );
}
