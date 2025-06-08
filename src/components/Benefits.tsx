const Benefits = () => {
  const benefits = [
    {
      icon: "⏰",
      title: "Гибкий график работы",
      description:
        "Многие компании предлагают курьерам возможность самостоятельно выбирать смены и планировать своё время. Это особенно удобно для тех, кто хочет совмещать работу с учёбой, хобби или другими занятиями.",
    },
    {
      icon: "💰",
      title: "Возможность заработка",
      description:
        "Работа курьером позволяет зарабатывать деньги, причём в крупных городах спрос на курьерские услуги часто высок, что может обеспечить хороший доход.",
    },
    {
      icon: "🏃",
      title: "Физическая активность",
      description:
        "Работа курьером подразумевает постоянное движение, что способствует поддержанию хорошей физической формы и здоровья.",
    },
    {
      icon: "🗺️",
      title: "Знакомство с городом",
      description:
        "Курьеры имеют возможность хорошо изучить город, его районы и инфраструктуру. Это может быть полезно не только в работе, но и в личной жизни.",
    },
    {
      icon: "🎯",
      title: "Простота входа в профессию",
      description:
        "Для работы курьером обычно не требуется специальное образование или опыт. Это делает профессию доступной для широкого круга людей.",
    },
    {
      icon: "🎲",
      title: "Разнообразие задач",
      description:
        "Работа курьером не всегда однообразна. Она может включать доставку различных товаров и взаимодействие с разными людьми, что добавляет элемент разнообразия в рабочий процесс.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 font-rubik">
          Почему стоит выбрать работу курьером?
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Присоединяйтесь к нам и начните свой путь в мире доставки!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 font-rubik">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
