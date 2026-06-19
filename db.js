const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://Vishnuvaibhav:NDSCeJStkQ6gq36T@cluster0.tb5unue.mongodb.net/?appName=Cluster0");
            console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log(error);
    }
}

connectDB();

const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number
    }
);

const User = mongoose.model("User", userSchema);

async function insert_user() {
    await User.create({ name: "Vishnu", age: 20 });
    console.log("User Created");
}

insert_user();