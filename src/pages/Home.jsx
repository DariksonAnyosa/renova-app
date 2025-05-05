import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MotivationalQuote from '../components/MotivationalQuote';
import EmojiSelector from '../components/EmojiSelector';
import SuggestedGoal from '../components/SuggestedGoal';
import welcomeImg from '../assets/welcome.png';

function Home() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [yesterdayEmoji, setYesterdayEmoji] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('renova_emoji'));
    const today = new Date().toISOString().split('T')[0];

    if (saved?.date !== today) {
      setYesterdayEmoji(saved?.emoji || null);
    } else {
      setSelectedEmoji(saved?.emoji || null);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#fefcf7] flex flex-col items-center justify-center px-6 py-10 text-center">
      <img src={welcomeImg} alt="Bienvenida" className="w-48 mb-8 opacity-90" />

      <h1 className="text-5xl font-semibold text-gray-800 font-serif mb-1 tracking-wide">
        Renova
      </h1>
      <p className="text-sm text-gray-500 mb-10 font-light italic">
        Tu espacio para volver a ti
      </p>

      {yesterdayEmoji && (
        <p className="text-sm text-gray-600 mb-4">
          Ayer te sentiste: <span className="text-lg">{yesterdayEmoji}</span>
        </p>
      )}

      <p className="text-lg text-gray-700 mb-3">¿Cómo te sientes hoy?</p>
      <EmojiSelector onSelect={setSelectedEmoji} />

      <SuggestedGoal emoji={selectedEmoji} />

      {selectedEmoji && (
        <button
          onClick={() => navigate('/dashboard')}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow"
        >
          Empezar mi día
        </button>
      )}

      <MotivationalQuote />
    </div>
  );
}

export default Home;