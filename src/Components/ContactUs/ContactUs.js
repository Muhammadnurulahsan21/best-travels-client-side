import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="custom-margin banner">
        <div className="bg-img text-center text-light">
        <h2 className=" contact-text">CONTACT US</h2>
        </div>
      
      <div className="container">
          <div className="pb-5 pt-5">
            <h5>DROP US A LINE</h5>
            <h6>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat <br /> dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis <br /> sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis Cras <br /> malesuada felis quis, ultricies convallis neque. Pellentesque tristique <br /> fringilla tempus. Vivamus bibendum nibh pharetra, nulla dignissim.</h6>

            <div className="form-floating pt-5">
                <input type="email" className="form-control"/>
                <label for="floatingInput">Name:</label>
            </div>
            <div className="form-floating pt-5">
                <input type="password" className="form-control"  id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingPassword">Email:</label>
            </div>

            <div className="form-floating pt-5">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                <label for="floatingTextarea2">Message :</label>
            </div>
            <button className="btn btn-outline-secondary mt-4">SEND NOW</button>
          </div>
          <div>

          </div>
      </div>
    </div>
  );
};

export default ContactUs;
