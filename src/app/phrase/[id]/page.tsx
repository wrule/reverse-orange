'use client';

import { useEffect, useState } from 'react';
import { getOrange, IOrange } from '@/common/db';
import { useParams } from 'next/navigation';

export default function Phrase() {
  const { id } = useParams();
  const [orange, setOrange] = useState<IOrange>({ } as IOrange);

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
      <div className="h-[3.3rem] bg-blue-700 text-white text-xl flex items-center justify-center cursor-pointer">Save</div>
    </div>
  );
}
