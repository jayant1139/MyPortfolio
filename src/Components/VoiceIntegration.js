
const { speechSynthesis } = window;

export const speakText = () => {
  const title = 'I am Jayant Singh. A web developer';
  const description = 'I am a Front-end developer focused on crafting clean and user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.';
  const about = 'To know more about me Click on the more about me button';

  const utterance = new SpeechSynthesisUtterance(`${title}\n ${description} \n ${about}`);
  // utterance.voice=voices[2];
  speechSynthesis.speak(utterance);

};

