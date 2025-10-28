import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl text-black tracking-tight">LOOM</h3>
            <p className="text-gray-600 mt-2">Где ваш звук оживает</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
              style={{ border: "1px solid var(--silver)" }}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-black" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
              style={{ border: "1px solid var(--silver)" }}
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-black" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
              style={{ border: "1px solid var(--silver)" }}
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-black" />
            </a>
          </div>
        </div>
        <div
          className="mt-8 pt-8"
          style={{ borderTop: "1px solid var(--silver-light)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600">
            <p>&copy; 2025 Loom Studios. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
