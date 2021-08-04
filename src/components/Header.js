import React from 'react'
import '../assets/css/style.css'

function Header() {
    return (
        <div>
            <div className="header-main header-style1">
                <div className="col-xl-4 col-lg-4 col-sm-8 col-5">
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
				</div>
                
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
									<ul className="sub-menu">
										<li aria-haspopup="true"><a href="index.html">Home-Default</a></li>
										<li aria-haspopup="true"><a href="index-text.html">Home Text</a></li>
										<li aria-haspopup="true"><a href="index-slides.html">Home Slides</a></li>
										<li aria-haspopup="true"><a href="index-video.html">Home Video</a></li>
										<li aria-haspopup="true"><a href="index-animation.html">Home Animation</a></li>
										<li aria-haspopup="true"><a href="index-map.html">Home Map</a></li>
										<li aria-haspopup="true"><a href="index-intro-page.html">Home Intro Page</a></li>
										<li aria-haspopup="true"><a href="index-popup-login.html">Home Pop-up login</a></li>
										<li aria-haspopup="true"><a href="index-banner.html">Home Banner</a></li>
									</ul>
								</li>
								<li aria-haspopup="true">
									<a href="about.html">About Us</a>
								</li>
								<li aria-haspopup="true">
									<a href="widgets.html">Widgets</a>
								</li>
								<li aria-haspopup="true">
									<a className="active" href="#">Pages <span className="fe fe-chevron-down"></span></a>
									<div className="horizontal-megamenu clearfix">
										<div className="container">
											<div className="megamenu-content">
												<div className="row">
													<ul className="col link-list">
														<li className="title">Listing  pages</li>
														<li><a href="page-list.html">Page List</a></li>
														<li><a href="page-list-right.html">Page List Right</a></li>
														<li><a href="page-list-map.html">Page Map List</a></li>
														<li><a href="page-list-map2.html">Page Map List 02</a></li>
														<li><a href="page-list-map3.html">Page Map List 03</a></li>
													</ul>
													<ul className="col link-list">
														<li className="title">Other pages</li>
														<li><a href="ad-posts.html">Ad Posts</a></li>
														<li><a href="edit-posts.html">Edit Posts</a></li>
														<li><a href="ad-posts2.html">Ad Posts2</a></li>
														<li><a href="edit-posts2.html">Edit Posts2</a></li>
														<li><a href="pricing.html">Pricing</a></li>
														<li><a href="typography.html">Typography</a></li>
														<li><a href="categories.html">Categories</a></li>
														<li><a href="testimonial.html">Testimonial</a></li>
														<li><a href="inovice.html">Invoice</a></li>
													</ul>
													<ul className="col link-list">
														<li className="title">User pages</li>
														<li><a href="userprofile.html">User Profile</a>	</li>
														<li><a href="userprofile2.html">User Profile 2</a></li>
														<li><a href="mydash.html">My Dashboard</a></li>
														<li><a href="myads.html">Ads</a></li>
														<li><a href="myfavorite.html">Favorite Ads</a></li>
														<li><a href="settings.html">Settings</a></li>
														<li><a href="tips.html">Tips</a></li>
													</ul>
													<ul className="col link-list">
														<li className="title">User pages</li>
														<li><a href="manged.html">Manged Ads</a></li>
														<li><a href="payments.html">Payments</a></li>
														<li><a href="orders.html">Orders</a></li>
														<li><a href="faq.html">Faq</a></li>
														<li><a href="usersall.html">User Lists</a></li>
													</ul>
													<ul className="col link-list">
														<li className="title">Headers & Footer Pages</li>
														<li><a href="header-style1.html">Header Style 01</a></li>
														<li><a href="header-style2.html">Header Style 02</a></li>
														<li><a href="header-style3.html">Header Style 03</a></li>
														<li><a href="header-style4.html">Header Style 04</a></li>
														<li><a href="footer-style.html">Footer Style 01</a></li>
														<li><a href="footer-style2.html">Footer Style 02</a></li>
														<li><a href="footer-style3.html">Footer Style 03</a></li>
														<li><a href="footer-style4.html">Footer Style 04</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li aria-haspopup="true">
									<a href="#">Categories <span className="fe fe-chevron-down"></span></a>
									<ul className="sub-menu">
										<li aria-haspopup="true">
											<a href="#">Hospitals <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
											<ul className="sub-menu">
												<li><a href="hospitals-list.html">Hospital List</a></li>
												<li><a href="hospitals-list-right.html">Hospital List Right</a></li>
												<li><a href="hospital-details.html">Hospital Details</a></li>
												<li><a href="hospital-details-02.html">Hospital Details 02</a></li>
												<li><a href="hospital-details-right.html">Hospital Details Right</a></li>
											</ul>
										</li>
										<li aria-haspopup="true">
											<a href="#">Doctors <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
											<ul className="sub-menu">
												<li><a href="doctors-list.html">Doctors List</a></li>
												<li><a href="doctors-list-right.html">Doctors List Right</a></li>
												<li><a href="doctor-details.html">Doctor Details</a></li>
												<li><a href="doctor-details2.html">Doctor Details 2</a></li>
												<li><a href="doctor-details-right.html">Doctor Details Right</a></li>
											</ul>
										</li>
										<li aria-haspopup="true">
											<a href="#">FitnessCenter<i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
											<ul className="sub-menu">
												<li><a href="fitness-list.html">Fitness List</a></li>
												<li><a href="fitness-list-right.html">Fitness List Right</a></li>
												<li><a href="fitness-details.html">Fitness Details</a></li>
												<li><a href="fitness-details2.html">Fitness Details02</a></li>
												<li><a href="fitness-details-right.html">Fitness Details Right</a></li>
											</ul>
										</li>
										<li aria-haspopup="true">
											<a href="#">Pharmacy<i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
											<ul className="sub-menu">
												<li><a href="pharmacy-list.html">Pharmacy List</a></li>
												<li><a href="pharmacy-list-right.html">Pharmacy List Right</a></li>
												<li><a href="pharmacy-details.html">Pharmacy Details</a></li>
												<li><a href="pharmacy-details2.html">Pharmacy Details02</a></li>
												<li><a href="pharmacy-details-right.html">Pharmacy Details Right</a></li>
											</ul>
										</li>
										<li aria-haspopup="true">
											<a href="#">BloodBank<i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
											<ul className="sub-menu">
												<li><a href="bloodbank-list.html">BloodBank List</a></li>
												<li><a href="bloodbank-list-right.html">BloodBank List Right</a></li>
												<li><a href="bloodbank-details.html">BloodBank Details</a></li>
												<li><a href="bloodbank-details-right.html">BloodBank Details Right</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li aria-haspopup="true">
									<a href="#">Custom Pages <span className="fe fe-chevron-down"></span></a>
									<ul className="sub-menu">
										<li><a href="register.html">Register</a></li>
										<li><a href="login.html">Login</a></li>
										<li><a href="login-2.html">Login 02</a></li>
										<li><a href="forgot.html">Forgot Password</a></li>
										<li><a href="lockscreen.html">Lock Screen</a></li>
										<li><a href="underconstruction.html">UnderConstruction</a></li>
										<li><a href="404.html">404</a></li>
									</ul>
								</li>
								<li aria-haspopup="true">
									<a href="#">Blog <span className="fe fe-chevron-down"></span></a>
									<ul className="sub-menu">
										<li aria-haspopup="true">
											<a href="#">Blog Grid <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
											<ul className="sub-menu">
												<li><a href="blog-grid.html">Blog Grid Left</a></li>
												<li><a href="blog-grid-right.html">Blog Grid Right</a></li>
												<li><a href="blog-grid-center.html">Blog Grid Center</a></li>
											</ul>
										</li>
										<li aria-haspopup="true">
											<a href="#">Blog List <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
											<ul className="sub-menu">
												<li><a href="blog-list.html">Blog List Left</a></li>
												<li><a href="blog-list-right.html">Blog List Right</a></li>
												<li><a href="blog-list-center.html">Blog List Center</a></li>
											</ul>
										</li>
										<li aria-haspopup="true">
											<a href="#">Blog Details <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
											<ul className="sub-menu">
												<li><a href="blog-details.html">Blog Details Left</a></li>
												<li><a href="blog-details-right.html">Blog Details Right</a></li>
												<li><a href="blog-details-center.html">Blog Details Center</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li aria-haspopup="true">
									<a href="contact.html">Contact Us </a>
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
