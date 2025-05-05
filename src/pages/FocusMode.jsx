import { useEffect, useState } from 'react';

function FocusMode() {
  const [seconds, setSeconds] = useState(1500); // 25 min por defecto
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const ss = s % 60;
    return `${m.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setSeconds(1500);
    setIsActive(false);
  };

  return (
    <div className="min-h-screen bg-[#fefcf7] flex flex-col items-center justify-center px-6 py-10 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 font-serif mb-4">Modo Enfoque 🧠</h2>
      <p className="text-gray-500 mb-6">Trabaja 25 minutos, descansa 5. Repite si lo necesitas.</p>

      <div className="text-6xl font-mono text-gray-800 mb-6">{formatTime(seconds)}</div>

      <div className="flex gap-4">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`py-3 px-6 rounded-full text-white font-medium transition ${isActive ? 'bg-orange-500 hover:bg-orange-600' : 'bg-green-600 hover:bg-green-700'}`}
        >
          {isActive ? 'Pausar' : 'Iniciar'}
        </button>
        <button
          onClick={resetTimer}
          className="py-3 px-6 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default FocusMode;
