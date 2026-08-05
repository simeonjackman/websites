import { ref, watch } from 'vue'

const STORAGE_KEY = 'gip-os'

function detectOs() {
  if (typeof window === 'undefined') {
    return 'windows'
  }

  const platform = window.navigator?.platform ?? ''
  return /mac/i.test(platform) ? 'mac' : 'windows'
}

function load() {
  if (typeof window === 'undefined') {
    return detectOs()
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'mac' || saved === 'windows') {
      return saved
    }
  } catch {
    return detectOs()
  }

  return detectOs()
}

const os = ref(load())

watch(os, (value) => {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // ignore storage errors
    }
  }
})

export function useOs() {
  function setOs(value) {
    os.value = value === 'mac' ? 'mac' : 'windows'
  }

  return { os, setOs }
}

export function modifierKey() {
  return os.value === 'mac' ? 'cmd' : 'ctrl'
}
