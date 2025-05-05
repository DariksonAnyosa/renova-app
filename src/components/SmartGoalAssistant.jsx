import { useEffect, useState } from 'react';

function SmartGoalAssistant({ userGoal }) {
  const [todaySuggestion, setTodaySuggestion] = useState('');

  useEffect(() => {
    if (!userGoal) return;

    const lower = userGoal.toLowerCase();

    // Simulación de análisis básico por palabras clave (puedes escalar esto después con IA o más reglas)
    if (lower.includes('web') || lower.includes('página')) {
      setTodaySuggestion('Hoy podrías empezar creando el diseño del home.');
    } else if (lower.includes('inglés')) {
      setTodaySuggestion('Hoy repasa vocabulario de 10 palabras.');
    } else if (lower.includes('libro') || lower.includes('leer')) {
      setTodaySuggestion('Lee solo una página hoy.');
    } else if (lower.includes('empresa') || lower.includes('negocio')) {
      setTodaySuggestion('Define qué problema quieres resolver con tu idea.');
    } else {
      setTodaySuggestion('Divídelo en una pequeña acción y empieza por lo más simple.');
    }
  }, [userGoal]);

  if (!userGoal) return null;

  return (
    <div className="mt-6 text-sm text-gray-700">
      <p className="font-medium">🎯 Sugerencia para hoy:</p>
      <p className="italic text-[#4B5563]">"{todaySuggestion}"</p>
    </div>
  );
}

export default SmartGoalAssistant;