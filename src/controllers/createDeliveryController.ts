import { Response, Request } from "express-serve-static-core";
import createDeliveryService from "../services/Delivery/createDeliveryService";

const sendFilesController = async (
  req: Request,
  res: Response<any, Record<string, any>, number>
) => {
  const { client, origin, destination, date } = req.body;

  const delivery = {
    client,
    origin,
    destination,
    date,
  };

  try {
    if (delivery) {
      const createdDelivery = await createDeliveryService(delivery);
      return res.status(200).json({ data: createdDelivery });
    }
  } catch (error) {
    console.error("Error creating delivery:", error);
    return res
      .status(400)
      .json({ message: "An error has ocurred, check your fields" });
  }
};

export default sendFilesController;
