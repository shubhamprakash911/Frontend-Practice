import type { ProductItem, ProductProps } from "../types";
import ProductButton from "./ProductButton";

function Product({ data }: { data: ProductItem[] }) {
  return (
    <div className="sm:grid grid-cols-3 gap-6">
      {data.map((el, i) => {
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
                  className="rounded-md"
                  alt={el.name}
                />
              </picture>
              <ProductButton />
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

export default Product;
