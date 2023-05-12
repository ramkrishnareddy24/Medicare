package com.example.medicare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.medicare.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
	public List<Product> findByNameContainingIgnoreCaseOrSaltContainingIgnoreCase(String name, String salt);
	public List<Product> findByCategory(String category);
	public List<Product> findByNameAndIsAvailableTrue(String name);
}
