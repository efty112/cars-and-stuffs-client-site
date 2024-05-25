import { Link, Navigate } from "react-router-dom";
import CommonBanner from "../Common/CommonBanner";
import { useContext, useState } from "react";
import { LevelContext } from "../../ContextProvider/ContextProvider";
import Swal from 'sweetalert2'

const SignUp = () => {
    const { signUp, updateUserProfile, currentUser } = useContext(LevelContext);
    const [error, setError] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();

        setError(false);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        signUp(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                updateUserProfile(name, photo)
                    .then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        console.log(error)
                    });

                Swal.fire({
                    title: "Successful",
                    text: "You signed up successfully",
                    icon: "success"
                });
                form.reset();
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setError(true)
                console.log(errorCode, errorMessage)
            });
    }

    if (currentUser) {
        return (<Navigate to={'/'}></Navigate>);
    }

    return (
        <div>
            <CommonBanner name={'SignUp'}></CommonBanner>

            <div className="hero my-10">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSignUp} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>

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

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <h1 className="text-center text-red-600">
                            {
                                error ? "Your email is already in use" : " "
                            }
                        </h1>

                        <div className="flex gap-1 justify-center">
                            <h1>{"Already have an account?"}</h1>
                            <Link to='/logIn'><p className="underline">LogIn</p></Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignUp;