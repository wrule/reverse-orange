'use client';

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
    <div className="w-full min-h-8 px-2 py-2 border-t" onClick={() => {
      const speech = new SpeechSynthesisUtterance();
      speech.text = "Orange is my cat, is not a fruit, it's my cat's name. Haha that's nice";
      speech.lang = 'en-US';
      speech.volume = 1;
      speech.rate = 0.8;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    }}>
      <div className="flex">
        <span className="text-2xl font-bold">13.</span>
      </div>
      <p className="text-xl font-bold indent-[2em]">Orange is my cat, is not a fruit, it's my cat's name. Haha that's nice</p>
      <p className="italic text-base indent-[2.5em] mt-2">欧润橘是我的猫，它不是一个水果，它是我的猫的名字，哈哈，这很有趣</p>
    </div>
  );
}
