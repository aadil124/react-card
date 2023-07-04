import React from "react";

const CardData = ({ item }) => {
  // console.log(item);
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {item.plan}
          </h5>
          <h6 className="card-price text-center">
            ${item.cost}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li className={item.usersCount.fontWeight}>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {item.usersCount.user}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {item.storage}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {item.projects}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {item.access}
            </li>
            <li className={item.projectsNumbers.text}>
              <span className="fa-li">
                <i className={item.projectsNumbers.icon}></i>
              </span>
              {item.projectsNumbers.privateProjects}
            </li>
            <li className={item.phone.text}>
              <span className="fa-li">
                <i className={item.phone.icon}></i>
              </span>
              {item.phone.phoneSupport}
            </li>
            <li className={item.domain.text}>
              <span className="fa-li">
                <i className={item.domain.icon}></i>
              </span>
              <b>{item.domain.singleBoldText}</b>
              {item.domain.subDomain}
            </li>
            <li className={item.monthlyReports.text}>
              <span className="fa-li">
                <i className={item.monthlyReports.icon}></i>
              </span>
              {item.monthlyReports.report}
            </li>
          </ul>
          <div className="d-grid">
            <a href="/" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardData;
