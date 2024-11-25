'use client';

import useSpeaker from '@/hooks/useSpeaker';
import { useRef } from 'react';

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
  const [phrase, speak] = useSpeaker();
  const timer = useRef<any>(null);

  const handleClick = () => {
    speak(props.orange.phrase);
  };

  const handleDoubleClick = () => {
    alert(1234);
  };

  return (
    <div
      className={`w-full min-h-8 px-2 py-2 border-t transition-colors duration-300 ${phrase === props.orange.phrase ? 'bg-blue-500' : ''}`}
      onClick={() => {
        if (timer.current) {
          clearTimeout(timer.current);
          timer.current = null;
          handleDoubleClick();
        } else {
          timer.current = setTimeout(() => {
            handleClick();
          }, 300);
        }
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
