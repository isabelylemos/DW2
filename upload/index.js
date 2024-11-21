import express from "express";
import multer from "multer";

const app = express();

app.use(express.static("public"))
app.set("view engine", "ejs")