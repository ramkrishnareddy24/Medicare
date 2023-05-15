import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import deleteProduct from '../../service/product.service';
import productService from '../../service/product.service';
import SearchButton from './Search';
import Category from './Category';

const AdminHome = () => {
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

  const navigate = useNavigate();

  const handleRedirect = () => {
   navigate('/orders');
  };

  return (
    <div className='container'>
      <SearchButton/>
      <button className='btn btn-success m-3' onClick={handleRedirect}>Go to Orders</button>
      <Category/>
      <div>
        <h2>Admin</h2>
      </div>
      <div className='container m-3'>
        <Link
          to='addProduct'
          class='btn btn-success'
          aria-current='page'
          href='#'>
          Add Product
        </Link>
      </div>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header fs-3 text-center'>
                Medicines
                {msg && <p className='fs-4 text-center text-success'>{msg}</p>}
              </div>
              <div className='card-body'>
                <table class='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Name</th>
                      <th scope='col'>Category</th>
                      <th scope='col'>Description</th>
                      <th scope='col'>Salt</th>
                      <th scope='col'>TotalAvailable</th>
                      <th scope='col'>Price</th>
                      <th scope='col'>Update</th>
                      <th scope='col'>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p) => (
                      <tr>
                        <td>{p.name}</td>
                        <td>{p.category}</td>
                        <td>{p.description}</td>
                        <td>{p.salt}</td>
                        <td>{p.totalAvailable}</td>
                        <td>{p.price}</td>
                        <td>
                          <Link to={'updateProduct/'+p.id} className='btn btn-small btn-primary'>
                            {' '}
                            Update
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className='btn btn-small btn-danger'>
                            
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
