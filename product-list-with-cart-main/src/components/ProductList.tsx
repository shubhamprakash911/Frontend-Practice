import type { ProductListProps } from "../types";
import ProductButton from "./ProductButton";

function ProductList({
  products,
  cart,
  addToCart,
  updateQuantity,
}: ProductListProps) {
  return (
    <div className="sm:grid grid-cols-3 gap-6">
      {products.map((el, i) => {
        const cartItem = cart.find((item) => item.name === el.name);
        return (
          <div key={i}>
            <div className="relative mb-4">
              <picture>
                <source
                  media="(max-width: 640px)"
                  className="rounded-md"
                  srcSet={el.image.mobile}
                />
                <source
                  media="(max-width: 1024px)"
                  className="rounded-md"
                  srcSet={el.image.tablet}
                />
                <img
                  src={el.image.desktop}
                  className={`rounded-md ${
                    cartItem?.name === el.name
                      ? "border-orange-600 border-2"
                      : ""
                  }`}
                  alt={el.name}
                />
              </picture>
              <ProductButton
                cartItem={cartItem}
                product={el}
                addToCart={addToCart}
                updateQuantity={updateQuantity}
              />
            </div>
            <div className="text-xs text-gray-400">{el.category}</div>
            <div className="font-semibold">{el.name}</div>
            <div className="text-orange-600 font-semibold">${el.price}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
