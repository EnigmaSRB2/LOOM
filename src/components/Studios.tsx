import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const studios = [
  {
    name: "Студия Vol.1",
    type: "",
    image: "https://images.unsplash.com/photo-1698769676404-aeef21291ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHJlaGVhcnNhbCUyMHJvb218ZW58MXx8fHwxNzYxNTg4NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [],
  },
  {
    name: "Студия Vol.2",
    type: "",
    image: "https://images.unsplash.com/photo-1758336717046-c475fc6f45ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcHJhY3RpY2UlMjBzdHVkaW98ZW58MXx8fHwxNzYxNTg4NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [],
  },
  {
    name: "Большая студия Vol.3",
    type: "",
    image: "https://images.unsplash.com/photo-1651339764881-54e8338b185b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHJvb20lMjByZWhlYXJzYWwlMjBzcGFjZXxlbnwxfHx8fDE3NjE1ODg2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [],
  },
];

export function Studios() {
  return (
    <section id="studios" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-white mb-4">Наши студии</h2>
          <div className="h-1 w-24 mx-auto" style={{ backgroundColor: "var(--silver)" }}></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Каждая студия тщательно спроектирована и оснащена для обеспечения исключительного качества звука
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studios.map((studio, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white border-0 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={studio.image}
                  alt={studio.name}
                  className="w-full h-full object-cover"
                />
                {studio.type && (
                  <div
                    className="absolute top-4 left-4 px-4 py-2 text-sm text-black"
                    style={{ backgroundColor: "var(--silver)" }}
                  >
                    {studio.type}
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-black mb-4">{studio.name}</h3>
                {studio.features.length > 0 && (
                  <ul className="space-y-2">
                    {studio.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span
                          className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "var(--silver-dark)" }}
                        ></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
