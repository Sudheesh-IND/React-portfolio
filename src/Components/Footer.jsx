import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
         <MDBFooter className=' text-center text-white' style={{ 'backgroundColor':'#121212'}}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/sudheesh.s.370177?mibextid=ZbWKwL' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://x.com/sudheeshnandu10?t=WgWIxNaw6Donq6QcGqXk2Q&s=08' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/_sudheesh_.s/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/sudheesh-s-b0934b194/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Sudheesh-IND?tab=repositories' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer