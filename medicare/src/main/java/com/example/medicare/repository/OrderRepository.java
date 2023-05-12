package com.example.medicare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.medicare.entity.UserOrder;

@Repository
public interface OrderRepository extends JpaRepository<UserOrder, Long>{
	public List<UserOrder> findByUsername(String username);
}
