import { useContext, useState } from "react";
import CommonBanner from "../Common/CommonBanner";
import { Link } from "react-router-dom";
import { LevelContext } from "../../ContextProvider/ContextProvider";
import Swal from "sweetalert2";

const LogIn = () => {
    const { logIn } = useContext(LevelContext);
    const [error, setError] = useState(false);

    const handleLogIn = (e) => {
        e.preventDefault();
        setError(false);

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        logIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                // console.log(user);
                Swal.fire({
                    title: "LogIn Successful",
                    text: "You successfully logged in",
                    icon: "success"
                });
                form.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(true);
                // console.log(errorCode, errorMessage)
            });
    }

    return (
        <div>
            <CommonBanner name={"LogIn"}></CommonBanner>

            <div className="hero my-10">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogIn} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <h1 className="text-center text-red-600">
                            {
                                error ? "Invalid User!" : " "
                            }
                        </h1>

                        <div className="flex gap-1 justify-center">
                            <h1>{"Don't have an account?"}</h1>
                            <Link to='/signUp'><p className="underline">Sign Up</p></Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default LogIn;