import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://zohaibakhtar336:Victory9006987570@cluster0.oxv8ttc.mongodb.net/FoodieIndia')
        .then(() => console.log("Database Connected Successfully"))
}
