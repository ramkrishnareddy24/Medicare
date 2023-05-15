import axios from "axios";
const API_URL="http://localhost:8080";

class OrderService{
    createOrder(order){
        return axios.post(API_URL+"/user/create/order/"+order.id);
    }

    getAllOrders(){
        return axios.get(API_URL+"/get/all/orders");
    }

    getUserOrderById(id){
        return axios.get(API_URL+"/get/orderInvoice/"+id);
    }
}

export default new OrderService;