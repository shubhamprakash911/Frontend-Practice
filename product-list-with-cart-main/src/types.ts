export type ProductItem = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};

export type ProductProps = {
  data: ProductItem[];
};

export type CartItem = ProductItem & { quantity: number };
