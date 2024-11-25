import { currentPhrase } from '@/stores/speaker';
import { useAtom } from 'jotai';

const useSpeaker = () => {
  const [phrase, setPhrase] = useAtom(currentPhrase);

  const speak = (newPhrase: string) => {
    window.speechSynthesis.cancel();
    if (newPhrase) {
      try {
        const speech = new SpeechSynthesisUtterance(newPhrase);
        speech.lang = 'en-US';
        speech.volume = 1;
        speech.rate = 0.8;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
      } catch (error) {
        console.error(error);
      }
    }
  };
};
