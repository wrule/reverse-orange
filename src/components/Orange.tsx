
interface IOrange {
  index: number;
  phrase: string;
  translation: string;
  correctCount: number;
  incorrectCount: number;
  createTime: number;
  lastTrainingTime: number;
}

export default function Orange(props: {
  index: number | string,
}) {
  return (
    <div className="w-full min-h-8 px-2 py-1 border-t">
      <div className="flex">
        <span className="text-lg font-bold">13</span>
      </div>
      <p className="font-bold indent-[2em]">Orange is my cat, is not a fruit, it's my cat's name. Haha that's nice</p>
      <p className="italic text-sm indent-[2.3em]">欧润橘是我的猫，它不是一个水果，它是我的猫的名字，哈哈，这很有趣</p>
    </div>
  );
}
