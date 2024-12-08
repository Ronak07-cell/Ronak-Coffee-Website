const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://rahaja368:<db_password>@ronak.1hn4v.mongodb.net/?retryWrites=true&w=majority&appName=ronak';
const client = new MongoClient(url);

async function connectMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!");
        const db = client.db('mydatabase'); // Replace 'mydatabase' with your database name
    } catch (err) {
        console.error("Connection error:", err);
    } finally {
        await client.close();
    }
}

connectMongoDB();
