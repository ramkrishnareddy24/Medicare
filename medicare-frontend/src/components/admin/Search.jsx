import React, { useState } from 'react';
import axios from 'axios';
import productService from '../../service/product.service';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const SearchButton = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    init();
  }, []);

  const init=()=>{
    productService
      .getAllProducts()
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg('Product Deleted Successfully');
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await getProductByName(searchText);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getProductByName = async (name) => {
    const API_URL = "http://localhost:8080"; // Replace with your actual API URL
    return axios.get(`${API_URL}/get/products/${name}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        className='form form-control m-3'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className='btn btn-primary' onClick={handleSearch} disabled={loading}>
        Search
      </button>

      {loading && <p>Loading...</p>}

      {products.length === 0 && !loading && <p></p>}

      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.id}><h4>{product.name}</h4><h5 className='text-success'>-Available</h5></li>
           
          ))}
          
        </ul>
      )}
    </div>
  );
};

export default SearchButton;
