'use client';

import { useEffect, useState } from 'react';
import { getOrange } from '@/common/db';

export default function Phrase() {
  const [phrase, setPhrase] = useState<string>('1234');
  const [translation, setTranslation] = useState<string>('5678');

  return (
    <div className="h-[100dvh] flex flex-col">
      <div className="flex-1">
        <textarea value={phrase} onChange={(event) => setPhrase(event.target.value)} className="w-full h-full resize-none outline-none p-4 bg-transparent" />
      </div>
      <div className="flex-1 border-t">
        <textarea value={translation} onChange={(event) => setTranslation(event.target.value)} className="w-full h-full resize-none outline-none p-4 bg-transparent" />
      </div>
      <div className="h-14 bg-blue-700 text-white text-2xl flex items-center justify-center cursor-pointer">Save</div>
    </div>
  );
}
