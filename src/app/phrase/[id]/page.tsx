'use client';

import { useEffect, useState } from 'react';
import { getOrange, IOrange } from '@/common/db';
import { useParams } from 'next/navigation';

export default function Phrase() {
  const { id } = useParams();
  const [phrase, setPhrase] = useState<string>('');
  const [translation, setTranslation] = useState<string>('');
  const [orange, setOrange] = useState<IOrange>();

  const fetchOrange = async () => {
    const orange = await getOrange(Number(id));
    if (orange) {
      setOrange(orange);
    }
  };

  useEffect(() => {
    if (id !== 'add') {
      fetchOrange();
    }
  }, []);

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
