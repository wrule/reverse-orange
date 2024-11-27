'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Orange from '@/components/Orange';
import { getAllOranges, IOrange } from '@/common/db';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [oranges, setOranges] = useState<IOrange[]>([]);

  const fetchAllOranges = async () => {
    setLoading(true);
    try {
      setOranges(await getAllOranges());
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchAllOranges();
  }, []);

  return (
    <div>
      <div className="px-2 flex items-center gap-4 h-12">
        <Link href="/train" className="text-2xl font-bold text-blue-700 underline">Train</Link>
        <Link href="/phrase/add" className="text-2xl font-bold text-blue-700 underline">Add</Link>
        <Link href="/phrase/add" className="text-2xl font-bold text-blue-700 underline">Import</Link>
        <Link href="/phrase/add" className="text-2xl font-bold text-blue-700 underline">Export</Link>
      </div>
      <div>
        {
          loading ?
          <div className="w-4 h-4 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div> :
          <ul>
            {oranges.map((orange, index) => <li key={`orange-${index}`}>
              <Orange orange={orange} />
            </li>)}
          </ul>
        }
      </div>
    </div>
  );
}
