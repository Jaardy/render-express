const app = require("./src/app");

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

init();
