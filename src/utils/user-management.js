const users = [
  {
    username: 'admin',
    password: 'admin',
  },
  {
    username: 'petar',
    password: 'petar',
  },
]

export const userExists = (username, password) => {
  return users.some((x) => x.username === username && x.password === password)
}
