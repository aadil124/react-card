import React from "react";
// import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";


const CardData = ({ item }) => {
  console.log(item);
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            {item.tier}
          </h5>
          <h6 class="card-price text-center">
            ${item.price}
            <span class="period">/month</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              {item.user}
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              {item.storage}
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              {item.project}
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              {item.access}
            </li>
            <li class="text-muted">
              <span class="fa-li">
                <i class="fas fa-times"></i>
              </span>
              {item.privateProjects}
            </li>
            <li class="text-muted">
              <span class="fa-li">
                <i class="fas fa-times"></i>
              </span>
              {item.phoneSupport}
            </li>
            <li class="text-muted">
              <span class="fa-li">
                <i class="fas fa-times"></i>
              </span>
              {item.subdomain}
            </li>
            <li class="text-muted">
              <span class="fa-li">
                <i class="fas fa-times"></i>
              </span>
              {item.statusReport}
            </li>
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardData;
