import { useEffect, useState } from 'react';
import { getRandomPhrase } from '../utils/motivationalPhrases';

function MotivationalQuote() {
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    setPhrase(getRandomPhrase());
  }, []);

  return (
    <p className="text-xs italic text-gray-500 mt-8 text-center max-w-sm">{`"${phrase}"`}</p>
  );
}

export default MotivationalQuote;