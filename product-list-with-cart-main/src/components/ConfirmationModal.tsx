import { useMemo } from "react";
import type { CartItem } from "../types";

function ConfirmationModal({
  cart,
  onNewOrder,
  setModalOpen,
}: {
  cart: CartItem[];
  onNewOrder: () => void;
  setModalOpen: (isOpen: boolean) => void;
}) {
  const orderTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <div
      onClick={() => setModalOpen(false)}
      className="fixed z-50 inset-0 flex items-end sm:items-center justify-center backdrop-brightness-50 sm:p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full sm:max-w-md max-h-[90vh] transform transition-all duration-300 ease-in-out overflow-hidden flex flex-col"
      >
        <div className="p-4 sm:p-6 flex-shrink-0">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z"
              fill="#1EA575"
            />
            <path
              d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z"
              fill="#1EA575"
            />
          </svg>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-4 mb-2">
            Order Confirmed
          </h2>
          <p className="text-gray-600 mt-2">We hope you enjoy your food!</p>
        </div>

        {/* order details - scrollable section */}
        <div className="flex-1 overflow-y-auto px-4">
          <div className="bg-rose-50 rounded-xl p-6">
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <div className="flex text-sm text-gray-500">
                      <p>{item.quantity}x</p>
                      <span className="mx-1">@</span>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <p className="font-semibold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

              <hr className="my-6 border-gray-200" />
              <div className="flex justify-between items-center">
                <p className="text-gray-600 font-medium">Order Total</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${orderTotal.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button - fixed at bottom */}
        <div className="p-4 flex-shrink-0">
          <button
            onClick={onNewOrder}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-full transition-colors duration-300"
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
