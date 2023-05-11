import { Router } from "express";
import { routeLogs } from "../middlewares/routeLogs.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import productsController from "../controllers/products.controller.js";

export const productsRoute = Router();

productsRoute
    .get("/sell", routeLogs, isAuthenticated, productsController.renderSell)

    .post("/sell", routeLogs, isAuthenticated, productsController.postProduct)

    .get("/", routeLogs, productsController.render)

    .get("/buy/:id", routeLogs, isAuthenticated, productsController.getById)

    .get("/delete/:id", routeLogs, isAuthenticated, productsController.deleteById)

    .get("/edit/:id", routeLogs, isAuthenticated, productsController.renderUpdate)

    .post("/edit/:id", routeLogs, isAuthenticated, productsController.updateById)
    // .get("/:id", routeLogs, productsController.getById)

    // .put("/:id", routeLogs, productsController.updateById)

    // .delete("/:id", routeLogs, productsController.deleteById)

