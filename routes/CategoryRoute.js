import express from "express";
import { requireSignIn,isAdmin } from "../middlewares/authMiddleware.js";
import { categoryControlller, createCategoryController, deleteCategoryCOntroller, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";


const router = express.Router();

//routes

router.post('/createCategory',requireSignIn,isAdmin,createCategoryController);

//update category
router.put("/updateCategory/:id",requireSignIn,isAdmin,updateCategoryController);

//get all category
//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/singleCategory/:slug", singleCategoryController);

//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryCOntroller
  );

export default router;