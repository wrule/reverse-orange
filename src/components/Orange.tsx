'use client';

import useSpeaker from '@/hooks/useSpeaker';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { IOrange } from '@/common/db';

export default function Orange(props: {
  orange: IOrange,
}) {
  const router = useRouter();
  const [phrase, speak] = useSpeaker();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    speak(props.orange.phrase);
  };

  const handleDoubleClick = () => {
    router.push(`/phrase/${props.orange.id}`);
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
          }, 250);
        }
      }}>
      <div className="flex justify-between items-center ">
        <span className="text-2xl font-bold leading-7">{props.orange.id}.</span>
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
