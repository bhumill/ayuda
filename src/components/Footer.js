import React from 'react'

import '../assets/css/style.css'
function Footer() {

	return (
		<div>
			<section>
				<footer className="footer-bg text-white">
					<div className="footer-main">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-md-12">
									<h6>About</h6>
									<hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
									{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate essequasi, veritatis totam voluptas nostrum.Lorem ipsum dolor sit amet, consectetur </p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .</p> */}
								</div>
								<div className="col-lg-4 col-md-12">
									<h6>Resources</h6>
									<hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
									<ul className="list-unstyled mb-0">
										<li><a href="javascript:;">Our Team</a></li>
										<li><a href="javascript:;">Contact US</a></li>
										<li><a href="javascript:;">About</a></li>
										<li><a href="javascript:;">Careers</a></li>
										<li><a href="javascript:;">Blog</a></li>
										<li><a href="javascript:;">Terms and Conditions</a></li>
									</ul>
								</div>
								<div className="col-lg-4 col-md-12">
									<h6>Contact</h6>
									<hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
									<ul className="list-unstyled mb-0">
										<li>
											<a href="#"><i className="fa fa-car mr-3 text-primary"></i> New York, NY 10012, US</a>
										</li>
										<li>
											<a href="#"><i className="fa fa-envelope mr-3 text-primary"></i> info12323@example.com</a></li>
										<li>
											<a href="#"><i className="fa fa-phone mr-3 text-primary"></i> + 01 234 567 88</a>
										</li>
										<li>
											<a href="#"><i className="fa fa-print mr-3 text-primary"></i> + 01 234 567 89</a>
										</li>
									</ul>
								</div>
								{/* <div className="col-lg-4 col-md-12">
								<h6>Subscribe</h6>
								<hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
								<div className="clearfix"></div>
								<div className="input-group w-100">
									<input type="text" className="form-control br-tl-3  br-bl-3 " placeholder="Email" />
									<div className="input-group-append ">
										<button type="button" className="btn btn-primary br-tr-3  br-br-3"> Subscribe </button>
									</div>
								</div>
								<h6 className="mb-0 mt-5">Payments</h6>
								<hr className="deep-purple  text-primary accent-2 mb-2 mt-3 d-inline-block mx-auto" />
								<div className="clearfix"></div>
								<ul className="footer-payments">
									<li className="pl-0"><a href="javascript:;"><i className="fa fa-cc-amex text-muted" aria-hidden="true"></i></a></li>
									<li><a href="javascript:;"><i className="fa fa-cc-visa text-muted" aria-hidden="true"></i></a></li>
									<li><a href="javascript:;"><i className="fa fa-credit-card-alt text-muted" aria-hidden="true"></i></a></li>
									<li><a href="javascript:;"><i className="fa fa-cc-mastercard text-muted" aria-hidden="true"></i></a></li>
									<li><a href="javascript:;"><i className="fa fa-cc-paypal text-muted" aria-hidden="true"></i></a></li>
								</ul>
							</div> */}
							</div>
						</div>
					</div>
					<div className="text-white p-0">
						<div className="container">

							<div className="row d-flex">
								<div className="col-lg-12 col-sm-12  mt-3 mb-3 text-center ">
									Copyright © 2021
								</div>
							</div>
						</div>
					</div>
				</footer>
			</section>
		</div>
	)
}


export default Footer