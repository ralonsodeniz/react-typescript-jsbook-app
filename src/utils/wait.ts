export const wait = (callback: () => void | undefined, waitTime: number = 250) =>
  setTimeout(callback, waitTime);

export const waitPromise = (waitTime: number = 250) =>
  new Promise(resolve => setTimeout(resolve, waitTime));
