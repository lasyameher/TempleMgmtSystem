const express = require("express")
const app = express()
const mongoose = require("mongoose") 
const UserRoute = require('./routes/userRoutes')
const EventRoute = require('./routes/eventsRoutes')
const DonationRoute = require('./routes/donationRoutes')
const CardRoute = require('./routes/cardRoutes')
const AppointmentRoute = require('./routes/appointmentRoutes')
const NewsletterRoute = require('./routes/newsletterRoutes')


const cors = require('cors')


app.use(cors());

app.use(express.json());

const uri = "mongodb+srv://templemgmt:12345@templemgmt.boi2tjm.mongodb.net/TempleMgmt?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to Database");
    } catch(error) {
        console.error(error);
    }
}
connect();

app.listen(3000, () => {
    console.log("SERVER RUNS PERFECTLY!");
    
});


app.use('/api/users', UserRoute)
app.use('/api/events', EventRoute)
app.use('/api/donations', DonationRoute)
app.use('/api/card', CardRoute)
app.use('/api/appointments', AppointmentRoute)
app.use('/api/newsletter', NewsletterRoute)
