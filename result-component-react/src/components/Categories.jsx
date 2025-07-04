function Categories({ data, onCategoryClick }) {
  const categoryStyles = {
    Reaction: {
      text: "text-red-500",
      bg: "bg-red-50",
    },
    Memory: {
      text: "text-yellow-400",
      bg: "bg-yellow-50 ",
    },
    Verbal: {
      text: "text-green-500",
      bg: "bg-green-50",
    },
    Visual: {
      text: "text-blue-600",
      bg: "bg-blue-50",
    },
  };

  return (
    <div className="p-6 sm:w-2/3 flex flex-col justify-around">
      <h1 className="text-black text-xl font-bold mb-3">Summary</h1>
      {data.map((e, i) => {
        const styles = categoryStyles[e.category] || {};
        return (
          <div
            key={i}
            className={`rounded-md shadow-md  ${styles.bg} p-3 flex items-center  justify-between  cursor-pointer my-3`}
            onClick={() => onCategoryClick(e.score)}
          >
            <div className="flex items-center gap-3">
              <img src={e.icon} alt={e.category} className="w-6 h-6" />
              <span className={`font-semibold ${styles.text}`}>
                {e.category}
              </span>
            </div>

            <div className="text-gray-400">
              <span className="text-black">{e.score}</span> / 100
            </div>
          </div>
        );
      })}
      <button className="rounded-3xl bg-gray-800 hover:bg-blue-800 p-3 text-xl mt-3">
        Continue
      </button>
    </div>
  );
}

export default Categories;
