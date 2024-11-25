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
          {Array(100).fill(0).map((_, index) => <li key={`orange-${index}`}>
            <Orange index="2" />
          </li>)}
        </ul>
      </div>
    </div>
  );
}
