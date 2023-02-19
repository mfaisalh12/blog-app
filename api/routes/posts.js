import express from "express";
import { addPost, getPostById, getPosts } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);

export default router;
