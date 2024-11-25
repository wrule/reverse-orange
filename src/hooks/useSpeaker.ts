import { useAtom } from 'jotai';
import { currentPhrase } from '@/stores/speaker';

const useSpeaker = () => {
  const [phrase, setPhrase] = useAtom(currentPhrase);

  const speak = (newPhrase: string) => {
    if (newPhrase) {
      try {
        window.speechSynthesis.cancel();
        const speech = new SpeechSynthesisUtterance(newPhrase);
        speech.lang = 'en-US';
        speech.volume = 1;
        speech.rate = 0.8;
        speech.pitch = 1;
        speech.onend = () => setPhrase('');
        setPhrase(newPhrase);
        window.speechSynthesis.speak(speech);
      } catch (error) {
        console.error(error);
      }
    } else {
      setPhrase('');
    }
  };

  return [phrase, speak] as [string, (newPhrase: string) => void];
};

export default useSpeaker;
