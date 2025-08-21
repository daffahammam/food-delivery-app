import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // kalau food_list belum ada atau bukan array, jangan crash
  if (!food_list || !Array.isArray(food_list)) {
    return <p>Loading menu...</p>;
  }

  // filter data sesuai kategori
  const filteredList = food_list.filter(
    (item) => category === "All" || item.category === category
  );

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredList.map((item) => {
          if (category === "All" || category === item.category) return (
                    <FoodItem
                      key={item._id}
                      id={item._id}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      image={item.image}
                    />
          );
        })}      
      </div>
    </div>
  );
};

export default FoodDisplay;
