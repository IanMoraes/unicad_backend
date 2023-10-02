
import prisma from "../dependencies/prisma";
import getDeliveriesService from "../services/Delivery/getDeliveriesService";

describe("getDeliveriesService", () => {
  it("should return an array of deliveries when there are deliveries in the database", async () => {
    const deliveries = [
      { id: 1, client: "Delivery 1", origin: 'Goiânia', destination: 'Anápolis' , date: new Date(), created_at: new Date()},
      { id: 2, client: "Delivery 2", origin: 'Goiânia', destination: 'Anápolis', date: new Date(), created_at: new Date() },
    ];
    jest.spyOn(prisma.delivery, "findMany").mockResolvedValueOnce(deliveries);

    const result = await getDeliveriesService();

    expect(result).toEqual(deliveries);
  });

  it("should throw an error when there is an issue with the database connection", async () => {
    jest
      .spyOn(prisma.delivery, "findMany")
      .mockRejectedValueOnce(new Error("Database connection error"));

    await expect(getDeliveriesService()).rejects.toThrow(
      "Database connection error"
    );
  });
});
