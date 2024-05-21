import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    // console.error(error);

    return (
        <div id="error-page" className="text-center space-y-3">

            <img src={'https://i.postimg.cc/QxB0LYXJ/Humaaans-Friend-Meeting.png'} className="container mx-auto lg:w-1/3 w-2/3" alt="" />

            <h1 className="text-5xl font-bold">Oops!</h1>
            <p className="text-3xl font-bold">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl">
                <i>{error.statusText || error.message}!!</i>
            </p>

            <button type="button" className="btn btn-error" onClick={() => {navigate(-1);}}>
                Go Back
            </button>
        </div>
    );
}