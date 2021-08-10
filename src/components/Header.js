import React from 'react'
import '../assets/css/style.css'

function Header() {
    return (
        <div>
            <div className="header-main header-style1">
                {/* <div className="col-xl-4 col-lg-4 col-sm-8 col-5">
					<div className="top-bar-right">
						<ul className="custom">
							<li>
								<a className="text-dark" href="register.html"><i className="fa fa-user mr-1"></i> <span>Register</span></a>
							</li>
							<li>
								<a className="text-dark" href="login.html"><i className="fa fa-sign-in mr-1"></i> <span>Login</span></a>
							</li>
							<li className="dropdown">
								<a className="text-dark" data-toggle="dropdown" href="#"><i className="fa fa-home mr-1"></i> <span>My Dashboard</span></a>
								<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
									<a className="dropdown-item" href="mydash.html"><i className="dropdown-icon icon icon-user"></i> My Profile</a> <a className="dropdown-item" href="#"><i className="dropdown-icon icon icon-speech"></i> Inbox</a> <a className="dropdown-item" href="#"><i className="dropdown-icon icon icon-bell"></i> Notifications</a> <a className="dropdown-item" href="mydash.html"><i className="dropdown-icon icon icon-settings"></i> Account Settings</a> <a className="dropdown-item" href="#"><i className="dropdown-icon icon icon-power"></i> Log out</a>
								</div>
							</li>
						</ul>
					</div>
				</div> */}
                
			<div className="horizontal-header clearfix">
				<div className="container">
					<a className="animated-arrow" id="horizontal-navtoggle"><span></span></a>
					<a className="smllogo mobile-logo" href="index.html"></a>
					<a className="callusbtn" href="tel:245-6325-3256"><i aria-hidden="true" className="fa fa-phone"></i></a>
				</div>
			</div>
			
			<div className="sticky">
				<div className="horizontal-main clearfix">
					<div className="horizontal-mainwrapper container clearfix">
						{/* add logo here */}
						<nav className="horizontalMenu clearfix d-md-flex">
							<ul className="horizontalMenu-list">
								<li aria-haspopup="true">
									<a href="#">Home <span className="fe fe-chevron-down"></span></a>
									
								</li>
								<li aria-haspopup="true">
									<a href="#">About Us</a>
								</li>
								<li aria-haspopup="true">
									<a href="#">Blog <span className="fe fe-chevron-down"></span></a>
								</li>
								<li aria-haspopup="true">
									<a href="#">Contact Us </a>
								</li>
								<li aria-haspopup="true">
									<a href="#">Dashboard <span class="fe fe-chevron-down"></span></a>
									<ul class="sub-menu">
										<li aria-haspopup="true"><a href="#">My Account</a></li>
										<li aria-haspopup="true"><a href="#">Logout</a></li>
										
									</ul>
								</li>
								<li aria-haspopup="true" className="d-lg-none mt-5 pb-5 mt-lg-0">
									<span>
										<a href="ad-posts.html" className="btn btn-secondary btn-block mb-lg-0"><i className="icon icon-plus mr-1 text-white"></i>Add Your Post</a>
									</span>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
            </div>

        </div>
    )
}

export default Header
