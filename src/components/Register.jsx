import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import Swal from "sweetalert2";

const Register = () => {

    const { createUser,signInGoogle } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log()
        const formData = new FormData(e.target);
        const { email, password, photo, ...restUser } = Object.fromEntries(formData.entries());
        // const email = formData.get('email');
        // const password = formData.get('password');
        console.log(email, password, photo, restUser);
        // const formObj = Object.fromEntries(formData.entries())
        // console.log(formObj);
        // const email = formObj.email;
        // const password = formObj.password; 
        // console.log(email,password)

        //crete user in firebase

        createUser(email, password)
            .then(result => {
                if (result.user) {
                    console.log(result.user);
                    // e.target.reset();
                    const userProfile = {
                        email,
                        password,
                        ...restUser,
                        creationTime : result.user.metadata.creationTime,
                        lastSignInTime: result.user.metadata.lastSignInTime,

                    }

                    // save profile info in the DB
                    fetch('https://server-side-pearl-ten.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userProfile)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data._id) {
                                console.log(data),
                                alert('created and saved')
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "User has been created successfully.",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })

                }
            }).catch(error => console.log(error))

    }

    const handelGoogleSignIn = () => {
        signInGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full pt-5 max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-center text-2xl font-bold">
                    Register Now!
                </h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" />
                        <label className="label">Address</label>
                        <input type="text" name="address" className="input" placeholder="Address" />
                        <label className="label">Photo</label>
                        <input type="text" name="photo" className="input" placeholder="Photo URL" />
                        <label className="label">Phone Number</label>
                        <input type="text" name="phone" className="input" placeholder="Phone Number" />
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn bg-amber-950 btn-neutral mt-4">Register</button>
                    </form>
                    <button onClick={handelGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className="font-semibold mt-2">All ready have an Account? then
                        <Link className="text-blue-700 hover:underline" to='/login'> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;