const phrases = [
    "Hoy no tienes que correr, solo avanzar.",
    "Estás aquí, y eso ya es suficiente.",
    "Reempezar también es progreso.",
    "Un paso hoy vale más que mil intenciones.",
    "No es tarde. Es tu momento.",
  ];
  
  export function getRandomPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
  }