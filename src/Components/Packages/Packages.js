import React, { useEffect, useState } from "react";
import "./Packages.css";
import PackagesCard from "./../PackagesCard/PackagesCard";

const Packages = () => {
  const [allPackages, setAllPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://frozen-ocean-73745.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setAllPackages(data.packages);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="custom-margin">
      <div className="pb-5">
        <div className="frist-banner text-center text-light ">
          <h2 className="about-text">Packages</h2>
        </div>
      </div>

      <div className="container pt-3 mb-5">
        <h3 className="text-center text-secondary">OUR ALL PACKAGES</h3>
        <h3 className="text-center text-muted top-promotion fw-normal">
          BEST TRAVEL PACKAGES AVAILABLE
        </h3>
      </div>

      {isLoading === true ? (
        <div className="text-center py-5">
          <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container mb-5 mt-5">
          <div className="row row-cols-1 row-cols-md-3 g-5">
            {allPackages.map((allPackage) => (
              <PackagesCard
                key={allPackage.key}
                allPackage={allPackage}
              ></PackagesCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages;
