
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
    <div className="w-full min-h-8 px-1 py-1 border-t">
      Orange is my cat, is not a fruit, it's my cat's name.
    </div>
  );
}
