import express from "express";
import { vendorVerify } from "../middlewares/vendorVerify.middileware";
import { upload } from "../middlewares/multer.middleware";
import { uploadImageController } from "../controllers/upload/uploadImage.controller";
import { createMenuItemController } from "../controllers/menu/createMenuItem.controller";
import { updateMenuItemController } from "../controllers/menu/updateMenuItem.controller";
import { deleteMenuItemController } from "../controllers/menu/deleteMenuItem.controller";
import { getMenuListController } from "../controllers/menu/getMenuList.controller";
import { changeFoodActive } from "../controllers/menu/changeFoodActive.controller";
import { menuApisHandle } from "../middlewares/menuApis.middleware";

export const menuRouter = express.Router();

// GET MENU
menuRouter.get("/", vendorVerify, getMenuListController);

// DELETE MENU
menuRouter.delete(
  "/delete-menu/:menuId",
  vendorVerify,
  menuApisHandle,
  deleteMenuItemController
);

// CREATE MENU
menuRouter.post(
  "/create-menu",
  vendorVerify,
  menuApisHandle,
  createMenuItemController
);

// UPDATE MENU
menuRouter.put(
  "/update-menu",
  vendorVerify,
  menuApisHandle,
  updateMenuItemController
);

// ACTIVE MENU
menuRouter.put("/active", vendorVerify, changeFoodActive);

// UPLOAD IMAGE
menuRouter.post(
  "/upload-image",
  vendorVerify,
  menuApisHandle,
  upload.fields([{ name: "image" }]),
  uploadImageController
);
