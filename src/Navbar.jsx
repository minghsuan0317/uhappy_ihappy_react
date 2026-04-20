import { useState } from "react";

const MENU_ITEMS = [
  { label: "Honest Review", href: "#hero-section" },
  { label: "Popular Items", href: "#products-section" },
  { label: "Contact Us", href: "#contact-section" },
];

export default function Navbar({ cartCount, onOpenCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleNavigate = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 bg-[#585cd1] text-white flex justify-center items-center px-6 py-3 shadow-sm w-full z-50 border-b-4 border-white/40 relative">
      <button
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="navbar-menu"
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-white/15 transition backdrop-blur-sm"
        aria-label="Open menu"
      >
        <span className="flex flex-col gap-1 w-6">
          <span className="h-0.5 bg-white rounded-full"></span>
          <span className="h-0.5 bg-white rounded-full"></span>
          <span className="h-0.5 bg-white rounded-full"></span>
        </span>
      </button>
      <div className="text-center pointer-events-none">
        <p className="text-3xl font-bold mb-1 tracking-wide">U Happy I Happy</p>
        <p className="text-sm font-medium leading-relaxed">
          Australian Beauty Proxy
        </p>
      </div>

      {/* 點擊按鈕觸發開關 */}
      <button
        onClick={onOpenCart}
        className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/15 hover:bg-white/25 transition rounded-full px-4 py-2 border border-white/40 shadow-lg backdrop-blur-sm"
        aria-label="Open cart"
      >
        <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white text-[#C25E82] shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M7 7V6a5 5 0 1 1 10 0v1h3a1 1 0 0 1 .96 1.27l-2.4 9a2 2 0 0 1-1.94 1.48H6.38a2 2 0 0 1-1.94-1.48l-2.4-9A1 1 0 0 1 3 7h4Zm2 0h6V6a3 3 0 1 0-6 0v1Zm-.22 6.78a1 1 0 0 1 1.44-.06l1.28 1.19 2.28-2.28a1 1 0 1 1 1.41 1.42l-2.99 2.98a1 1 0 0 1-1.39.03l-1.98-1.83a1 1 0 0 1-.05-1.45Z" />
          </svg>
        </span>
        <span className="text-sm font-semibold tracking-wider">
          Cart {cartCount}
        </span>
      </button>

      {isMenuOpen && (
        <nav
          id="navbar-menu"
          className="absolute left-4 top-full mt-3 bg-white/95 text-[#585cd1] rounded-2xl shadow-xl border border-white/60 backdrop-blur-md px-5 py-4 flex flex-col gap-3 w-48"
        >
          {MENU_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavigate}
              className="font-semibold tracking-wide hover:text-[#C25E82] transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
