import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { NavDropdown } from 'react-bootstrap'
import logo from '../../../src/assects/eshopW.png'
import { BsSearch } from 'react-icons/bs'
import cover from "../../images/compare.svg"
import wishlist from "../../images/wishlist.svg"
import user from "../../images/user.svg"
import cart from "../../images/cart.svg"
import { logout } from '../../actions/userAction'
function NavBaar() {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const dispatch =useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
           <Link to='/'><img src={logo} alt="" /> </Link>
            {/* <Link className='text-white'>Eshop</Link> */}
          </div>
          <div className="col-5">
            <div className="input-group ">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Search Product Here" aria-label="Search Product Here..."
                aria-describedby="basic-addon2" />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className='fs-6' />
              </span>
            </div>
          </div>
          <div className="col-5">
            <div className="header-upper-links d-flex align-item-center justify-content-between ">
              <div>
                <Link className='d-flex align-item-center gap-10 text-white'>
                  <img src={cover} className='navbaar-image' alt="Compare" />
                  <p className='mb-0'>Compare <br /> Products
                  </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-item-center gap-10 text-white' >
                  <img src={wishlist} className='navbaar-image' alt="WishList" />
                  <p className='mb-0'>Favourite <br /> WishList</p>
                </Link>
              </div>


              {userInfo ? (
                            
                
                    <NavDropdown className='d-flex align-item-center gap-10 text-white' title={userInfo.name} id='username'>
                      <div>
                        <Link className='d-flex align-item-center gap-10 ' to='/profile'>
                          <img src={user} className='navbaar-image' alt="" />
                          <p className='mb-0'>profile
                          </p >
                        </Link>
                      </div>
                      <div>
                        <Link onClick={logoutHandler} className='d-flex align-item-center gap-10 ' >
                          <img src={user} className='navbaar-image' alt="" />
                          <p className='mb-0'>Logout
                          </p >
                        </Link>
                      </div>
                    </NavDropdown>
                  
                


              ) : <div>
                <Link className='d-flex align-item-center gap-10 text-white' to='/login'>
                  <img src={user} className='navbaar-image' alt="" />
                  <p className='mb-0'>Log in <br /> My Account
                  </p >
                </Link>
              </div>}


              <div>
                <Link className='d-flex align-item-center gap-10 text-white' to={'/cart'}>
                  <img src={cart} className='navbaar-image' alt="" />
                  <div className="d-flex flex-column gap-10">
                   
                    
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBaar