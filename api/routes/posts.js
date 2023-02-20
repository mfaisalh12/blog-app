import express from "express";
import { addPost, deletePost, getPostById, getPosts } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", addPost);
router.delete("/:id", deletePost);

export default router;
