export interface Review {
  name: string;
  location: string;
  experience: string;
  avatar: string;
  rating: number;
  text: string;
  income: string;
}

export const reviewsData: Review[] = [
  {
    name: "Алексей М.",
    location: "Москва",
    experience: "8 месяцев",
    avatar: "/img/c63c38dd-ce7f-43fb-bbea-1303845bcb1c.jpg",
    rating: 5,
    text: "Отличная возможность подработать в свободное время. График гибкий, поддержка работает быстро. За 8 месяцев ни разу не было проблем с выплатами.",
    income: "65,000 ₽/мес",
  },
  {
    name: "Марина К.",
    location: "Санкт-Петербург",
    experience: "1 год 2 месяца",
    avatar: "/img/1f5de5a8-e001-442d-bd11-c3d5bb44f128.jpg",
    rating: 5,
    text: "Работаю курьером на велосипеде уже больше года. Очень нравится система бонусов и то, что можно планировать свой день самостоятельно. Рекомендую!",
    income: "58,000 ₽/мес",
  },
  {
    name: "Дмитрий П.",
    location: "Екатеринбург",
    experience: "6 месяцев",
    avatar: "/img/8a029430-0b9d-4330-b29a-ed4c586bd37b.jpg",
    rating: 4,
    text: "Хорошая подработка для студента. Работаю в основном вечером и в выходные. Приложение удобное, заказы поступают регулярно.",
    income: "35,000 ₽/мес",
  },
  {
    name: "Елена С.",
    location: "Новосибирск",
    experience: "3 месяца",
    avatar: "/img/2cbcdebb-de9d-4e40-81d3-930003631604.jpg",
    rating: 5,
    text: "Начала работать недавно, но уже очень довольна. Обучение прошло быстро, техподдержка всегда помогает. Планирую работать дальше.",
    income: "42,000 ₽/мес",
  },
  {
    name: "Сергей Т.",
    location: "Казань",
    experience: "2 года",
    avatar: "/img/b186d584-8912-4645-b033-e414c3e55fac.jpg",
    rating: 5,
    text: "Работаю курьером уже 2 года. За это время компания сильно развилась, условия стали еще лучше. Особенно нравится программа лояльности.",
    income: "78,000 ₽/мес",
  },
  {
    name: "Анна В.",
    location: "Ростов-на-Дону",
    experience: "4 месяца",
    avatar: "/img/0b8342da-32d8-4ea5-8105-4c9e53d5667a.jpg",
    rating: 4,
    text: "Отличная возможность совмещать с основной работой. Выходные провожу с пользой, зарабатывая дополнительные деньги. Всем довольна!",
    income: "28,000 ₽/мес",
  },
];
