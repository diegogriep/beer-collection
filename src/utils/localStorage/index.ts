export function getStorageItem(key: string) {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(key)
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: string) {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return

  return window.localStorage.setItem(key, value)
}
