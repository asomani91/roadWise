const mongoose = require("mongoose");
const { Schema, model } = mongoose.Schema;

const AddMaintenanceSchema = new Schema({
    type: {
        type: String,
        validate: {
            validator: (v) => v === "Actual" || v === "Planned",
            message: "Type must be actual or planned"
        },
        required: true
    },

    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },
    
    model: {
        type: String,
        required: true
    },

    make: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    mileage: {
        type: Number,
        required: true
    },

    userVehicle: {
        type: Schema.Types.ObjectId,
        ref: "UserVehicle"
    }

});

const AddMaintenance = model("AddMaintenance", AddMaintenanceSchema);

module.exports + AddMaintenance;