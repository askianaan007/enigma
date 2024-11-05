import React from "react";

const CategoryBtn = ({ title, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-[150px] py-3 rounded-3xl text-xs text-buttonPink border-solid border-buttonPink border hover:bg-buttonPink hover:text-white transition"
      >
        {title}
      </button>
    </div>
  );
};

export default CategoryBtn;
