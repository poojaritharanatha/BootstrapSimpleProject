import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <h1 className="text-center text-success my-5">Bootstrap Cards</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.pexels.com/photos/4272613/pexels-photo-4272613.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Image 1</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.pexels.com/photos/4273429/pexels-photo-4273429.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Image 2</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.pexels.com/photos/4273365/pexels-photo-4273365.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Image 3</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.pexels.com/photos/9898339/pexels-photo-9898339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Image 4</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      

     

     
    </>
  );
};
export default App;
