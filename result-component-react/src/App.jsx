import { useState } from "react";
import Categories from "./components/Categories";
import Result from "./components/Result";
import data from "./data.json";

function App() {
  const [selectedScore, setSelectedScore] = useState(null);

  const handleCategoryClick = (score) => {
    setSelectedScore(score);
  };
  return (
    <>
      <div className="rounded-md sm:flex justify-center items-center h-screen text-white font-bold bg-gray-100">
        <div className="sm:w-1/2 sm:flex shadow-2xl rounded-3xl">
          <Result score={selectedScore} />
          <Categories data={data} onCategoryClick={handleCategoryClick} />
        </div>
      </div>
    </>
  );
}

export default App;
