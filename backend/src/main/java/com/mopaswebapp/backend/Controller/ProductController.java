package com.mopaswebapp.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mopaswebapp.backend.Entities.Product;
import com.mopaswebapp.backend.Services.ProductService;

/*
 * Cross-origin resource sharing (CORS) is a W3C specification implemented by most browsers 
 * that allows you to specify in a flexible way
 *  what kind of cross domain requests are authorized, 
 * instead of using some less secured and less powerful hacks like IFrame or JSONP.
 */
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	
	ProductService _productService;
	
	@Autowired
	public ProductController(ProductService productService) {
		this._productService = productService;
	}

	@GetMapping("/{id}")
	public Product getProductById(@PathVariable long id) {
		Product pro = _productService.findProductById(id);

		return pro;
	}
	
	@GetMapping("/get")
	public Product getProductByIdQuery(@RequestParam( value="id") long id) {
		Product pro = _productService.findProductById(id);
		return pro;
	}
	
	@GetMapping("/")
	public List<Product> getAllProduct(){
		
		return _productService.findAllProduct();
		
	}
	
	@PostMapping("/")
	public Product addProduct(@RequestBody Product product) {
		return _productService.addProduct(product);
	}

	@PutMapping("/{id}")
	public Product updateProduct(@RequestBody Product product,@PathVariable long id) {
		return _productService.updateProduct(product, id);
	}
	
	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable long id) {
		_productService.deleteProduct(id);
	}
	
}
