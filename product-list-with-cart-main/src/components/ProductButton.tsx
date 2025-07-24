function ProductButton({}) {
  return (
    <button
      className="absolute -bottom-4  w-1/2 left-1/4 bg-white p-4 rounded-full border border-orange-700 hover:text-orange-700 px-4 py-2 
      flex items-center justify-center gap-2 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 cursor-pointer"
    >
      <img src="./assets/images/icon-add-to-cart.svg" alt="Add to cart icon" />
      <div className="font-semibold text-sm">Add to Cart</div>
    </button>
  );
}

export default ProductButton;
