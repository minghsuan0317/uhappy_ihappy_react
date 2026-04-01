import { useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import BannerCarousel from "./BannerCarousel";

// 商品清單
const PRODUCTS = [
  {
    id: 1,
    tag: "美髮必備 💆🏻‍♀️",
    image: "/hair.jpeg",
    title: "MY.ORGANICS 奇蹟髮膜",
    description: "義大利頂級有機保養，受損髮的救星。",
    price: 945,
  },
  {
    id: 2,
    tag: "足部修復 👣",
    image: "/heel.jpeg",
    title: "Dermal Therapy 腳跟龜裂霜",
    description: "澳洲藥局銷售第一，三天告別粗糙腳跟。",
    price: 420,
  },
  {
    id: 3,
    tag: "唇部護理 💄",
    image: "/limpbalm.jpeg",
    title: "Dermal 醫用級修復護唇膏",
    description: "極度滋潤，告別死皮與暗沈的護唇神物。",
    price: 210,
  },
  {
    id: 4,
    tag: "居家香氛 🕯️",
    image: "/oil.jpeg",
    title: "Study of Trees 香氛精油",
    description: "充滿澳洲森林氣息，舒緩壓力的沉穩木質調。",
    price: 735,
  },
  {
    id: 5,
    tag: "清新口氣 🦷",
    image: "/oral.jpeg",
    title: "TheraBreath 漱口水",
    description: "溫和不刺痛，長效保持 12 小時清爽口氣。",
    price: 378,
  },
  {
    id: 6,
    tag: "酸類保養 ✨",
    image: "/ordinary.jpeg",
    title: "The Ordinary 甘醇酸爽膚水",
    description: "超大容量高 CP 值，溫和代謝老廢角質。",
    price: 315,
  },
  {
    id: 7,
    tag: "保濕補水 💧",
    image: "/skin.jpeg",
    title: "EAORON 補水塗抹式水光針",
    description: "澳洲知名保養品牌，高濃度玻尿酸快速吸收。",
    price: 525,
  },
  {
    id: 8,
    tag: "防曬首選 ☀️",
    image: "/sunscream.jpeg",
    title: "Cancer Council 每日防曬",
    description: "澳洲防癌協會出品，輕透不油膩的日常必備。",
    price: 462,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (itemId) => {
    const product = PRODUCTS.find((p) => p.id === itemId);
    if (!product) return;

    setCartItems((items) => {
      const exists = items.find((item) => item.id === itemId);
      if (exists) {
        return items.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...items,
        {
          id: product.id,
          name: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleQuantityChange = (itemId, delta) => {
    setCartItems((items) =>
      items
        .map((item) => {
          if (item.id !== itemId) return item;
          const newQuantity = item.quantity + delta;
          if (newQuantity <= 0) {
            return null;
          }
          return { ...item, quantity: newQuantity };
        })
        .filter((item) => item !== null),
    );
  };

  return (
    <div className="min-h-screen bg-[#FFF0F7] font-sans flex flex-col">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      {/* logo與輪播區塊 */}
      <section
        id="hero-section"
        className="max-w-6xl mx-auto px-6 py-10 w-full"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/2 flex justify-end">
            <div className="relative group">
              <a
                href="https://www.instagram.com/uhappy_ihappy_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Logo.JPG"
                  alt="Brand Logo"
                  className="w-80 h-80 md:w-[450px] md:h-[450px] object-cover rounded-[50px] shadow-2xl border-8 border-white transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"
                />
              </a>
              <div className="absolute -bottom-4 -right-4 bg-[#585cd1] text-white px-6 py-2 rounded-full font-black shadow-lg transform rotate-6">
                IG私訊我直接下單! ✨
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-start">
            <div className="w-full max-w-sm">
              <BannerCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* 商品列表區塊*/}
      <main id="products-section" className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-center text-3xl font-black text-[#585cd1] mb-12 tracking-widest">
          🌸 澳洲藥妝好物 嚴選直郵 🌸
        </h1>

        <div className="grid grid-cols-2 gap-8 justify-items-center">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              tag={product.tag}
              image={product.image}
              title={product.title}
              description={product.description}
              price={`NT$ ${product.price.toLocaleString("en-US")}`}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onQuantityChange={handleQuantityChange}
      />
    </div>
  );
}

export default App;
