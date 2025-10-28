import { Mic2, Headphones, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Mic2,
    title: "Профессиональное оборудование",
    description: "Микрофоны, усилители, системы мониторинга в каждой студии",
  },
  {
    icon: Headphones,
    title: "Интерьер",
    description: "Великолепная звукоизоляция, хорошая вентиляция и кондиционирование",
  },
  {
    icon: Shield,
    title: "Безопасность и причастность",
    description: "Приватные студии для комфортных уроков",
  },
  {
    icon: Clock,
    title: "Гибкое бронирование",
    description: "Бронируйте по часам, дням или месяцам. Ежедневно, без выходных.",
  },
];

export function Features() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-black mb-4">Почему Loom</h2>
          <div className="h-1 w-24 mx-auto" style={{ backgroundColor: "var(--silver)" }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg transition-all hover:shadow-lg"
              style={{ border: "1px solid var(--silver-light)" }}
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--silver-light)" }}
              >
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
