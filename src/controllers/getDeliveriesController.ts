import getDeliveriesService from "../services/Delivery/getDeliveriesService";

const usersController = async() =>{
    return await getDeliveriesService()
}

export default usersController;