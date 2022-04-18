import mongoose from "mongoose";
try {
  const DB = process.env.DBURL

  mongoose.connect(DB!);
  console.info("DB conectado!");
} catch (err) {
  console.log(err);
}

export default mongoose;
