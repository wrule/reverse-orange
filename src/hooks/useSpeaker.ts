import { useAtom } from 'jotai';
import { currentPhrase } from '@/stores/speaker';

const useSpeaker = () => {
  const [phrase, setPhrase] = useAtom(currentPhrase);

  const speak = (newPhrase: string) => {
    try {
      window.speechSynthesis.cancel();
      if (newPhrase) {
        const speech = new SpeechSynthesisUtterance(newPhrase);
        speech.lang = 'en-US';
        speech.volume = 1;
        speech.rate = 0.8;
        speech.pitch = 1;
        setPhrase(newPhrase);
        window.speechSynthesis.speak(speech);
      } else {
        setPhrase('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [phrase, speak] as [string, (newPhrase: string) => void];
};

export default useSpeaker;
