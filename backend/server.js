const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");
connectDatabase();

cloudinary.config({
  cloud_name: "dkcyuohau",
  api_key: "614852153793615",
  api_secret: "dhlO1YnJnKABnldIn-WmSPj3A7E",
});

app.listen(4001, () => {
  console.log(`Server is running on port ${4001}`);
});
