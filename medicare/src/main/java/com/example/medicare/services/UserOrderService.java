package com.example.medicare.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.medicare.entity.ProductQuantity;
import com.example.medicare.entity.UserOrder;
import com.example.medicare.repository.OrderRepository;
import com.example.medicare.repository.ProductQuantityRepository;

@Service
public class UserOrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private ProductQuantityRepository productQuantityRepository;
	
	public UserOrder saveOrder(UserOrder userOrder) {
		UserOrder orderSaved = this.orderRepository.save(userOrder);
		return orderSaved;
	}
	public void saveProductQuantity(ProductQuantity productQuantity) {
		this.productQuantityRepository.save(productQuantity);
	}
	
	public List<UserOrder> getAll(){
		return this.orderRepository.findAll();
	}
	
	public List<UserOrder> getUserOrders(String username){
		List<UserOrder> orders = this.orderRepository.findByUsername(username);
		return orders;
	}
	
	public UserOrder getOrderById(Long oid) {
		UserOrder order = this.orderRepository.findById(oid).get();
		return order;
	}
	
	public void deleteOrder(Long oid) {
		this.orderRepository.deleteById(oid);
	}
}
