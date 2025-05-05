import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      localStorage.setItem('renova_name', name.trim());
      navigate('/plan');
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFBF6] flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2F2F2F] mb-4">
        Bienvenido a <span className="text-[#34A853]">Renova 🌱</span>
      </h1>

      <p className="text-[#4B5563] text-base md:text-lg font-light italic mb-10">
        Tu espacio para comenzar de nuevo, con intención.
      </p>

      <input
        type="text"
        placeholder="¿Cómo quieres que te llame?"
        className="w-full max-w-xs px-5 py-3 text-center text-[#2F2F2F] bg-white border border-[#D1D5DB] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4F7FFF] mb-6"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={handleStart}
        className="bg-[#4F7FFF] hover:bg-[#3B6CE6] text-white text-base font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-md"
      >
        Empezar
      </button>

      <p className="mt-10 text-sm text-[#9CA3AF] italic">
        “Cada día es una nueva oportunidad para ti.”
      </p>
    </div>
  );
}

export default Login;