import React from 'react'
import '../assets/css/style.css'
function editProfile() {
    return (
        <div>
		<div className="header-main">

			{/* <!-- Top Bar --> */}
			<div className="top-bar">
				<div className="container">
					<div className="row">
						<div className="col-xl-8 col-lg-8 col-sm-4 col-7">
							<div className="top-bar-left d-flex">
								<div className="clearfix">
									<ul className="socials">
										<li>
											<a className="social-icon text-dark" href="#"><i className="fa fa-facebook"></i></a>
										</li>
										<li>
											<a className="social-icon text-dark" href="#"><i className="fa fa-twitter"></i></a>
										</li>
										<li>
											<a className="social-icon text-dark" href="#"><i className="fa fa-linkedin"></i></a>
										</li>
										<li>
											<a className="social-icon text-dark" href="#"><i className="fa fa-google-plus"></i></a>
										</li>
									</ul>
								</div>
								<div className="clearfix">
									<ul className="contact">
										<li className="d-lg-none">
											<a className="callnumber text-dark" href="#"><span><i className="fa fa-phone mr-1"></i>: +425 345 8765</span></a>
										</li>
										<li className="select-country">
											<select className="form-control select2-flag-search" data-placeholder="Select Country">
												<option value="UM">
													United States of America
												</option>
												<option value="AF">
													Afghanistan
												</option>
												<option value="AL">
													Albania
												</option>
												<option value="AD">
													Andorra
												</option>
												<option value="AG">
													Antigua and Barbuda
												</option>
												<option value="AU">
													Australia
												</option>
												<option value="AM">
													Armenia
												</option>
												<option value="AO">
													Angola
												</option>
												<option value="AR">
													Argentina
												</option>
												<option value="AT">
													Austria
												</option>
												<option value="AZ">
													Azerbaijan
												</option>
												<option value="BA">
													Bosnia and Herzegovina
												</option>
												<option value="BB">
													Barbados
												</option>
												<option value="BD">
													Bangladesh
												</option>
												<option value="BE">
													Belgium
												</option>
												<option value="BF">
													Burkina Faso
												</option>
												<option value="BG">
													Bulgaria
												</option>
												<option value="BH">
													Bahrain
												</option>
												<option value="BJ">
													Benin
												</option>
												<option value="BN">
													Brunei
												</option>
												<option value="BO">
													Bolivia
												</option>
												<option value="BT">
													Bhutan
												</option>
												<option value="BY">
													Belarus
												</option>
												<option value="CD">
													Congo
												</option>
												<option value="CA">
													Canada
												</option>
												<option value="CF">
													Central African Republic
												</option>
												<option value="CI">
													Cote d'Ivoire
												</option>
												<option value="CL">
													Chile
												</option>
												<option value="CM">
													Cameroon
												</option>
												<option value="CN">
													China
												</option>
												<option value="CO">
													Colombia
												</option>
												<option value="CU">
													Cuba
												</option>
												<option value="CV">
													Cabo Verde
												</option>
												<option value="CY">
													Cyprus
												</option>
												<option value="DJ">
													Djibouti
												</option>
												<option value="DK">
													Denmark
												</option>
												<option value="DM">
													Dominica
												</option>
												<option value="DO">
													Dominican Republic
												</option>
												<option value="EC">
													Ecuador
												</option>
												<option value="EE">
													Estonia
												</option>
												<option value="ER">
													Eritrea
												</option>
												<option value="ET">
													Ethiopia
												</option>
												<option value="FI">
													Finland
												</option>
												<option value="FJ">
													Fiji
												</option>
												<option value="FR">
													France
												</option>
												<option value="GA">
													Gabon
												</option>
												<option value="GD">
													Grenada
												</option>
												<option value="GE">
													Georgia
												</option>
												<option value="GH">
													Ghana
												</option>
												<option value="GH">
													Ghana
												</option>
												<option value="HN">
													Honduras
												</option>
												<option value="HT">
													Haiti
												</option>
												<option value="HU">
													Hungary
												</option>
												<option value="ID">
													Indonesia
												</option>
												<option value="IE">
													Ireland
												</option>
												<option value="IL">
													Israel
												</option>
												<option value="IN">
													India
												</option>
												<option value="IQ">
													Iraq
												</option>
												<option value="IR">
													Iran
												</option>
												<option value="IS">
													Iceland
												</option>
												<option value="IT">
													Italy
												</option>
												<option value="JM">
													Jamaica
												</option>
												<option value="JO">
													Jordan
												</option>
												<option value="JP">
													Japan
												</option>
												<option value="KE">
													Kenya
												</option>
												<option value="KG">
													Kyrgyzstan
												</option>
												<option value="KI">
													Kiribati
												</option>
												<option value="KW">
													Kuwait
												</option>
												<option value="KZ">
													Kazakhstan
												</option>
												<option value="LA">
													Laos
												</option>
												<option value="LB">
													Lebanons
												</option>
												<option value="LI">
													Liechtenstein
												</option>
												<option value="LR">
													Liberia
												</option>
												<option value="LS">
													Lesotho
												</option>
												<option value="LT">
													Lithuania
												</option>
												<option value="LU">
													Luxembourg
												</option>
												<option value="LV">
													Latvia
												</option>
												<option value="LY">
													Libya
												</option>
												<option value="MA">
													Morocco
												</option>
												<option value="MC">
													Monaco
												</option>
												<option value="MD">
													Moldova
												</option>
												<option value="ME">
													Montenegro
												</option>
												<option value="MG">
													Madagascar
												</option>
												<option value="MH">
													Marshall Islands
												</option>
												<option value="MK">
													Macedonia (FYROM)
												</option>
												<option value="ML">
													Mali
												</option>
												<option value="MM">
													Myanmar (formerly Burma)
												</option>
												<option value="MN">
													Mongolia
												</option>
												<option value="MR">
													Mauritania
												</option>
												<option value="MT">
													Malta
												</option>
												<option value="MV">
													Maldives
												</option>
												<option value="MW">
													Malawi
												</option>
												<option value="MX">
													Mexico
												</option>
												<option value="MZ">
													Mozambique
												</option>
												<option value="NA">
													Namibia
												</option>
												<option value="NG">
													Nigeria
												</option>
												<option value="NO">
													Norway
												</option>
												<option value="NP">
													Nepal
												</option>
												<option value="NR">
													Nauru
												</option>
												<option value="NZ">
													New Zealand
												</option>
												<option value="OM">
													Oman
												</option>
												<option value="PA">
													Panama
												</option>
												<option value="PF">
													Paraguay
												</option>
												<option value="PG">
													Papua New Guinea
												</option>
												<option value="PH">
													Philippines
												</option>
												<option value="PK">
													Pakistan
												</option>
												<option value="PL">
													Poland
												</option>
												<option value="QA">
													Qatar
												</option>
												<option value="RO">
													Romania
												</option>
												<option value="RU">
													Russia
												</option>
												<option value="RW">
													Rwanda
												</option>
												<option value="SA">
													Saudi Arabia
												</option>
												<option value="SB">
													Solomon Islands
												</option>
												<option value="SC">
													Seychelles
												</option>
												<option value="SD">
													Sudan
												</option>
												<option value="SE">
													Sweden
												</option>
												<option value="SG">
													Singapore
												</option>
												<option value="TG">
													Togo
												</option>
												<option value="TH">
													Thailand
												</option>
												<option value="TJ">
													Tajikistan
												</option>
												<option value="TL">
													Timor-Leste
												</option>
												<option value="TM">
													Turkmenistan
												</option>
												<option value="TN">
													Tunisia
												</option>
												<option value="TO">
													Tonga
												</option>
												<option value="TR">
													Turkey
												</option>
												<option value="TT">
													Trinidad and Tobago
												</option>
												<option value="TW">
													Taiwan
												</option>
												<option value="UA">
													Ukraine
												</option>
												<option value="UG">
													Uganda
												</option>
												<option value="UY">
													Uruguay
												</option>
												<option value="UZ">
													Uzbekistan
												</option>
												<option value="VA">
													Vatican City (Holy See)
												</option>
												<option value="VE">
													Venezuela
												</option>
												<option value="VN">
													Vietnam
												</option>
												<option value="VU">
													Vanuatu
												</option>
												<option value="YE">
													Yemen
												</option>
												<option value="ZM">
													Zambia
												</option>
												<option value="ZW">
													Zimbabwe
												</option>
											</select>
										</li>
										<li className="dropdown">
											<a className="text-dark" data-toggle="dropdown" href="#"><span>Language <i className="fa fa-caret-down text-muted"></i></span></a>
											<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
												<a className="dropdown-item" href="#">English</a>
												<a className="dropdown-item" href="#">Arabic</a>
												<a className="dropdown-item" href="#">German</a>
												<a className="dropdown-item" href="#">Greek</a>
												<a className="dropdown-item" href="#">Vehiclenish</a>
											</div>
										</li>
										<li className="dropdown">
											<a className="text-dark" data-toggle="dropdown" href="#"><span>Currency <i className="fa fa-caret-down text-muted"></i></span></a>
											<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
												<a className="dropdown-item" href="#">USD</a>
												<a className="dropdown-item" href="#">EUR</a>
												<a className="dropdown-item" href="#">INR</a>
												<a className="dropdown-item" href="#">GBP</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
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
					</div>
				</div>
			</div>
			{/* <!--/Top Bar--> */}

			{/* <!--Header Search--> */}
			<header className="header-search border-bottom p-2 bg-white">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-12">
							<div className="header-search-logo d-none d-lg-block">
								<a className="header-logo header-brand-img" href="index.html"></a>
							</div>
						</div>
						<div className="col-lg-9 col-md-12 header-support">
							<ul className="hor-support float-right">
								<li className="support-header">
									<a href="#">
										<i className="fa fa-phone"></i>
										<div className="support-text">
											<h6>+68 872-627-9735</h6>
											<p>24/7 available services </p>
										</div>
									</a>
								</li>
								<li className="support-header">
									<a href="#">
										<i className="fa fa-envelope"></i>
										<div className="support-text">
											<h6>support@yourdomain.com</h6>
											<p>Ask For any questions</p>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
			{/* <!--/Header Search--> */}

			{/* <!-- Horizontal Header --> */}
			<div className="horizontal-header clearfix">
				<div className="container">
					<a className="animated-arrow" id="horizontal-navtoggle"><span></span></a>
					<a className="smllogo mobile-logo" href="index.html"></a>
					<a className="callusbtn" href="tel:245-6325-3256"><i aria-hidden="true" className="fa fa-phone"></i></a>
				</div>
			</div>
			{/* <!-- /Horizontal Header --> */}

			{/* <!-- Horizontal Menu --> */}
			<div className="sticky">
				<div className="header-style horizontal-main clearfix">
					<div className="horizontal-mainwrapper container clearfix">
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
							<ul className="mb-0">
								<li aria-haspopup="true" className="d-none d-lg-block ">
									<span>
										<a href="ad-posts.html" className="btn btn-danger btn-block mb-lg-0"><i className="fe fe-plus-circle mr-1 text-white"></i>Add Your Post</a>
									</span>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			{/* <!-- /Horizontal Menu --> */}

		</div>
		{/* <!-- /Header-main --> */}

		{/* <!--Breadcrumb--> */}
		<section>
			<div className="bannerimg cover-image bg-background3" style = {{bgcolor : 'blue'}}>
				<div className="header-text mb-0">
					<div className="container">
						<div className="text-center text-white">
							<h1 className="">My Dashboard</h1>
							<ol className="breadcrumb text-center">
								<li className="breadcrumb-item"><a href="#">Home</a></li>
								<li className="breadcrumb-item active text-white" aria-current="page">My Dashboard</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!--Breadcrumb--> */}

		{/* <!-- Section --> */}
		<section className="sptb">
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-12 col-md-12">
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">My Dashboard</h3>
							</div>
							<div className="card-body text-center item-user">
								<div className="profile-pic">
									<div className="profile-pic-img">
										<span className="bg-success dots" data-toggle="tooltip" data-placement="top" title="online"></span>
										<img src="../assets/images/users/female/17.jpg" className="brround" alt="user"/>
									</div>
									<a href="userprofile.html" className="text-dark"><h4 className="mt-3 mb-0 font-weight-semibold">Mariane Galeon</h4></a>
								</div>
							</div>
							<aside className="app-sidebar doc-sidebar my-dash">
								<div className="app-sidebar__user clearfix">
									<ul className="side-menu">
										<li>
											<a className="side-menu__item" href="mydash.html"><i className="icon icon-user"></i><span className="side-menu__label ml-2">Edit Profile</span></a>
										</li>
										<li>
											<a className="side-menu__item" href="myads.html"><i className="icon icon-diamond"></i><span className="side-menu__label ml-2">My Ads</span></a>
										</li>
										<li className="slide">
											<a className="side-menu__item" data-toggle="slide" href="#"><i className="icon icon-heart"></i><span className="side-menu__label ml-2">My Favorite</span><i className="angle fa fa-angle-right"></i></a>
											<ul className="slide-menu">
												<li><a className="slide-item" href="myfavorite.html"><i className="fa fa-angle-right mr-2"></i>Favorite1</a></li>
									        	<li><a className="slide-item" href="#"><i className="fa fa-angle-right mr-2"></i>Favorite2</a></li>
											</ul>
										</li>
										<li className="slide">
											<a className="side-menu__item" data-toggle="slide" href="#"><i className="icon icon-folder-alt"></i><span className="side-menu__label ml-2">Managed Ads</span><i className="angle fa fa-angle-right"></i></a>
											<ul className="slide-menu">
												<li><a className="slide-item" href="manged.html"><i className="fa fa-angle-right mr-2"></i>Managed Ads 01</a></li>
												<li><a className="slide-item" href="#"><i className="fa fa-angle-right mr-2"></i>Managed Ads 02</a></li>
												<li className="sub-slide">
													<a className="side-menu__item border-top-0 slide-item"  data-toggle="sub-slide"><span className="side-menu__label"><i className="fa fa-angle-right mr-2"></i>Ads</span> <i className="sub-angle fa fa-angle-right"></i></a>
													<ul className="child-sub-menu ">
														<li><a className="slide-item" href="#"><i className="fa fa-angle-right mr-2 text-muted"></i>Managed Ads </a></li>
													</ul>
												</li>
											</ul>
										</li>
										<li>
											<a className="side-menu__item" href="payments.html"><i className="icon icon-credit-card"></i><span className="side-menu__label ml-2">Payments</span></a>
										</li>
										<li>
											<a className="side-menu__item" href="orders.html"><i className="icon icon-basket"></i><span className="side-menu__label ml-2">Orders</span></a>
										</li>
										<li>
											<a className="side-menu__item" href="tips.html"><i className="icon icon-game-controller"></i><span className="side-menu__label ml-2">Safety Tips</span></a>
										</li>
										<li>
											<a className="side-menu__item" href="settings.html"><i className="icon icon-settings"></i><span className="side-menu__label ml-2">Settings </span></a>
										</li>
										<li>
											<a className="side-menu__item" href="login.html"><i className="icon icon-power"></i><span className="side-menu__label ml-2">Logout</span></a>
										</li>
									</ul>
								</div>
							</aside>
						</div>
						<div className="card my-select">
							<div className="card-header">
								<h3 className="card-title">Search Ads</h3>
							</div>
							<div className="card-body">
								<div className="form-group">
									<input type="text" className="form-control" id="text" placeholder="What are you looking for?"/>
								</div>
								<div className="form-group">
									<select name="country" id="select-countries" className="form-control custom-select select2-show-search">
										<option value="1" selected="">All Categories</option>
										<option value="2">Hospitals</option>
										<option value="3">Doctors</option>
										<option value="4">FitnessCenter</option>
										<option value="5">Vehicles</option>
										<option value="6">Pharmacy</option>
										<option value="7">Clinics</option>
										<option value="8">Booldbank</option>
									</select>
								</div>
								<div className="">
									<a href="#" className="btn  btn-primary">Search</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-9 col-lg-12 col-md-12">
						<div className="card mb-0">
							<div className="card-header">
								<h3 className="card-title">Edit Profile</h3>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">First Name</label>
											<input type="text" className="form-control" placeholder="First Name"/>
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Last Name</label>
											<input type="text" className="form-control" placeholder="Last Name"/>
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Email address</label>
											<input type="email" className="form-control" placeholder="Email"/>
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Phone Number</label>
											<input type="number" className="form-control" placeholder="Number"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label className="form-label">Address</label>
											<input type="text" className="form-control" placeholder="Vehicle Address"/>
										</div>
									</div>
									<div className="col-sm-6 col-md-4">
										<div className="form-group">
											<label className="form-label">City</label>
											<input type="text" className="form-control" placeholder="City"/>
										</div>
									</div>
									<div className="col-sm-6 col-md-3">
										<div className="form-group">
											<label className="form-label">Postal Code</label>
											<input type="number" className="form-control" placeholder="ZIP Code"/>
										</div>
									</div>
									<div className="col-md-5">
										<div className="form-group">
											<label className="form-label">Country</label>
											<select className="form-control select2-show-search border-bottom-0 w-100 select2-show-search" data-placeholder="Select">
												<optgroup label="Categories">
													<option>--Select--</option>
													<option value="1">Germany</option>
													<option value="2">Mercedes-Suzuki Swift</option>
													<option value="3">Canada</option>
													<option value="4">Usa</option>
													<option value="5">Afghanistan</option>
													<option value="6">Albania</option>
													<option value="7">China</option>
													<option value="8">Denmark</option>
													<option value="9">Finland</option>
													<option value="10">India</option>
													<option value="11">Kiribati</option>
													<option value="12">Kuwait</option>
													<option value="13">Mexico</option>
													<option value="14">Pakistan</option>
												</optgroup>
											</select>
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Facebook</label>
											<input type="text" className="form-control" placeholder="https://www.facebook.com/"/>
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Google</label>
											<input type="text" className="form-control" placeholder="https://www.google.com/"/>
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Twitter</label>
											<input type="text" className="form-control" placeholder="https://twitter.com/"/>
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Pinterest</label>
											<input type="text" className="form-control" placeholder="https://in.pinterest.com/"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label className="form-label">About Me</label>
											<textarea rows="5" className="form-control" placeholder="Enter About your description"></textarea>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group mb-0">
											<label className="form-label">Upload Image</label>
											<div className="custom-file">
												<input type="file" className="custom-file-input" name="example-file-input-custom"/>
												<label className="custom-file-label">Choose file</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<button type="submit" className="btn btn-secondary">Updated Profile</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/Section -->

		<!-- Newsletter--> */}
		<section className="sptb section-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-xl-6 col-md-12">
						<div className="sub-newsletter">
							<h3 className="mb-2"><i className="fa fa-paper-plane-o mr-2"></i> Subscribe To Our Newsletter</h3>
							<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
						</div>
					</div>
					<div className="col-lg-5 col-xl-6 col-md-12">
						<div className="input-group sub-input mt-1">
							<input type="text" className="form-control input-lg " placeholder="Enter your Email"/>
							<div className="input-group-append ">
								<button type="button" className="btn btn-primary btn-lg br-tr-3  br-br-3">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/Newsletter-->

		<!--Footer Section--> */}
		<section>
			<footer className="text-white footer-bg">
				<div className="footer-main">
					<div className="container">
						<div className="row">
							<div className="col-lg-2 col-md-12">
								<h6>About</h6>
								<hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto mt-0"/>
								<ul className="list-unstyled mb-0">
									<li>
										<a href="javascript:;">Our Team</a>
									</li>
									<li>
										<a href="javascript:;">Contact US</a>
									</li>
									<li>
										<a href="javascript:;">Faq</a>
									</li>
									<li>
										<a href="javascript:;">Careers</a>
									</li>
									<li>
										<a href="javascript:;">Blog</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-2 col-md-12">
								<h6>Resources</h6>
								<hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto mt-0"/>
								<ul className="list-unstyled mb-0">
									<li>
										<a href="javascript:;">Search Doctor</a>
									</li>
									<li>
										<a href="javascript:;">Search Hospital</a>
									</li>
									<li>
										<a href="javascript:;">Search Clinic</a>
									</li>
									<li>
										<a href="javascript:;">Search Fitnesscenter</a>
									</li>
									<li>
										<a href="javascript:;">Search BloodBank</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-2 col-md-12">
								<h6>More</h6>
								<hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
								<div className="clearfix"></div>
								<ul className="list-unstyled mb-0">
									<li>
										<a href="javascript:;">Help</a>
									</li>
									<li>
										<a href="javascript:;">Terms and Services</a>
									</li>
									<li>
										<a href="javascript:;">Book Appointments</a>
									</li>
									<li>
										<a href="javascript:;">Privacy Policy</a>
									</li>
									<li>
										<a href="javascript:;">Subscribers</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-3 col-md-12">
								<h6>Contact</h6>
								<hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
								<ul className="list-unstyled mb-0 contact-footer">
									<li>
										<i className="fa fa-map-marker"></i> 22 S. Rock Creek StreetSan Carlos, Uniontown CA 94070, USA
									</li>
									<li>
										<i className="fa fa-envelope "></i>info12323@example.com
									</li>
									<li>
										<i className="fa fa-phone"></i>+ 01 234 567 88
									</li>
									<li>
										<i className="fa fa-print"></i>+ 01 234 567 89
									</li>
								</ul>
							</div>
							<div className="col-lg-3 col-md-12">
								<h6>Subscribe</h6>
								<hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
								<div className="clearfix"></div>
								<div className="input-group w-100">
									<input className="form-control br-tl-3 br-bl-3" placeholder="Email" type="text"/>
									<div className="input-group-append">
										<button className="btn btn-primary br-tr-3 br-br-3" type="button">Subscribe</button>
									</div>
								</div>
								<h6 className="mt-5">Follow Us</h6>
								<hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
								<ul className="list-unstyled list-inline follow-footer">
									<li className="list-inline-item">
										<a className="btn-floating btn-sm"><i className="fa fa-facebook"></i></a>
									</li>
									<li className="list-inline-item">
										<a className="btn-floating btn-sm"><i className="fa fa-twitter"></i></a>
									</li>
									<li className="list-inline-item">
										<a className="btn-floating btn-sm"><i className="fa fa-google-plus"></i></a>
									</li>
									<li className="list-inline-item">
										<a className="btn-floating btn-sm"><i className="fa fa-linkedin"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="text-white p-0">
					<div className="container">
						<div className="row d-flex">
							<div className="col-lg-12 col-sm-12 mt-3 mb-3 text-center">
								Copyright © 2019 <a className="fs-14 text-white-50" href="#">Medz</a>. Designed by <a className="fs-14 text-white-50" href="https://www.spruko.com/"> Spruko Technologies Pvt.Ltd </a> All rights reserved.
							</div>
						</div>
					</div>
				</div>
			</footer>
		</section>

        </div>
    )
}

export default editProfile
