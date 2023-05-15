import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import deleteProduct from '../../service/product.service';
import productService from '../../service/product.service';
import SearchButton from '../admin/Search';
import Category from '../admin/Category';

const UserHome = () => {
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


  return (
    <div className='container'>
      <SearchButton/>

      <Category/>
      <div>
        
      </div>
      <div className='container m-3'>
        
      </div>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header fs-3 text-center'>
                <b>Medicines</b>
                {msg && <p className='fs-4 text-center text-success'>{msg}</p>}
              </div>
              <div className='card-body'>
                
                
                    {productList.map((p) => (
                     <div className='row'>
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header fs-3 text-center">
                                    {p.name}
                                </div>
                                <div className='card-body'>
                                    <h5>{p.category}</h5>
                                    <p>{p.description}</p>
                                    <p>{p.salt}</p>
                                    <h4>₹{p.price}</h4>
                                    <h5 className='text-success'>Total Available: {p.totalAvailable}</h5>
                                    <Link to={'checkout'} className='btn btn-primary'>Buy</Link>
                                </div>
                            </div>
                        </div>

                       
                     </div>
                    ))}
                 
       
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
