// src/api/mock-server.js

// Имитация базы данных пользователей
let users = [
  // для примера добавим одного пользователя
  {
    username: "TestUser",
    email: "test@example.com",
    password: "password123",
  },
];

// Функция для имитации задержки ответа сервера
const networkDelay = () =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 800 + 200));

// API для работы с пользователями
export const userAPI = {
  // Проверка, существует ли пользователь по email
  async checkUser(email) {
    await networkDelay();
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (user) {
      console.log(`[Server] User check: Found user with email ${email}.`);
      return { exists: true, user };
    }
    console.log(`[Server] User check: User with email ${email} not found.`);
    return { exists: false };
  },

  // Регистрация нового пользователя
  async registerUser({ username, email, password }) {
    await networkDelay();
    const userExists = users.some(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (userExists) {
      console.error(
        `[Server] Registration failed: email ${email} already taken.`
      );
      throw new Error("A user with this email already exists.");
    }

    const newUser = { username, email, password }; // В реальном приложении пароль нужно хешировать!
    users.push(newUser);
    console.log("[Server] New user registered:", newUser);
    console.log("[Server] Current user database:", users);
    return newUser;
  },

  // "Отправка" письма
  async sendEmail(email) {
    await networkDelay();
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (!user) {
      console.error(
        `[Server] Email sending failed: User with email ${email} not found.`
      );
      throw new Error("Cannot send email to a non-existent user.");
    }

    // Имитация отправки письма
    console.log("===================================");
    console.log(`TO: ${email}`);
    console.log(`SUBJECT: Hello from Konstruct!`);
    console.log("-----------------------------------");
    console.log(`Dear ${user.username},`);
    console.log("");
    console.log("Hello, World!");
    console.log("");
    console.log("Sincerely,");
    console.log("The Server");
    console.log("===================================");

    return { success: true, message: "Email sent successfully!" };
  },
};
