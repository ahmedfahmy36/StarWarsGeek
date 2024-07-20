import { Link } from "react-router-dom";
import SearchBar from "../searchbar/searchbar";

const Homepage = () => {
  return (
    <div className="container-fluid mt-3 ">
      <h1 className=" title my-5">
        Star  <h6 className="py-0 my-0 text-white">may the force be with u</h6>  Wars</h1>
      <SearchBar />
      <div className="row d-flex justify-content-around ">
        <div className="card  col-lg-3 col-12 my-5  character-card ">
        <Link to={"/people"} className="">
          <div className="card-body">
            <button to={"/people"} className="btn mt-5">
              Go to characters
            </button>
          </div>
          </Link>
        </div>
        <div className="card text-center  col-lg-3 col-12 my-5  films-card">
        <Link to={"/films"} className="">
          <div className="card-body">
            <button to={"/films"} className="btn mt-5">
              Go to films
            </button>
          </div>
          </Link>
        </div>
        <div className="card text-center col-lg-3 col-12 my-5 vehicles-card">
        <Link to={"/vehicles"} className="">
          <div className="card-body">
            <button to={"/vehicles"} className="btn mt-5">
              Go to vehicles
            </button>
          </div>
          </Link>
        </div>
      </div>
      <div className="row d-flex justify-content-around ">
        <div className="card text-center col-lg-3 col-12 my-5 species-card">
        <Link to={"/species"} className="">
          <div className="card-body">
            <button to={"/species"} className="btn mt-5">
              Go to species
            </button>
          </div>
          </Link>
        </div>
        <div className="card text-center  col-lg-3 col-12 my-5 starships-card">
        <Link to={"/starships"} className="">
          <div className="card-body">
            <button to={"/starships"} className="btn mt-5">
              Go to starships
            </button>
          </div>
          </Link>
        </div>
        <div className="card text-center col-lg-3 col-12 my-5 planets-card ">
        <Link to={"/planets"} className="">
          <div className="card-body">
            <button to={"/planets"} className="btn mt-5">
              Go to Planets
            </button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
