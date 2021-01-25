package com.mopaswebapp.backend.Repositories;

import org.springframework.data.repository.CrudRepository;

import com.mopaswebapp.backend.Entities.Product;

public interface IProductRepository
	extends CrudRepository<Product, Long> {
	
}
