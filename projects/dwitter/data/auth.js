let users = [
  {
    id: "1",
    username: "bob",
    password: "$2b$10$euwuNWCvIbMyE5ZosiM4B.xVSV5AImphwOnsSQCK0ybN8LvFsgaKO",
    email: "bob@gmail.com",
    url: "",
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}
