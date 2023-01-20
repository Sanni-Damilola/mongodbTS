import mongoose from "mongoose";

interface car {
  manufacturer: string;
  model: string;
  color: string;
  chasisNO: number;
  selfDriving: boolean;
  transmission: boolean;
}

interface Icar extends car, mongoose.Document {}

const Shcema = new mongoose.Schema(
  {
    manufacturer: String,
    model: String,
    color: String,
    chasisNO: Number,
    selfDriving: Boolean,
    transmission: Boolean,
  },
  { timestamps: true }
);

export default mongoose.model<Icar>("Userscar", Shcema);
