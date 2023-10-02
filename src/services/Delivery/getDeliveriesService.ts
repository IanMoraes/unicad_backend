import prisma from "../../dependencies/prisma";

const getDeliveriesService = async () => {
  const deliveries = await prisma.delivery.findMany();
  return deliveries;
};

export default getDeliveriesService;
