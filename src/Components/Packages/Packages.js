import React, { useEffect, useState } from "react";
import "./Packages.css";
import PackagesCard from "./../PackagesCard/PackagesCard";

const Packages = () => {
  const [allPackages, setAllPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/packages")
      .then((res) => res.json())
      .then((data) => setAllPackages(data.packages));
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

      <div className="container mb-5 mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {allPackages.map((allPackage) => (
            <PackagesCard
              key={allPackage.key}
              allPackage={allPackage}
            ></PackagesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
