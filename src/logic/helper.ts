export function randint(min: number, max: number): number {
  return Math.floor(rand(min, max))
}

export function rand(min: number, max: number): number {
  return Math.random() * (max - min + 1) + min
}

export function getResponseSync(url: string): string {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  return xhr.responseText;
}

export function delay(milliseconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export async function scheduledTask(milliseconds: number, task: () => never) {
  await delay(milliseconds)
  task()
}

export async function scheduledLoopTask(milliseconds: number, task: () => never) {
  await delay(milliseconds)
  task()
  scheduledLoopTask(milliseconds, task)
}

export function trim(str: string, ch: string) {
  let start = 0
  let end = str.length

  while (start < end && str[start] === ch)
    ++start;

  while (end > start && str[end - 1] === ch)
    --end;

  return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}

export function shuffle(array: Array<any>): any[] {
  let currentIndex = array.length
  const arr = array.slice()

  while (currentIndex > 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}

export function gaussian_shuffle(array: Array<any>): any[] {
  let currentIndex = array.length
  const arr = array.slice()

  while (currentIndex > 0) {
    const randomIndex = Math.floor(gaussian() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}

export function gaussian(): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return gaussian() // resample between 0 and 1
  return num
}

export function gaussian_bm(min, max, skew) {
  let u = 0, v = 0;
  while (u === 0) u = Math.random() //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random()
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)

  num = num / 10.0 + 0.5 // Translate to 0 -> 1
  if (num > 1 || num < 0)
    num = gaussian_bm(min, max, skew) // resample between 0 and 1 if out of range

  else {
    num = Math.pow(num, skew) // Skew
    num *= max - min // Stretch to fill range
    num += min // offset to min
  }
  return num
}

export function checkSubset(parentArray: any[], subsetArray: any[]): boolean {
  return subsetArray.every((e) => {
    return parentArray.includes(e)
  })
}
