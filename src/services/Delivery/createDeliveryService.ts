import prisma from "../../dependencies/prisma";
import Delivery from "../../models/Delivery";

const createDeliveryService = async (delivery: Delivery) => {
  if(typeof delivery.date === "string")
    delivery.date = transformDate(delivery.date)

  try {
    const createdDelivery = await prisma.delivery.create({ data: delivery });
    return createdDelivery;
  } catch (error) {
    console.log(error)
    throw new Error("Failed to create delivery.");
  }
};

const transformDate = (string: string) =>{
  const dateParts = string.split("/"); 
  
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1; 
  const year = parseInt(dateParts[2], 10);
  
  return new Date(year, month, day);
}
export default createDeliveryService;
