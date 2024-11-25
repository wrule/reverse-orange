'use client';

import { useCallback, useState } from "react";

interface IOrange {
  id: string;
  phrase: string;
  translation: string;
  correctCount: number;
  incorrectCount: number;
  createTime: number;
  lastTrainingTime: number;
}

export default function Orange(props: {
  index: number | string,
  orange: IOrange,
}) {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const handleSpeak = useCallback((phrase: string) => {
    window.speechSynthesis.cancel();
    try {
      const speech = new SpeechSynthesisUtterance(phrase);
      speech.lang = 'en-US';
      speech.volume = 1;
      speech.rate = 0.8;
      speech.pitch = 1;
      speech.onstart = () => {
        setIsSpeaking(true);
      };
      speech.onend = () => {
        setIsSpeaking(false);
      };
      speech.onpause = () => {
        setIsSpeaking(false);
      };
      speech.onerror = () => {
        setIsSpeaking(false);
      };
      window.speechSynthesis.speak(speech);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div
      className={`w-full min-h-8 px-2 py-2 border-t ${isSpeaking ? 'bg-blue-600' : ''}`}
      onClick={() => handleSpeak(props.orange.phrase)}
      onDoubleClick={(event) => {
        alert(1);
        event.stopPropagation();
      }}>
      <div className="flex justify-between items-center ">
        <span className="text-2xl font-bold leading-7">{props.index}.</span>
        <span>
          <span className="bg-green-400 px-2 py-[0.1rem] rounded-tl-sm rounded-bl-sm">{props.orange.correctCount}</span>
          <span className="bg-red-400 px-2 py-[0.1rem] rounded-tr-sm rounded-br-sm">{props.orange.incorrectCount}</span>
        </span>
      </div>
      <p className="text-xl font-bold indent-[2em]">{props.orange.phrase}</p>
      <p className="italic text-base indent-[2.5em] mt-2">{props.orange.translation}</p>
    </div>
  );
}
