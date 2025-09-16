import express from "express"

// import createTodo from "../controllers/todo.controller.js"
import { createTodo } from "../controllers/todo.controller.js"; // ✅ named import
const router = express.Router();
router.post("/create",createTodo);
    
export default router