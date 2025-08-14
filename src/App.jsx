import PlantList from "./PlantList";
import PLANTS from "./data";
import Cart from "./Cart";
export default function App() {
  return (
    <>
      <h1>Proper Plants</h1>
      <div className="page">
        <PlantList plants={PLANTS} />
        <Cart />
      </div>
    </>
  );
}
