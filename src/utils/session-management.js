export const SessionManagement = {
  set(key, value, time) {
    const now = new Date()

    localStorage.setItem(
      key,
      JSON.stringify({
        value,
        expiry: now.getTime() + time * 60000,
      })
    )
  },

  get(key) {
    const itemStr = localStorage.getItem(key)

    if (!itemStr) return null

    const item = JSON.parse(itemStr)
    const now = new Date()

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key)
      return null
    }
    return item.value
  },

  remove(key) {
    localStorage.removeItem(key)
  },
}
