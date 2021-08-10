import React from 'react'
const LeftDashBoard = ({history}) => {
  return(
      <div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Profile</h3>
          </div>
          <div className="card-body text-center item-user">
            <div className="profile-pic">
              <div className="profile-pic-img">
                <span className="bg-success dots" data-toggle="tooltip" data-placement="top" title="online"></span>
                {/*<img src="../assets/images/users/female/17.jpg" className="brround" alt="user"/>*/}
                <img src={'https://picsum.photos/200'} className="image"/>
              </div>
              <a href="#" className="text-dark"><h4 className="mt-3 mb-0 font-weight-semibold">Mariane Galeon</h4></a>
            </div>
          </div>
          <aside className="app-sidebar doc-sidebar my-dash">
            <div className="app-sidebar__user clearfix">
              <ul className="side-menu">
                <li>
                  <a className="side-menu__item" href="#"><i className="icon icon-user"></i><span className="side-menu__label ml-2">Edit Profile</span></a>
                </li>
                <li>
                  <a className="side-menu__item" href="#"><i className="icon icon-diamond"></i><span className="side-menu__label ml-2">Articles</span></a>
                </li>
                <li className="slide">
                  <a className="side-menu__item" data-toggle="slide" href="#"><i className="icon icon-heart"></i><span className="side-menu__label ml-2">EDiary</span><i className="angle fa fa-angle-right"></i></a>
                  <ul className="slide-menu">
                    <li><a className="slide-item" href="#"><i className="fa fa-angle-right mr-2"></i>Symptoms</a></li>
                    <li><a className="slide-item" href="#"><i className="fa fa-angle-right mr-2"></i>Vitals</a></li>
                  </ul>
                </li>
                <li className="slide">
                  <a className="side-menu__item" data-toggle="slide" href="#"><i className="icon icon-folder-alt"></i><span className="side-menu__label ml-2">Medication Wallet</span><i className="angle fa fa-angle-right"></i></a>
                  <ul className="slide-menu">
                    <li><a className="slide-item" href="#"><i className="fa fa-angle-right mr-2"></i>View Medication</a></li>
                    <li><a className="slide-item" href="#"><i className="fa fa-angle-right mr-2"></i>Add Medication</a></li>

                  </ul>
                </li>
                <li>
                  <a className="side-menu__item" href="#"><i className="icon icon-credit-card"></i><span className="side-menu__label ml-2">Appointments</span></a>
                  <ul className="slide-menu">
                    <li><a className="slide-item" href="#"><i className="fa fa-angle-right mr-2"></i>Past Appointments</a></li>
                    <li><a className="slide-item" href="#"><i className="fa fa-angle-right mr-2"></i>Upcoming Appointments</a></li>

                  </ul>
                </li>
                <li>
                  <a className="side-menu__item" href="#"><i className="icon icon-basket"></i><span className="side-menu__label ml-2">Payment History</span></a>
                </li>
                <li>
                  <a className="side-menu__item" href="#"><i className="icon icon-game-controller"></i><span className="side-menu__label ml-2">Notifications</span></a>
                </li>
                <li>
                  <a className="side-menu__item" href="#"><i className="icon icon-settings"></i><span className="side-menu__label ml-2">Support </span></a>
                </li>
                <li>
                  <a className="side-menu__item" href="#"><i className="icon icon-power"></i><span className="side-menu__label ml-2">User Activity</span></a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
  );
}
export  default LeftDashBoard;