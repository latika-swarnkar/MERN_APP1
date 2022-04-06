const mongoose = require("mongoose");
const { Schema } = mongoose;


const ToDoSchema = new Schema({
    isDel: {
        type: Boolean,
        default: false
    },
    title: String,
    description: String
});




module.exports = ToDoSchema;