import express, {Request} from "express";
import createDeliveryController from "../controllers/createDeliveryController";
const createDeliveryRouter = express.Router();

createDeliveryRouter.post("/", (req:Request, res) => {
  if (req.body) {
    return createDeliveryController(req, res);
  } else {
    return res
      .status(400)
      .json({ message: "Delivery wasn't created, check your fields" });
  }
});

export default createDeliveryRouter;
