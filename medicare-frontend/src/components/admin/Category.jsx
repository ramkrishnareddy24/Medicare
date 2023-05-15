import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await getProductsByCategory(category);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getProductsByCategory = async (category) => {
    const API_URL = 'http://localhost:8080'; // Replace with your actual API URL
    return axios.get(`${API_URL}/get/products-by-category/${category}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="category-select">Select a category:</label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" className=''>All</option>
          
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <button className='btn btn-warning m-2' onClick={handleSearch} disabled={loading}>
        Show by Category
      </button>

      {loading && <p>Loading...</p>}

      {products.length === 0 && !loading && <p></p>}

      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Category;
