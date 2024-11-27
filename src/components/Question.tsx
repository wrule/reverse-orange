'use client';

import { IOrange } from '@/common/db';
import { useEffect, useState } from 'react';

export default function Question({ orange }: { orange: IOrange }) {
  const [isFull, setIsFull] = useState<boolean>(true);
  const [showPhrase, setShowPhrase] = useState<boolean>(false);

  const handleFinish = async (pass: boolean) => {
    setShowPhrase(true);
  };

  useEffect(() => {
    setIsFull(false);
  }, []);

  return (
    <div>
      <div className="mx-4 bg-gray-300 h-2 rounded-sm mb-10 mt-24">
        <div
          className="bg-blue-700 h-full rounded-sm transition-[width]"
          style={{
            width: isFull ? '100%' : '0%',
            transition: 'width 60s',
          }}>
        </div>
      </div>
      <p className="mx-2 text-center font-bold text-[1.6rem] mb-8">{orange.translation}</p>
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => handleFinish(true)} className="inline-block w-32 text-white bg-blue-700 px-3 py-2 rounded-sm">I Can Speak</button>
        <button onClick={() => handleFinish(false)} className="inline-block w-32 text-white bg-red-700 px-3 py-2 rounded-sm">I Can't Speak</button>
      </div>
      {showPhrase && <p className="mx-3 text-gray-400 text-center font-bold text-[1.6rem] mb-8">{orange.phrase}</p>}
    </div>
  );
}
