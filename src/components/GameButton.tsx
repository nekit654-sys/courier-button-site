import React, { useState, useEffect } from "react";
import { X, Gamepad2 } from "lucide-react";

interface GameButtonProps {
  onToggle: (isOpen: boolean) => void;
}

const GameButton: React.FC<GameButtonProps> = ({ onToggle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    const handleScroll = () => {
      // Показываем кнопку только на мобильных и планшетах когда прокрутили до середины страницы
      if (window.innerWidth > 1024) {
        setIsVisible(false);
        return;
      }
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage = scrollTop / (documentHeight - windowHeight);
      
      // Показываем кнопку когда прокрутили до середины страницы (50%)
      setIsVisible(scrollPercentage >= 0.5);
    };

    checkDevice();
    handleScroll(); // Вызываем сразу для проверки начального состояния
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      checkDevice();
      handleScroll();
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  const toggleGame = () => {
    // Всегда открываем в модальном окне
    setIsGameOpen(!isGameOpen);
    onToggle(!isGameOpen);
  };

  const closeGame = () => {
    setIsGameOpen(false);
    onToggle(false);
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "closeGame") {
        closeGame();
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      {/* Плавающая кнопка игры - только для мобильных и планшетов */}
      <div
        className={`fixed bottom-6 left-6 transition-all duration-300 z-50 lg:hidden ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          onClick={toggleGame}
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 
                     rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 
                     hover:scale-110 active:scale-95 flex items-center justify-center group
                     animate-shake hover:animate-none"
          style={{
            animation: isVisible ? "shake 3s ease-in-out infinite" : "none",
            animationDelay: "2s",
          }}
        >
          {/* Иконка игры */}
          <Gamepad2 size={28} className="text-white drop-shadow-sm" />

          {/* Анимация потряхивания */}
          <style jsx>{`
            @keyframes shake {
              0%,
              90%,
              100% {
                transform: translateX(0);
              }
              91%,
              93%,
              95%,
              97%,
              99% {
                transform: translateX(-2px);
              }
              92%,
              94%,
              96%,
              98% {
                transform: translateX(2px);
              }
            }
          `}</style>
        </button>
      </div>

      {/* Модальное окно с игрой */}
      {isGameOpen && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Кнопка закрытия */}
            <button
              onClick={closeGame}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-red-500 hover:bg-red-600 
                         text-white rounded-full flex items-center justify-center 
                         transition-all duration-200 hover:scale-110"
            >
              <X size={16} />
            </button>

            {/* Iframe с игрой */}
            <iframe
              src="/game.html"
              className="w-full h-full border-0"
              title="Игра Приключения курьера Stuey.Go"
              allow="fullscreen"
              ref={(iframe) => {
                if (iframe) {
                  iframe.onload = () => {
                    // Отправляем функцию закрытия в iframe
                    const iframeWindow = iframe.contentWindow;
                    if (iframeWindow) {
                      iframeWindow.postMessage(
                        { type: "setCloseHandler" },
                        "*",
                      );
                    }
                  };
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GameButton;