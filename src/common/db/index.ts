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
function orangeKey(id: string) {
  return `$orange-${id}`;
}

export
function getOrange(id: string) {
  return localForage.getItem<IOrange>(orangeKey(id));
}

export
function addOrange(id: string, orange: IOrange) {
  return localForage.setItem<IOrange>(orangeKey(id), orange);
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
function queryAllOranges(keyword: string) {

}
