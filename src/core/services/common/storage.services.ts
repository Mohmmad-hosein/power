const setItem = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = <T>(key: string): T | false => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : false;
};

const getItemGeneric = (key: string): string | false => {
  const item = localStorage.getItem(key);
  return item ? item : false;
};

const setItemGeneric = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

const removeItem = (key: string): boolean => {
  if (getItem(key) === false) return false;
  localStorage.removeItem(key);
  return true; // Return true if the item was removed successfully
};

const clearStorage = (): void => {
  localStorage.clear();
};

export {
  setItem,
  getItem,
  removeItem,
  clearStorage,
  setItemGeneric,
  getItemGeneric,
};
