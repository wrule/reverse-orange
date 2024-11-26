'use client';

import { getOrange } from '@/common/db';
import { useEffect } from 'react';

export default function Phrase() {

  const test = async () => {
    // console.log(await setOrange('1', { a: 123 } as any));
    // console.log(await getOrange('12'));
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className="h-[100dvh] flex flex-col">
      <div className="h-1/2">
        <textarea className="w-full h-full resize-none outline-none p-4 bg-transparent" />
      </div>
      <div className="h-1/2 border-t">
        <textarea className="w-full h-full resize-none outline-none p-4 bg-transparent" />
      </div>
    </div>
  );
}
