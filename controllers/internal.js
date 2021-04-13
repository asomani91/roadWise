const axios = require("axios");
const baseVehicle = "/api/vehicle";

module.exports = {
    addVehicle: vehicle => axios.post(`${baseVehicle}vehicles`, vehicle),
    updateVehicle: vehicle => axios.put(`${baseVehicle}vehicles/${vehicle._id}`, vehicle),
    

}