'use client';

import Question from '@/components/Question';

export default function Train() {
  return (
    <div>
      <Question orange={{ translation: '这是一个测试，所以请你先别在意。', phrase: 'This is a test, please dont care about it' } as any} />
    </div>
  );
}
