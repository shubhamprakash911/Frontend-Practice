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

export type ProductButtonProps = {
  product: ProductItem;
  cartItem: CartItem | undefined;
  addToCart: (product: ProductItem) => void;
  updateQuantity: (productName: string, amount: number) => void;
};

export type ProductListProps = {
  products: ProductItem[];
  cart: CartItem[];
  addToCart: (product: ProductItem) => void;
  updateQuantity: (productName: string, amount: number) => void;
};

export type CartProps = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  onConfirmOrder: () => void;
};
