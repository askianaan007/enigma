import React, { useEffect, useState } from "react";
import Navbar from "./layouts/Navbar";
import Food from "./Food/Food";
import CategoryBtn from "./Buttons/CategoryBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getFoodByCategory,
  getFoodRecipe,
} from "../redux/Actions/FoodActions";
import { PropagateLoader } from "react-spinners";

const Home = () => {
  const [category, setCategory] = useState("Beef");

  const { categories } = useSelector((state) => state.categoryState);
  const { meals, loading } = useSelector((state) => state.foodState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getFoodByCategory({ category }));
  }, [dispatch, category]);

  return (
    <div className="bg-homePink min-h-screen pb-10">
      <Navbar />
      <div className="px-[10%] pt-10">
        <div className="flex gap-5 overflow-x-auto max-w-full scrollbar-hide">
          {categories.map((cat) => (
            <CategoryBtn
              title={cat.strCategory}
              key={cat.idCategory}
              onClick={() => setCategory(cat.strCategory)}
            />
          ))}
        </div>

        <div className="relative min-h-screen">
          <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {meals?.length > 0 ? (
              meals.map((meal) => (
                <Food meal={meal} key={meal.idMeal} id={meal.idMeal} />
              ))
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <PropagateLoader color={"#ff5e7f"} size={25} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
