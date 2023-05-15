import React, { useState } from 'react';
import axios from 'axios';
import productService from '../../service/product.service';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    description: '',
    salt: '',
    totalAvailable: '',
    price: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const [msg,setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    productService.addNewProduct(product).then((res)=>{
        console.log("Product Added Successfully");
        setMsg("Product Added Successfully");
        setProduct({
            name: '',
            category: '',
            description: '',
            salt: '',
            totalAvailable: '',
            price: '',
        });
    }).catch((error)=>{
        console.log(error);
    })
  }

  return (
    <div className='container mt-3 mb-3'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header'>Add Product</div>
            {
                msg && 
                <p className='fs-4 text-center text-success'>
                    {msg}
                </p>
            }
            <div className='card-body'>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className='mb-3'>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='ProductName'
                    onChange={(e)=>handleChange(e)}
                    value={product.name}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='text'
                    name='category'
                    className='form-control'
                    placeholder='Category'
                    onChange={(e)=>handleChange(e)}
                    value={product.category}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Description'
                    onChange={(e)=>handleChange(e)}
                    value={product.description}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='text'
                    name='salt'
                    className='form-control'
                    placeholder='Salt'
                    onChange={(e)=>handleChange(e)}
                    value={product.salt}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='text'
                    name='totalAvailable'
                    className='form-control'
                    placeholder='TotalAvailable'
                    onChange={(e)=>handleChange(e)}
                    value={product.totalAvailable}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='text'
                    name='price'
                    className='form-control'
                    placeholder='Price'
                    onChange={(e)=>handleChange(e)}
                    value={product.price}
                  />
                </div>
                <div className=''>
                  <button className='btn btn-primary col-md-12'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
