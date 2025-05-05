function EmojiSelector({ onSelect }) {
  const emojis = ['😞', '😐', '🙂', '😁'];

  const handleClick = (emoji) => {
    // Guarda el emoji en localStorage
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('renova_emoji', JSON.stringify({ date: today, emoji }));
    onSelect(emoji);
  };

  return (
    <div className="flex gap-4 text-3xl mt-4">
      {emojis.map((emoji, index) => (
        <button key={index} onClick={() => handleClick(emoji)} className="hover:scale-110 transition">
          {emoji}
        </button>
      ))}
    </div>
  );
}

export default EmojiSelector;