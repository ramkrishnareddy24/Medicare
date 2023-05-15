import React, { useEffect } from 'react'
import { useState } from 'react';
import productService from '../../service/product.service';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const [product, setProduct] = useState({
    id:'',
    name: '',
    category: '',
    description: '',
    salt: '',
    totalAvailable: '',
    price: '',
  });

  const navigate = useNavigate();

  useEffect(()=>{
    productService.getProductById(id).then((res)=>{
      setProduct(res.data);
    }).catch((error)=>{
      console.log(error);
    });
  },[]);

  const {id} = useParams();


  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const [msg,setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    productService.updateProduct(product).then((res)=>{
        console.log("Product Added Successfully");
        setMsg("Product Updated Successfully");
       navigate("/admin")
    }).catch((error)=>{
        console.log(error);
    })
  }

  return (
    <div className='container mt-3 mb-3'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header'>Update Product</div>
            <p className='fs-4 text-center text-success'>Product Updated Successfully</p>

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
                  <button className='btn btn-primary col-md-12'>Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct