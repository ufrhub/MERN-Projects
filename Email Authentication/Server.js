// mongodb
// require("./config/db");
const mongoose = require("mongoose");
const app = require("express")();
const port = process.env.PORT || 5000;

// cors
// const cors = require("cors");
// app.use(cors());

app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

const UserRouter = require("./Api/User");

// for accepting post from data
const bodyparser = require("body-parser");
app.use(bodyparser());

app.use("/user", UserRouter);

mongoose.connect("mongodb+srv://UmarFarooque:MyServer2021@cluster0.t3sop.mongodb.net/Authentication?retryWrites=true&w=majority",
    {

        useNewUrlParser: true,

        useUnifiedTopology: true

    }).then(Success => {

        console.log("Connected to MongoDB");


        ///**************** Start The Server ****************///

        app.listen(port, () => {

            console.log(`Server is listening at Port : ${port}`)

        });

    }).catch(Error => {

        console.log("Connection Error" + Error);

    });

// app.listen(port, () => {
//     console.log(`Server is running at port ${port}`);
// });