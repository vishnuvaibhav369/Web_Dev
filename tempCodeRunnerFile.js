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