// lib/localStorage.ts
const STORAGE_KEY = 'multiStepForm';

export const saveToStorage = (data: any) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadFromStorage = () => {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};
