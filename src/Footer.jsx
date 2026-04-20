// src/Footer.jsx

export default function Footer() {
  return (
    // border-t 加上一條微微透明的白線，讓 footer 與上方內容有明顯分隔
    <footer
      id="contact-section"
      className="bg-[#F0D0DE] w-full py-10 mt-10 border-t-2 border-white/40"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-5">
        {/* 品牌名稱 */}
        <h3 className="text-[#C25E82] font-black tracking-widest text-xl font-genjyuu">
          U Happy I Happy
        </h3>

        {/* 社群 Icons */}
        <div className="flex gap-8 mt-2">
          <a
            href="https://www.threads.com/@uhappy_ihappy_?xmt=AQF0u_SMSPOYCUwSkHF1uoDCqNbmd6c9ZjOHiiMfg2N5gWQ"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform duration-300 cursor-pointer"
          >
            <img
              src="/threads.png"
              alt="threads"
              className="w-8 h-8 object-contain drop-shadow"
            />
          </a>
          <a
            href="https://www.instagram.com/uhappy_ihappy_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform duration-300 cursor-pointer"
          >
            <img
              src="/instagram.png"
              alt="instagram"
              className="w-8 h-8 object-contain drop-shadow"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100090634764069"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform duration-300 cursor-pointer"
          >
            <img
              src="/facebook.png"
              alt="facebook"
              className="w-8 h-8 object-contain drop-shadow"
            />
          </a>
        </div>

        {/* 版權宣告 */}
        <p className="text-sm text-[#C25E82] opacity-80 mt-2">
          © 2026 U Happy I Happy . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
