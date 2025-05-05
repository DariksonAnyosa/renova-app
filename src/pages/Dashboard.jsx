import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [plan, setPlan] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('renova_dayPlan'));
    if (!saved) {
      navigate('/plan');
    } else {
      setPlan(saved);
      generarHorario(saved);
    }
  }, [navigate]);

  const generarHorario = (plan) => {
    const bloques = [];

    if (plan.practiceTime) bloques.push({ hora: plan.practiceTime, tipo: 'Práctica', color: '#A5B4FC' });
    if (plan.workTime) bloques.push({ hora: plan.workTime, tipo: 'Trabajo', color: '#FCA5A5' });
    if (plan.freeTime) bloques.push({ hora: plan.freeTime, tipo: 'Tiempo libre', color: '#6EE7B7' });

    setTimeSlots(bloques);
  };

  return (
    <div className="min-h-screen bg-[#FEFBF6] py-10 px-6">
      <h2 className="text-4xl font-bold font-serif text-gray-800 text-center mb-6">
        🗓️ Mi Día en Renova
      </h2>

      {plan && (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Tareas de hoy</h3>
            <p className="text-gray-600">{plan.goal}</p>

            <h3 className="mt-6 text-lg font-semibold text-gray-700 mb-2">Recordatorios</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✅ Establece una meta concreta</li>
              <li>📌 Elige una microacción para empezar</li>
              <li>⏳ Usa bloques de 25 min de enfoque</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Calendario del día</h3>
            <ul className="space-y-4">
              {timeSlots.map((slot, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center px-4 py-3 rounded-lg shadow-sm"
                  style={{ backgroundColor: slot.color }}
                >
                  <span className="font-medium text-gray-800">{slot.tipo}</span>
                  <span className="text-gray-700">{slot.hora}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="text-center mt-10">
        <button
          onClick={() => navigate('/plan')}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-6 py-2 rounded-full"
        >
          Editar planificación
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
