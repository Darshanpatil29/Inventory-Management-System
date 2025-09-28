import app from './app.js';
import connectDB from './db/database.js';
import dotenv from 'dotenv';

dotenv.config(
    {
        path:'../env',
    }
);

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
});