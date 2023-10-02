import express from "express";
import getDeliveriesController from "../controllers/getDeliveriesController";

const usersRouter = express.Router();
usersRouter.get("/", async (req, res) => {
    console.log('get Deliveries')
    const data = await getDeliveriesController();
    return res.status(200).json({ data });
});

export default usersRouter;
