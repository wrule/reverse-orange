import { useAtom } from 'jotai';
import { currentPhrase } from '@/stores/speaker';

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
        speech.onstart = () => setPhrase(newPhrase);
        speech.onend = () => setPhrase('');
        window.speechSynthesis.speak(speech);
      } catch (error) {
        console.error(error);
        setPhrase('');
      }
    } else {
      setPhrase('');
    }
  };

  return [phrase, speak] as [string, (newPhrase: string) => void];
};

export default useSpeaker;
