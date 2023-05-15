import axios from "axios";
const API_URL="http://localhost:8080";

class ProductService{
    addNewProduct(product){
        return axios.post(API_URL+"/add/product",product);
    }

    updateProduct(product){
        return axios.put(API_URL+"/update/product/"+product.id,product);
    }

    getProductById(id){
        return axios.get(API_URL+"/get-product/"+id);
    }

    getAllProducts(){
        return axios.get(API_URL+"/get/all-products");
    }

    getProductByName(name){
        return axios.get(API_URL+"/get/products/"+name);
    }

    getProductsByCategory(category){
        return axios.get(API_URL+"/get/products-by-category/"+category);
    }

    deleteProduct(id){
        return axios.get(API_URL+"/delete/product/"+id);
    }
}

export default new ProductService;