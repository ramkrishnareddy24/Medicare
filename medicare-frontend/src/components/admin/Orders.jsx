import React, { useState, useEffect } from 'react';
import axios from 'axios';
import orderService from '../../service/order.service';

const Orders = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    orderService
      .getAllOrders()
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return(
    <div>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Orders</div>
                        <div className="card-body">
                            
                               
                                    <table class='table'>
                                        <thead>
                                            <tr>
                                            <th scope='col'>FirstName</th>
                                            <th scope='col'>LastName</th>
                                            <th scope='col'>Address</th>
                                            <th scope='col'>PaidAmount</th>
                                            <th scope='col'>PaymentMode</th>
                                            </tr>
                                            
                                        </thead>
                                        <tbody>
                                        {orderList.map((o)=>(
                                            <tr>
                                                <td>{o.firstName}</td>
                                                <td>{o.lastName}</td>
                                                <td>{o.address}</td>
                                                <td>{o.paidAmount}</td>
                                                <td>{o.paymentMode}</td>
                                            </tr>
                                             ))}
                                              
                                        </tbody>
                                    </table>
                               
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Orders;
