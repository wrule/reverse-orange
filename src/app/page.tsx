import Orange from '@/components/Orange';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div>
      <div className="flex gap-2">
        <Button>导出</Button>
        <Button>导入</Button>
        <Button>训练</Button>
        <Button>新增</Button>
      </div>
      <div>
        <ul>
          {Array(1000).fill(0).map((_, index) => <li key={`orange-${index}`}>
            <Orange index={index + 1} orange={{
              id: '123',
              phrase: `${index + 1} Fuck my pussy`,
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
