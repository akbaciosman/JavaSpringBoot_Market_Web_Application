package com.mopaswebapp.backend.Services;

import java.util.LinkedList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mopaswebapp.backend.Repositories.IProductRepository;
import com.mopaswebapp.backend.Entities.Product;

@Service
public class ProductService {

	IProductRepository _productRepository ;
	
	@Autowired
	public ProductService(IProductRepository productRepository) {
		this._productRepository = productRepository;
	}

	public List<Product> findAllProduct() {
		List<Product> products = new LinkedList<Product>();
		_productRepository.findAll().forEach(x -> products.add(x));
		System.out.println(products.get(0));
		return products;
	}
	
	public Product findProductById(long id) {
		 Product _product = _productRepository.findById(id).get();
		return _product;
		
	}
	
	public Product addProduct(Product product) {
		return _productRepository.save(product);
		
	}
	
	public Product updateProduct(Product product , long id) {
		_productRepository.findById(id).map( x -> {
				x.setName(product.getName());
				x.setBrand(product.getBrand());
				x.setPrice(product.getPrice());
				x.setCategory(product.getCategory());
				x.setImage(product.getImage());
				x.setNum_reviews(product.getNum_reviews());
				x.setRating(product.getRating());
				x.setId(id);
				return _productRepository.save(x);
				
				})
		.orElseGet(() -> {
			return _productRepository.save(product);
		});
		
		return null;
	}
	
	public void deleteProduct(long id) {
		
		_productRepository.deleteById(id);		
		
	}
}
