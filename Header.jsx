import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";



function Header() {
  return (
    <>
      <section className='py-2 bg'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">

            </div>
            <div className="col-lg-8">
              <ul className="d-flex gap-4 a">
                <li>Save More on App
                </li>
                <li>Become a Seller </li>
                <li>Help & Support</li>
                <li>Login </li>
                <li>Sign Up </li>
                <li>भाषा परिवर्तन</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 text-end">
            <img className='w' src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="" />
          </div>
          <div className="col-lg-6">
            
            <form classname="d-flex" role="Search">
              <input classname="form-control me-2" type="Search" placeholder="Search in Daraz" aria-label="Search" />
              <button classname="btn btn-outline-success" type="submit"><IoSearchOutline />
              </button> </form>
              
          </div>
          <div className="col-lg-3">
            <h1 className='text-white d-flex'><CiShoppingCart /></h1>
          </div>
        </div>
      </section>

      <section className='py-2'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <img className='w-100' src="https://img.lazcdn.com/us/domino/64d4bfc0-7da8-490a-859d-425446ab2b20_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" />
            </div>
            <div className="col-lg-3 bg2">
              <img className='w1' src="https://img.lazcdn.com/us/domino/1ee015d6a5c62fd0339c88c657c1c183.jpg_120x120q80.jpg_.webp" alt="" />

              <div className='aa'>
                <p>Download App</p>
                <button className='bg1 text-center'><CiDeliveryTruck /></button> Free Delivery
              </div>
              <div className='aa py-2'>
                <button className='bg1'><FaBusinessTime />
                </button> Limited Time
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <img className='w' src="https://img.drz.lazcdn.com/g/tps/imgextra/i2/O1CN01da6D0K1Khogk708ZP_!!6000000001196-0-tps-150-150.jpg_360x360q80.jpg_.webp" alt="" />
                </div>
                <div className="col-lg-6 text-start">
                  <div className='text-start py-4'>
                    <button className='aaa'><FaApple /> Apple Store
                    </button>
                    <button className='aaa'><FaGooglePlay /> Google Play
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
