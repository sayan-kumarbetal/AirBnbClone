const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
    filename: String,
    url: {
        type: String,
        default: "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
        set: v => v === "" 
            ? "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D" 
            : v
    }
},

    price: Number,
    location: String,
    country: String,
});


const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;