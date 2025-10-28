import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Дневной от 500 руб.",
    price: "",
    period: "",
    description: "",
    features: [],
    highlighted: false,
  },
  {
    name: "Вечерний от 800 руб.",
    price: "",
    period: "",
    description: "",
    features: [],
    highlighted: true,
  },
  {
    name: "Абонементы от 3000 руб.",
    price: "",
    period: "",
    description: "",
    features: [],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-black mb-4">Тарифы</h2>
          <div className="h-1 w-24 mx-auto" style={{ backgroundColor: "var(--silver)" }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.highlighted
                  ? "border-black shadow-2xl scale-105"
                  : ""
              }`}
              style={{
                border: plan.highlighted ? "2px solid black" : "1px solid var(--silver-light)",
              }}
            >
              {plan.highlighted && (
                <div
                  className="absolute top-0 right-0 px-4 py-1 text-xs text-white"
                  style={{ backgroundColor: "var(--silver-dark)" }}
                >
                  ПОПУЛЯРНЫЙ
                </div>
              )}
              <CardHeader className="text-center pt-8 pb-6">
                <h3 className="text-black mb-2">{plan.name}</h3>
                {plan.price && (
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl text-black">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                  </div>
                )}
                {plan.description && <p className="text-gray-600 mt-2">{plan.description}</p>}
              </CardHeader>
              <CardContent className="pb-8">
                {plan.features.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check
                          className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                          style={{ color: "var(--silver-dark)" }}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-white text-black border-2 hover:bg-gray-50"
                  }`}
                  style={
                    !plan.highlighted
                      ? { borderColor: "var(--silver)" }
                      : undefined
                  }
                >
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
