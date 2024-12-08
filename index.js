const mongoDb = require ('mongodb');
mongoose.connect("mongodb+srv://rahaja368:<ronak@88290>@clustered.c9vxb.mongodb.net/node-api?retryWrites=true&w=majority&appName=Clustered")
.then(() => {
    console.log("coonected to db");
})
.catch(() => {
    console.log("failed");
})