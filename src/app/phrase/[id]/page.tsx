'use client';

import { useEffect, useState } from 'react';
import { addOrange, getAllOranges, getOrange, IOrange, updateOrange } from '@/common/db';
import { useParams, useRouter } from 'next/navigation';

export default function Phrase() {
  const { id } = useParams();
  const router = useRouter();
  const [orange, setOrange] = useState<IOrange>({ } as IOrange);

  const fetchOrange = async () => {
    const orange = await getOrange(Number(id));
    if (orange) {
      setOrange(orange);
    }
  };

  const handleSave = async () => {
    try {
      if (id === 'add') {
        await addOrange(orange);
      } else {
        await updateOrange(Number(id), {
          phrase: orange.phrase,
          translation: orange.translation,
        });
      }
    } catch (error) {
      console.error(error);
    }
    router.push('/');
  };

  useEffect(() => {
    if (id !== 'add') {
      fetchOrange();
    }
  }, []);

  return (
    <div className="h-[100dvh] flex flex-col">
      <div className="flex-1">
        <textarea
          placeholder="Please input english phrase here..."
          value={orange.phrase}
          onChange={(event) => setOrange(() => ({ ...orange, phrase: event.target.value }))}
          className="text-xl w-full h-full resize-none outline-none p-4 bg-transparent"
        />
      </div>
      <div className="flex-1 border-t">
        <textarea
          placeholder="Please input translation here..."
          value={orange.translation}
          onChange={(event) => setOrange(() => ({ ...orange, translation: event.target.value }))}
          className="text-xl w-full h-full resize-none outline-none p-4 bg-transparent"
        />
      </div>
      <div onClick={() => handleSave()} className="h-[3.3rem] bg-blue-700 text-white text-xl flex items-center justify-center cursor-pointer">Save</div>
    </div>
  );
}
