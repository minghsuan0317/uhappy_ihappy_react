export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onQuantityChange,
}) {
  if (!isOpen) return null;

  const cartTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    // 背景遮罩 (Overlay)
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* 點擊半透明背景可以關閉 */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* 購物車 */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-8 flex flex-col animate-in slide-in-from-right duration-300">
        {/* 標題與關閉按鈕 */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-black text-[#7B646F] font-genjyuu">
            My Cart
          </h2>
          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* 模擬商品清單*/}
        <div className="flex-grow overflow-y-auto space-y-6">
          {items.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <div
                key={item.id}
                className="flex gap-4 border-b border-gray-100 pb-4"
              >
                <div className="w-20 h-20 bg-[#F0D0DE] rounded-xl flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                    <span>Amount</span>
                    <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                      <button
                        type="button"
                        onClick={() => onQuantityChange(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-lg text-[#7B646F] hover:bg-gray-100"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        −
                      </button>
                      <span className="w-10 text-center text-gray-800 font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onQuantityChange(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-lg text-[#7B646F] hover:bg-gray-100"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-[#C25E82] font-bold mt-2">
                    AUD$ {itemTotal.toLocaleString("en-US")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 結帳資訊 */}
        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="flex justify-between text-xl font-black text-gray-800 mb-6">
            <span>Total</span>
            <span>AUD$ {cartTotal.toLocaleString("en-US")}</span>
          </div>
          <button className="w-full bg-[#585cd1] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#464ab0] transition-colors">
            Proceed to Checkout
          </button>
          <p className="text-center text-gray-400 text-xs mt-4">
            Expected to ship from Melbourne, Australia
          </p>
        </div>
      </div>
    </div>
  );
}
