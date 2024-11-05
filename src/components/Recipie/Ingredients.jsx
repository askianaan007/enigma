import React from "react";

const Ingredients = ({ ingredients }) => {
  const getIngredients = (meal) => {
    return Object.keys(meal)
      .filter((key) => key.startsWith("strIngredient") && meal[key])
      .map((key) => meal[key]);
  };

  const getMeasure = (meal) => {
    return Object.keys(meal)
      .filter((key) => key.startsWith("strMeasure") && meal[key])
      .map((key) => meal[key]);
  };

  const ingredientList = getIngredients(ingredients);
  const measurementList = getMeasure(ingredients);

  return (
    <section className="my-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h3>
      <div className="flex gap-10">
        <div>
          <ol className="list-disc list-inside space-y-2">
            {ingredientList.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <ol className="list-none list-inside space-y-2">
            {measurementList.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[8%]">
        <iframe width="600" height="350" src={ingredients.strYoutube}></iframe>
      </div>
      <div className="mt-[10%]">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tags</h3>
        <p>{ingredients.strTags}</p>
      </div>
    </section>
  );
};

export default Ingredients;
