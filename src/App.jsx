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
    tag: "Hair Care Essentials 💆🏻‍♀️",
    image: "/hair.jpeg",
    title: "MY.ORGANICS Miracle Hair Mask",
    description: "Italian premium organic care, savior for damaged hair.",
    price: 38,
  },
  {
    id: 2,
    tag: "Foot Repair 👣",
    image: "/heel.jpeg",
    title: "Dermal Therapy Heel Crack Cream",
    description: "Top seller in Australian pharmacies, say goodbye to rough heels in three days.",
    price: 17,
  },
  {
    id: 3,
    tag: "Lip Care 💄",
    image: "/limpbalm.jpeg",
    title: "Dermal Medical Lip Balm",
    description: "Extremely moisturizing, the lip care essential to say goodbye to dead skin and dullness.",
    price: 8,
  },
  {
    id: 4,
    tag: "Home Fragrance 🕯️",
    image: "/oil.jpeg",
    title: "Study of Trees Essential Oil",
    description: "Filled with Australian forest scent, soothing woody notes to relieve stress.",
    price: 40,
  },
  {
    id: 5,
    tag: "Fresh Breath 🦷",
    image: "/oral.jpeg",
    title: "TheraBreath Mouthwash",
    description: "Gentle and non-irritating, long-lasting fresh breath for 12 hours.",
    price: 25,
  },
  {
    id: 6,
    tag: "Acid Care ✨",
    image: "/ordinary.jpeg",
    title: "The Ordinary Glycolic Acid Toner",
    description: "High value large capacity, gently exfoliates old dead skin.",
    price: 26,
  },
  {
    id: 7,
    tag: "Hydration 💧",
    image: "/skin.jpeg",
    title: "EAORON Hydrating Serum",
    description: "Australian renowned skincare brand, high concentration hyaluronic acid for quick absorption.",
    price: 25,
  },
  {
    id: 8,
    tag: "Sunscreen Choice ☀️",
    image: "/sunscream.jpeg",
    title: "Cancer Council Sunscreen",
    description: "Produced by Australian Cancer Council, lightweight and non-greasy daily essential.",
    price: 18,
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
                DM me on IG to order! ✨
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
          🌸 DAILY ESSENTIALS 🌸
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
