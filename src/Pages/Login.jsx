


import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../providers/Authprovider';

const Login = () => {
    const [error, seterror] = useState("")
    const [googleLoading, setGoogleLoading] = useState(false);


    const { signin, signInWithGoogle } = use(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()

     //  Google Login
      const handelgooglelogin = () => {
    setGoogleLoading(true);
    signInWithGoogle()
      .then(() => {
        // console.log("Google User:", result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.error("Google login failed:", err);
        seterror(err.code);
      })
      .finally(() => setGoogleLoading(false));
  };

    const handellogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log({ email, password })

        signin(email, password)
            .then(() => {
                // const user = result.user
                // console.log(user)
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorMessage)
                seterror(errorCode)

            });
    }
    return (
        <div className='flex flex-col justify-center min-h-screen items-center relative overflow-hidden px-4 md:px-0 py-12'>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full -z-10"></div>

            <div className="flex flex-col items-center mb-8 animate-slide-up">
                <h1 className="text-4xl font-black text-gradient-primary mb-2">Welcome Back</h1>
                <p className="text-white/60">Enter your core credentials to login</p>
            </div>

            <div className="glass-dark w-full max-w-md rounded-[2rem] p-8 md:p-10 shadow-2xl border border-white/10 relative z-10 animate-slide-up hover:border-white/20 transition-all duration-300">
                <form onSubmit={handellogin} className="space-y-6">
                    <div>
                        <label className="label-premium">Email Address</label>
                        <input type="email" name='email' className="input-premium" placeholder="Enter your email" required />
                    </div>
                    
                    <div>
                        <label className="label-premium flex justify-between">
                            Password
                            <Link to="/ForgetPassword" className="text-xs text-primary hover:text-white transition-colors">Forgot?</Link>
                        </label>
                        <input type="password" name='password' className="input-premium" placeholder="Enter your password" required />
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-xl flex items-center gap-2">
                            <span>⚠</span> {error}
                        </div>
                    )}
                    
                    <button type='submit' className="btn-premium w-full py-4 text-lg mt-2">
                        Initialize Login
                    </button>
                    
                    <div className="relative flex items-center py-4">
                        <div className="flex-grow border-t border-white/10"></div>
                        <span className="flex-shrink-0 mx-4 text-white/40 text-sm font-medium">OR LOGIN WITH</span>
                        <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    <button 
                        type="button"
                        onClick={handelgooglelogin} 
                        disabled={googleLoading}  
                        className="w-full glass py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:active:scale-100"
                    >
                        <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        {googleLoading ? "Connecting..." : "Google Authentication"}
                    </button>

                    <p className='text-center text-sm text-white/60 pt-4'>
                        Don't have an account yet?{' '}
                        <Link className='text-primary font-bold hover:text-white transition-colors' to="/auth/register">
                            Register Now
                        </Link> 
                    </p>
                </form>
            </div>
        </div>

    );
};

export default Login;