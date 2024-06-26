import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
import connectToMongo from "./config/db.js";
import userRoutes from "./routes/user.js";
import  'dotenv/config';


const app = express();
const PORT = process.env.PORT;

// Connect to MongoDB
connectToMongo();

const jwtSecret = process.env.SECRET;


// Apply middleware
// app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.json());
// app.use(cors());

// Apply middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));


app.get("/", (req, res) => {
  res.send("API is running");
});

// Routes
app.use("/api/v1", userRoutes);


app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`); 
});

