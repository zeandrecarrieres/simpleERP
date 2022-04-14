const mongoose = require("mongoose");
try {
  mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.info("DB conectado!");
} catch (err) {
  console.log(err);
}

module.exports = mongoose;
