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
    </div>
  );
}
