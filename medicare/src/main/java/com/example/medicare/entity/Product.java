package com.example.medicare.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="products")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long pid;

	private String name;

	private String brand;

	private String category;

	private String description;

	private String salt;

	private int totalAvailable;

	private Double price;

	private boolean isAvailable;

	public Product() {
		super();
	}

	public Product(Long pid, String name, String brand, String category, String description, String salt,
			int totalAvailable, Double price, boolean isAvailable) {
		super();
		this.pid = pid;
		this.name = name;
		this.brand = brand;
		this.category = category;
		this.description = description;
		this.salt = salt;
		this.totalAvailable = totalAvailable;
		this.price = price;
		this.isAvailable = isAvailable;
	}

	public Long getPid() {
		return pid;
	}

	public void setPid(Long pid) {
		this.pid = pid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSalt() {
		return salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}

	public int getTotalAvailable() {
		return totalAvailable;
	}

	public void setTotalAvailable(int totalAvailable) {
		this.totalAvailable = totalAvailable;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public boolean isAvailable() {
		return isAvailable;
	}

	public void setAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}

}
