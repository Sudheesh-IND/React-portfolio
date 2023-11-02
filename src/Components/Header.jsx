import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';

  import './Portfolio.css'

function Header() {
    const [showBasic, setShowBasic] = useState(false);
    

  return (
    <div>
       <MDBNavbar style={{backgroundColor:'#f9b234',height:'60px'}} expand='lg' className='shadow-0 fixed-top' light bgColor='none'>
      <MDBContainer fluid>
       

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink style={{fontWeight:'bold',color:'black'}}  className='head-comp'   href='#homeportion'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink style={{fontWeight:'bold',color:'black'}}  className='head-comp' href='#aboutme'>About</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink style={{fontWeight:'bold',color:'black'}}  className='head-comp' href='#career'>Career</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarLink style={{fontWeight:'bold',color:'black'}}  className='head-comp' href='#skills'>Skills</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarLink style={{fontWeight:'bold',color:'black'}}  className='head-comp' href='#services'>Services</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarLink style={{fontWeight:'bold',color:'black'}}  className='head-comp' href='#projects'>Projects</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarLink style={{fontWeight:'bold',color:'black'}}  className='head-comp' href='#contactme'>Contact</MDBNavbarLink>
            </MDBNavbarItem>

            
          </MDBNavbarNav>
          <MDBNavbarNav className='ms-auto'>
          </MDBNavbarNav>

          {/* <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form> */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header