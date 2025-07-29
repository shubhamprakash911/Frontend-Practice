import type { ProductButtonProps } from "../types";

function ProductButton({
  product,
  cartItem,
  addToCart,
  updateQuantity,
}: ProductButtonProps) {
  if (cartItem) {
    return (
      <div
        className="absolute -bottom-4  w-1/2 left-1/4  rounded-full border bg-orange-700 px-4 py-1
      flex items-center justify-around shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
      >
        <button
          onClick={() => updateQuantity(product.name, -1)}
          className="w-4 h-4 border border-white rounded-full flex items-center justify-center hover:bg-white transition-colors focus:outline-none font-bold p-0.5 group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="2"
            fill="none"
            viewBox="0 0 10 2"
            className="transition-colors"
          >
            <path
              fill="#fff"
              d="M0 .375h10v1.25H0V.375Z"
              className="group-hover:fill-orange-700"
            />
          </svg>
        </button>
        <span className="text-white">{cartItem.quantity}</span>
        <button
          onClick={() => updateQuantity(product.name, 1)}
          className="w-4 h-4 border border-white rounded-full flex items-center justify-center hover:bg-white  transition-colors focus:outline-none font-bold p-o.5 group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
            className="transition-colors"
          >
            <path
              fill="#fff"
              d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              className="group-hover:fill-orange-700"
            />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => addToCart(product)}
      className="absolute -bottom-4  w-1/2 left-1/4 bg-white p-4 rounded-full border border-orange-700 hover:text-orange-700 px-4 py-2 
      flex items-center justify-center gap-2 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 cursor-pointer"
    >
      <img src="./assets/images/icon-add-to-cart.svg" alt="Add to cart icon" />
      <div className="font-semibold text-sm">Add to Cart</div>
    </button>
  );
}

export default ProductButton;
