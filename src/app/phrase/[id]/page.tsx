'use client';

import { useEffect } from 'react';
import { getOrange } from '@/common/db';

export default function Phrase() {
  return (
    <div className="h-[100dvh] flex flex-col">
      <div className="flex-1">
        <textarea className="w-full h-full resize-none outline-none p-4 bg-transparent" />
      </div>
      <div className="flex-1 border-t">
        <textarea className="w-full h-full resize-none outline-none p-4 bg-transparent" />
      </div>
      <div className="h-14 bg-blue-700 text-white text-2xl flex items-center justify-center cursor-pointer">Save</div>
    </div>
  );
}
