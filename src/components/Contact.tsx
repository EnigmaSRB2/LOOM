import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    alert("Спасибо за ваш запрос! Мы скоро свяжемся с вами.");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-white mb-4">Свяжитесь с нами</h2>
          <div className="h-1 w-24 mx-auto" style={{ backgroundColor: "var(--silver)" }}></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Хотите забронировать студию? Есть вопросы? Мы будем рады услышать вас.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-black mb-2">
                  Имя
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ваше имя"
                  className="bg-gray-50 border-gray-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-black mb-2">
                  Электронная почта
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ваш@email.com"
                  className="bg-gray-50 border-gray-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-black mb-2">
                  Телефон
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-4567"
                  className="bg-gray-50 border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-black mb-2">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Расскажите нам о вашем проекте..."
                  rows={5}
                  className="bg-gray-50 border-gray-300"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                Отправить сообщение
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "var(--silver)" }}
              >
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-white mb-1">Электронная почта</h3>
                <p className="text-gray-400">info@loomstudios.com</p>
                <p className="text-gray-400">booking@loomstudios.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "var(--silver)" }}
              >
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-white mb-1">Телефон</h3>
                <p className="text-gray-400">+79169796565</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "var(--silver)" }}
              >
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-white mb-1">Адрес</h3>
                <p className="text-gray-400">Москва, Хомутовский тупик 5-7 стр.13</p>
                <p className="text-gray-400">(м.Красные ворота, 5 минут пешком)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
