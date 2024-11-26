import localForage from 'localforage';

export
interface IOrange {
  id: number;
  phrase: string;
  translation: string;
  correctCount: number;
  incorrectCount: number;
  createTime: number;
  lastTrainingTime?: number;
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
function orangeKey(id: number) {
  return `${orangeKeyPrefix}${id}`;
}

export
function getOrange(id: number) {
  return localForage.getItem<IOrange>(orangeKey(id));
}

export
async function addOrange(orange: {
  phrase: string,
  translation: string,
}) {
  const id = await nextOrangeId();
  return localForage.setItem<IOrange>(orangeKey(id), {
    id,
    phrase: orange.phrase,
    translation: orange.translation,
    correctCount: 0,
    incorrectCount: 0,
    createTime: Date.now(),
  });
}

export
function removeOrange(id: number) {
  return localForage.removeItem(orangeKey(id));
}

export
async function updateOrange(id: number, orange: Partial<Omit<IOrange, 'id' | 'createTime'>>): Promise<IOrange> {
  const oldOrange = await getOrange(id);
  if (!oldOrange) throw new Error('target does not exist!');
  return await localForage.setItem(orangeKey(id), {
    ...oldOrange,
    ...orange,
  });
}

export
async function getAllOranges() {
  const result: IOrange[] = [];
  await localForage.iterate((value, key) => {
    if (key.startsWith(orangeKeyPrefix)) {
      result.push(value as IOrange);
    }
  });
  result.sort((a, b) => b.id - a.id);
  return result;
}
