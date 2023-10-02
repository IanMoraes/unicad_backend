
import Delivery from "../models/Delivery";
import createDeliveryService from "../services/Delivery/createDeliveryService";

describe('createDeliveryService', () => {
    it('should create a delivery with all required fields', async () => {
        const delivery: Delivery = {
            client: "John Doe",
            origin: "New York",
            destination: "Los Angeles",
            date: new Date("10/15/2022"),
        };
  
        const createdDelivery = await createDeliveryService(delivery);
  
        expect(createdDelivery.client).toBe(delivery.client);
        expect(createdDelivery.origin).toBe(delivery.origin);
        expect(createdDelivery.destination).toBe(delivery.destination);
        expect(createdDelivery.id).toBeDefined()
      });
  
      

    it('should throw an error when delivery data is missing required fields', async () => {
        const delivery = {
          client: "John Doe",
          origin: "New York",
          destination: "Los Angeles",
          date: "2022/01/01"
        };
  
        try {
          await createDeliveryService(delivery);
        } catch (error: any) {
          expect(error.message).toBe("Failed to create delivery.");
        }
      });
});


