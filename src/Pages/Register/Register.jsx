import { Link, useNavigate } from "react-router-dom";
import img from './../LogIn/log in without code.json'
import Lottie from "lottie-react";
import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import auth from "../../../firebase.config";

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      }).then(() => {
        navigate("/");
        // const userInfo = {
        //   email: email,
        //   name: name,
        //   photo: photo,
        // };
        // axiosPublic.post("/users", userInfo).then(() => {
        //   Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "User Created successfully",
        //     showConfirmButton: false,
        //     timer: 1500,
        //   });
        //   navigate("/");
        // });
      });
    });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        
        <div className="lg:rounded-lg w-full max-w-sm shadow-2xl m-4 px-20 bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="text-center">
            <div className="pb-10 ">
              <div className="">
                <p>
                  Already have an account? please {' '}
                  <Link
                    to={"/login"}
                    className="underline font-bold text-primary"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;