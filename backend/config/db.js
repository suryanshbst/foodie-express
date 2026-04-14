import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("{ dB url }/food-del")
    .then(() => console.log("DB Connected"));
};
