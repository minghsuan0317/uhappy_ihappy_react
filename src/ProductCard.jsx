export default function ProductCard({
  tag,
  image,
  title,
  description,
  price,
  onAddToCart,
}) {
  return (
    <div className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full max-w-sm mx-auto">
      {/* 頂部標籤 */}
      <div className="bg-[#585cd1] text-white text-center py-3 font-black tracking-widest text-sm">
        {tag}
      </div>

      {/* 商品圖片 */}
      <div className="w-full aspect-square bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* 卡片內容區 */}
      <div className="p-6 text-center flex flex-col gap-3">
        <h2 className="text-xl font-bold text-gray-800 leading-tight">
          {title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* 價格標示 */}
        <div className="text-[#d8457e] text-2xl font-black my-2">{price}</div>

        {/* 加入購物車按鈕 */}
        <button
          onClick={onAddToCart}
          className="bg-[#585cd1] hover:bg-[#464ab0] text-white font-bold py-3 px-6 rounded-full transition-colors w-full shadow-sm flex justify-center items-center gap-2"
        >
          <span>加入購物車</span>
          <span className="text-xl">✨</span>
        </button>
      </div>
    </div>
  );
}
