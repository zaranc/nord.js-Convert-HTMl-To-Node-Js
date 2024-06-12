
let mongoose = require("mongoose");

let connectDB = () => {

    mongoose.connect("mongodb://localhost:27017").then(() => {
        console.log("Database connected success");
    })

        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDB