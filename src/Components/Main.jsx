import React, { useEffect, useState } from 'react'
import './Portfolio.css'
import useLocalStorage from 'use-local-storage'




function Main() {


    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    const [forWritings, setForwritings] = useLocalStorage('writings' ? 'dark2' : 'light2')
    const [headings, setHeadings] = useLocalStorage('heading' ? 'dark3' : 'light3')
    const [shadow, setShadow] = useLocalStorage('shadow' ? 'dark4' : 'light4')


    const switchTheme = () => {

        const newTheme = theme == 'light' ? 'dark' : 'light'
        const newTheme2 = forWritings == 'light2' ? 'dark2' : 'light2'
        const newTheme3 = headings == 'light3' ? 'dark3' : 'light3'
        const newTheme4 = shadow == 'light4' ? 'dark4' : 'light4'
        setTheme(newTheme)
        setForwritings(newTheme2)
        setHeadings(newTheme3)
        setShadow(newTheme4)


    }

    const isLightTheme = () => {

        const themename1=localStorage.getItem('dark2')
        const themename2=localStorage.getItem('dark3')
        const themename3=localStorage.getItem('dark4')

        if(themename1||themename2||themename3){
            const lightTheme = localStorage.setItem('dark2', 'light2')
            const lightTheme2 = localStorage.setItem('dark3', 'light3')
            const lightTheme3 = localStorage.setItem('dark4', 'light4') 
        }else{
            const lightTheme = localStorage.setItem('dark2', 'light2')
            const lightTheme2 = localStorage.setItem('dark3', 'light3')
            const lightTheme3 = localStorage.setItem('dark4', 'light4')
            switchTheme()
        }

        
    }

    useEffect(() => {
        isLightTheme()

    }, [])


    return (
        <>
            <div>

                <div className="socialmedia">
                    <div className="pics">
                      <a href="https://www.instagram.com/_sudheesh_.s/"><img src="https://th.bing.com/th/id/OIP.JtmXSh_uyZBaTg1eXd-NtgHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></a>
                    </div>
                    <div className="pics">
                    <a href="https://www.linkedin.com/in/sudheesh-s-b0934b194/"><img src="https://th.bing.com/th/id/OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></a>
                    </div>
                    <div className="pics">
                    <a href="https://www.facebook.com/sudheesh.s.370177?mibextid=ZbWKwL"><img src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" alt="" /></a>
                    </div>
                    <div className="pics">
                    <a href="https://github.com/Sudheesh-IND?tab=repositories"><img src="https://th.bing.com/th/id/OIP.kjCUP06WDUMR88i5wo2SqwHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></a>
                    </div>
                    <div className="pics">
                    <a href="https://x.com/sudheeshnandu10?t=WgWIxNaw6Donq6QcGqXk2Q&s=08"><img src="https://th.bing.com/th/id/OIP.uTFO_MxnELcyfUHi9uAF0AHaHa?w=216&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></a>
                    </div>
                </div>
         
        
                <div className="top-part">


                    <div className="container" id='homeportion'>
                        <div className="row">
                            <div className="col-md-6 top-part-1">
                            <div className='top-part-1-3'>

                            </div>
                                <div className='top-part-1-2'>

                                </div>
                                
                            </div>
                            <div className="col-md-5 top-part-2">
                                <div >
                                    <h4 text-theme={forWritings}>I AM <i onClick={switchTheme} class="fa-solid fa-moon"></i></h4>

                                    <h2 text-theme={forWritings}>SUDHEESH S</h2>
                                    <p text-theme={forWritings}>MEARN Stack Developer</p>
                                    <a href="https://drive.google.com/file/d/1gDcApXU1J8R41lrpjGALrhZHC1XDNxwV/view?usp=drive_link">  <button className='download'>Download CV</button></a>
                                  
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
                <div data-theme={theme}>
                    <div className="detail-part">
                        <div className="container" id='aboutme'>
                            <div className="row detail-part-1">
                                <div className="col-md-6">
                                    <h3 text-theme2={headings}>About Me</h3>
                                    <p shadow-theme={shadow} text-theme={forWritings} className='about'>I am an enthusiastic and aspiring MEAN stack
                                        developer ready to dive into the world of web
                                        development with a strong focus on creating
                                        dynamic and scalable applications.</p>
                                </div>
                                <div className="col-md-6 detail-part-1-2">
                                    <div className='magicpattern'>


                                    </div>
                                </div>
                            </div>

                            <div className="row detail-part-12">
                                <div className="col-md-12">
                                    <div className='container' id='skills'>
                                        <h3 text-theme2={headings}>Skills</h3>
                                        <div className="carousel-skill " style={{ marginTop: '100px' }} id='skills'>

                                            <div className="row mt-3">
                                                <div className="  col-2  skill-part">
                                                    <img shadow-theme={shadow} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ayXLqqJg-SmITAHr5Wj9VRR2YtcO4JFJ5g&usqp=CAU" alt="" />
                                                </div>
                                                <div className=" col-2   skill-part">
                                                    <img shadow-theme={shadow} src="data:image/png;base64,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" alt="" />
                                                </div>
                                                <div className="col-2  col-xs-6 skill-part">
                                                    <img shadow-theme={shadow} src="data:image/png;base64,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" alt="" />
                                                </div>
                                                <div className=" col-2  col-xs-6 skill-part">
                                                    <img shadow-theme={shadow} src="data:image/png;base64,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" alt="" />
                                                </div>
                                                <div className=" col-2  col-xs-6 skill-part">
                                                    <img shadow-theme={shadow} src="data:image/png;base64,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" alt="" />
                                                </div>
                                                <div className=" col-2  skill-part">
                                                    <img shadow-theme={shadow} src="data:image/jpeg;base64,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" alt="" />
                                                </div>

                                            </div>
                                            <div className="row skill-part-2">
                                                <div className="  col-2  skill-part">
                                                </div>
                                                <div className=" col-2   skill-part">
                                                    <img shadow-theme={shadow} src="data:image/png;base64,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" alt="" />
                                                </div>
                                                <div className="col-2  col-xs-6 skill-part">
                                                    <img shadow-theme={shadow} src="data:image/png;base64,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" alt="" />
                                                </div>
                                                <div className=" col-2  col-xs-6 skill-part">
                                                    <img shadow-theme={shadow} src="data:image/png;base64,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" alt="" />
                                                </div>
                                                <div className=" col-2  col-xs-6 skill-part">
                                                    <img shadow-theme={shadow} src="data:image/png;base64,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" alt="" />
                                                </div>
                                                <div className=" col-2  skill-part">
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="container" id='career'>
                                    <h3 text-theme2={headings}>Career</h3>
                                        <div class="design-section">
                                            <div class="timeline">


                                                <div class="timeline-empty">
                                                </div>



                                                <div class="timeline-middle">
                                                    <div class="timeline-circle"></div>
                                                </div>
                                                <div class="timeline-component timeline-content">
                                                    <h3>School </h3>
                                                    <p>2017</p>
                                                </div>
                                                <div class="timeline-component timeline-content">
                                                    <h3>B Tech</h3>
                                                    <p>2021</p>
                                                </div>
                                                <div class="timeline-middle">
                                                    <div class="timeline-circle"></div>
                                                </div>
                                                <div class="timeline-empty">
                                                </div>

                                                <div class="timeline-empty">
                                                </div>

                                                <div class="timeline-middle">
                                                    <div class="timeline-circle"></div>
                                                </div>
                                                <div class=" timeline-component timeline-content">
                                                    <h3>MEARN Stack Intern</h3>
                                                    <p>2023</p>
                                                </div>

                                            </div>
                                     
                                    </div>
                                 
                                </div>
                                <div className="container" id='services'>
                                    <h3 text-theme2={headings}>Services</h3>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="ag-format-container">
                                                <div className="ag-courses_box">
                                                    <div className="ag-courses_item" shadow-theme={shadow}>
                                                        <div style={{ textDecoration: 'none' }} className="ag-courses-item_link">
                                                            <div className="ag-courses-item_bg"></div>

                                                            <div className="ag-courses-item_title">
                                                                MEAN Stack Developer
                                                            </div>

                                                            <div className="ag-courses-item_date-box">

                                                                <span className="ag-courses-item_date">
                                                                    MEAN Stack is one of the most popular Technology Stack. It is used to develop a Full Stack Web Application. Although it is a Stack of different technologies, all of these are based on JavaScript language.
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="ag-format-container">
                                                <div className="ag-courses_box">
                                                    <div className="ag-courses_item" shadow-theme={shadow}>
                                                        <div style={{ textDecoration: 'none' }} className="ag-courses-item_link">
                                                            <div className="ag-courses-item_bg"></div>

                                                            <div className="ag-courses-item_title">
                                                                MERN Stack Developer
                                                            </div>

                                                            <div className="ag-courses-item_date-box">

                                                                <span className="ag-courses-item_date">
                                                                    MERN Stack is one of the most popular Technology Stack. It is used to develop a Full Stack Web Application. Although it is a Stack of different technologies, all of these are based on JavaScript language.
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="ag-format-container " >
                                                <div class="ag-courses_box" >
                                                    <div className="ag-courses_item" shadow-theme={shadow}>
                                                        <div style={{ textDecoration: 'none' }} className="ag-courses-item_link">
                                                            <div className="ag-courses-item_bg"></div>

                                                            <div class="ag-courses-item_title">
                                                                Web Designing
                                                            </div>

                                                            <div className="ag-courses-item_date-box">

                                                                <span className="ag-courses-item_date">
                                                                    Web design identifies the goals of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications.
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="container" id='projects'>
                                    <h3 text-theme2={headings}>Projects</h3>
                                    <div className="row " style={{marginTop:'100px'}}>


                                        <div className="col-md-3 p-2">
                                            <a href="https://github.com/Sudheesh-IND/socialmedia_Frontend.git">
                                                <div className="project" shadow-theme={shadow}>
                                                    <div style={{ position: 'relative' }}>
                                                        <img src="https://imagetolink.com/ib/FhP8Y1s8dh.jpeg" alt="" />
                                                        <div className='proj-name'>
                                                            <h5>SocialMedia App</h5>
                                                            <span><i className="fa-brands fa-github"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3 p-2">
                                            <a href="https://github.com/Sudheesh-IND/Shopclues_Frontend.git">
                                                <div className="project" shadow-theme={shadow} >

                                                    <div style={{ position: 'relative' }}>
                                                        <img src="https://imagetolink.com/ib/bT0jle4MEj.png" alt="" />
                                                        <div className='proj-name'>
                                                            <h5>Shopclues Clone</h5>
                                                            <span><i className="fa-brands fa-github"></i></span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3 p-2">
                                            <a href="https://github.com/Sudheesh-IND/Crud-project.git">
                                                <div className="project" shadow-theme={shadow}>

                                                    <div style={{ position: 'relative' }}>
                                                        <img src="https://imagetolink.com/ib/0vDvgmWTMw.png" alt="" />
                                                        <div className='proj-name'>
                                                            <h5>Notepad App</h5>
                                                            <span><i className="fa-brands fa-github"></i></span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3 p-2">
                                            <a href="https://github.com/Sudheesh-IND/Bankapp-frontend.git">
                                                <div className="project" shadow-theme={shadow}>

                                                    <div style={{ position: 'relative' }}>
                                                        <img src="https://imagetolink.com/ib/gqLn0zy5Ry.jpeg" alt="" />
                                                        <div className='proj-name'>
                                                            <h5>Bank App</h5>
                                                            <span><i className="fa-brands fa-github"></i></span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        

                                    </div>
                                  

                                    <div className="row mt-2">


                                        <div className="col-md-3 p-2">
                                            <a href="https://github.com/Sudheesh-IND/Dashboard-tailwind-materialui.git">
                                                <div className="project" shadow-theme={shadow}>
                                                    <div style={{ position: 'relative' }}>
                                                        <img src="https://imagetolink.com/ib/T4PzRUhDa8.png" alt="" />
                                                        <div className='proj-name'>
                                                            <h5>Admin Dashboard</h5>
                                                            <span><i className="fa-brands fa-github"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3 p-2">
                                            <a href="https://github.com/Sudheesh-IND/discount_calculator.git">
                                                <div className="project" shadow-theme={shadow}>

                                                    <div style={{ position: 'relative' }}>
                                                        <img src="https://imagetolink.com/ib/CcXZhvlipw.png" alt="" />
                                                        <div className='proj-name'>
                                                            <h5>Discount Calculator</h5>
                                                            <span><i className="fa-brands fa-github"></i></span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3 p-2" >
                                            <a href="https://github.com/Sudheesh-IND/doctor_frontend.git">
                                                <div className="project" shadow-theme={shadow}>

                                                    <div style={{ position: 'relative' }}>
                                                        <img src="https://imagetolink.com/ib/ogix6D5p2X.png" alt="" />
                                                        <div className='proj-name'>
                                                            <h5>Doctor App</h5>
                                                            <span><i className="fa-brands fa-github"></i></span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3 p-2">
                                            <a href="https://github.com/Sudheesh-IND/Netflix-clone.git">
                                                <div className="project" shadow-theme={shadow}>

                                                    <div style={{ position: 'relative' }}>
                                                        <img src="https://imagetolink.com/ib/QJNa6D8Djq.png" alt="" />
                                                        <div className='proj-name'>
                                                            <h5>Netflix Clone</h5>
                                                            <span><i className="fa-brands fa-github"></i></span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                    <div className='text-center'>
                                            <a href="https://github.com/Sudheesh-IND?tab=repositories"><button className='viewmore'>View More</button></a>
                                    </div>

                                </div>
                                
                                <div className="container" id='contactme'>
                                <h3 text-theme2={headings} style={{marginTop:'100px'}}>Contact</h3>
                                    {/* contact */}

                                    <div className="row"  style={{marginTop:'80px',paddingBottom:'100px'}}>
                                       
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4">
                                            <div className="contact" shadow-theme={shadow}>
                                                <input placeholder='Name' type="text" /> <br />
                                                <input placeholder='Email' type="text" />
                                                <textarea placeholder='Message' name="" id="" cols="30" rows="5"></textarea>
                                                <div className='text-center mt-4'>
                                                    <button>Send</button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
                                

                            </div>

                        </div>





                    </div>




                </div>

            </div>
        </div>

        </>
    )
}

export default Main