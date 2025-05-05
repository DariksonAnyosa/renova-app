import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SmartGoalAssistant from '../components/SmartGoalAssistant';

function PlanDay() {
  const [tasks, setTasks] = useState({
    practiceTime: '',
    workTime: '',
    goal: '',
    freeTime: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTasks((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (tasks.goal.trim()) {
      localStorage.setItem('renova_dayPlan', JSON.stringify(tasks));
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFBF6] to-[#F1F5F9] flex flex-col items-center px-6 py-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 mb-3">
        🧭 Planifica tu día con claridad
      </h2>
      <p className="text-gray-600 text-base italic mb-10 max-w-md">
        Responde estas preguntas para que Renova te ayude a organizarte y sugerirte acciones con sentido.
      </p>

      <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg text-left space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            🎓 ¿Tienes alguna actividad fija hoy? (Ej: prácticas, clases)
          </label>
          <input
            type="text"
            name="practiceTime"
            value={tasks.practiceTime}
            onChange={handleChange}
            placeholder="Ej: Prácticas de 9AM a 12PM"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#4F7FFF]"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            💼 ¿Trabajas o tienes otra actividad programada?
          </label>
          <input
            type="text"
            name="workTime"
            value={tasks.workTime}
            onChange={handleChange}
            placeholder="Ej: Trabajo desde las 6PM"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#4F7FFF]"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            ✨ ¿Qué te gustaría lograr hoy?
          </label>
          <textarea
            name="goal"
            value={tasks.goal}
            onChange={handleChange}
            rows="3"
            placeholder="Ej: avanzar una app, estudiar inglés, crear una idea..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#4F7FFF]"
          ></textarea>
          <SmartGoalAssistant userGoal={tasks.goal} />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            🕐 ¿Tienes tiempo libre hoy?
          </label>
          <input
            type="text"
            name="freeTime"
            value={tasks.freeTime}
            onChange={handleChange}
            placeholder="Ej: 1PM - 4PM"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#4F7FFF]"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-10 bg-[#4F7FFF] hover:bg-[#3B6CE6] text-white font-semibold py-3 px-10 rounded-full transition-all shadow-lg"
      >
        Ir a mi Dashboard
      </button>
    </div>
  );
}

export default PlanDay;
