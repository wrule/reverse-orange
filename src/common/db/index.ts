import localForage from 'localforage';

export
interface IOrange {
  id: string;
  phrase: string;
  translation: string;
  correctCount: number;
  incorrectCount: number;
  createTime: number;
  lastTrainingTime: number;
}

export
const orangeKeyPrefix = '$orange-';

export
async function nextOrangeId() {
  const key = '#orange-next-id';
  const nextId = ((await localForage.getItem<number>(key)) ?? 0) + 1;
  return await localForage.setItem(key, nextId);
}

export
function orangeKey(id: string) {
  return `${orangeKeyPrefix}${id}`;
}

export
function getOrange(id: string) {
  return localForage.getItem<IOrange>(orangeKey(id));
}

export
function addOrange(id: string, orange: {
  phrase: string,
  translation: string,
}) {
  return localForage.setItem<IOrange>(orangeKey(id), {
    id: '',
    phrase: orange.phrase,
    translation: orange.translation,
    correctCount: 0,
    incorrectCount: 0,
    createTime: Date.now(),
    lastTrainingTime: 0,
  });
}

export
function removeOrange(id: string) {
  return localForage.removeItem(orangeKey(id));
}

export
async function updateOrange(id: string, orange: Partial<IOrange>): Promise<IOrange> {
  const oldOrange = await getOrange(id);
  return await localForage.setItem(orangeKey(id), {
    ...oldOrange,
    ...orange,
  } as IOrange);
}

export
async function getAllOranges() {
  const result: IOrange[] = [];
  await localForage.iterate((value, key) => {
    if (key.startsWith(orangeKeyPrefix)) {
      result.push(value as IOrange);
    }
  });
  return result
}
