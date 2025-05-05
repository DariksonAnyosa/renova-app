import emojiGoalMap from '../utils/emojiGoals';

function SuggestedGoal({ emoji }) {
  if (!emoji || !emojiGoalMap[emoji]) return null;

  return (
    <div className="mt-6">
      <p className="text-sm text-gray-600 mb-1">Objetivo sugerido para hoy:</p>
      <p className="text-lg font-medium text-gray-800">“{emojiGoalMap[emoji]}”</p>
    </div>
  );
}

export default SuggestedGoal;