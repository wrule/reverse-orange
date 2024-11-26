'use client';

import { getAllOranges, IOrange } from '@/common/db';
import Orange from '@/components/Orange';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [oranges, setOranges] = useState<IOrange[]>([]);

  const fetchAllOranges = async () => {
    setOranges(await getAllOranges());
  }

  useEffect(() => {
    fetchAllOranges();
  }, []);

  return (
    <div>
      <div className="flex gap-2">
        <Button>导出</Button>
        <Button>导入</Button>
        <button onClick={() => {
          router.push(`/train`);
        }}>训练</button>
        <button onClick={() => {
          router.push(`/phrase/add`);
        }}>
          新增
        </button>
      </div>
      <div>
        <ul>
          {oranges.map((orange, index) => <li key={`orange-${index}`}>
            <Orange orange={orange} />
          </li>)}
        </ul>
      </div>
    </div>
  );
}
