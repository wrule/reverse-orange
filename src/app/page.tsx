'use client';

import Orange from '@/components/Orange';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

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
          {Array(1000).fill(0).map((_, index) => <li key={`orange-${index}`}>
            <Orange index={index + 1} orange={{
              id: '123',
              phrase: `${index + 1} Hello i'am a chinese front-end developer`,
              translation: '这是一个脏话',
              correctCount: 3,
              incorrectCount: 3,
              createTime: 0,
              lastTrainingTime: 0,
            }} />
          </li>)}
        </ul>
      </div>
    </div>
  );
}
