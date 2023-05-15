import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderSummary = ({ orderId }) => {
  const [orderDetails, setOrderDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const fetchOrderDetails = async () => {
    try {
      setLoading(true);
      const response = await getUserOrderById(orderId);
      setOrderDetails(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getUserOrderById = async (id) => {
    const API_URL = '"http://localhost:8080"'; 
    return axios.get(`${API_URL}/get/orderInvoice/${id}`);
  };

  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('Order Placed');
  };

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-header fs-3 text-center'>Order Summary</div>
            <h2 className='text-success'>{message}</h2>
          </div>
          <div className='card-body'>
            <div>
              
              <h4>Order ID: {orderDetails.id}</h4>
              <h4>username: {orderDetails.username}</h4>
              <h4>date: {orderDetails.date}</h4>
              <h4>address: {orderDetails.address}</h4>
              <h4>PaidAmount: {orderDetails.paidAmount}</h4>
              <h4>PaymentMode: {orderDetails.paymentMode}</h4>
            </div>
          </div>
          <div>
            <button onClick={handleButtonClick} className='btn btn-success'>checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
