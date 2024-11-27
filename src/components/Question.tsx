'use client';

import { IOrange } from '@/common/db';

export default function Question({ orange }: { orange: IOrange }) {
  return (
    <div>
      <div className="mx-2 bg-gray-400 h-2 rounded-sm mb-10 mt-32">
        <div className="bg-blue-700 w-[50%] h-full rounded-sm"></div>
      </div>
      <p className="mx-2 text-center font-bold text-[1.6rem] mb-8">{orange.translation}</p>
      <div className="flex justify-center gap-4">
        <button className="inline-block w-32 text-white bg-blue-700 px-3 py-2 rounded-sm">I Can Speak</button>
        <button className="inline-block w-32 text-white bg-red-700 px-3 py-2 rounded-sm">I Can't Speak</button>
      </div>
    </div>
  );
}
