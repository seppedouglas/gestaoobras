import { useState } from "react";

export default function useLocalStorage<T extends { id: number }>(
  key: string,
  initialValue: T[]
) {
  const [storedValue, setStoredValue] = useState<T[]>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const save = (value: T[]) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const addItem = (item: T) => {
    const newItem = {
      ...item,
      id: storedValue.length,
    } as T;
    const update = [...storedValue, newItem];
    save(update);
  };

  const removeItemById = (id: number) => {
    const update = storedValue.filter((item) => item.id !== id);
    save(update);
  };

  const clear = () => {
    save([]);
  };
  const updateItemById = (id: number, changes: Partial<T>) => {
    setStoredValue((prev) => {
      const update = prev.map((i) =>
        (i as any).id === id ? { ...i, ...changes } : i
      );
      localStorage.setItem(key, JSON.stringify(update));
      return update;
    });
  };
  return {
    value: storedValue,
    setValue: save,
    addItem,
    removeItemById,
    updateItemById,
    clear,
  };
}
