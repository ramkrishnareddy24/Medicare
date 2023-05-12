package com.example.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.medicare.entity.ProductQuantity;

@Repository
public interface ProductQuantityRepository extends JpaRepository<ProductQuantity, Long>{

}
