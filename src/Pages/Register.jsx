import React, { use, useState } from "react"; 
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/Authprovider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setuser,updateuser,signInWithGoogle } = use(AuthContext);

  const [passworderror, setpassworderror] = useState("");
      // navigation add 
  const navigation=useNavigate() 
  const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;


  // google 
  const handleGoogleSignUp = () => {
     
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        
        setuser(user);
        
        navigation("/");
      })
      .catch((error) => {
        error(error.message);
      });
  };




  // email 

  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value; 

    
    if (!pattern.test(password)) {
      setpassworderror(
        " Password must contain at least 6 characters, one uppercase & one lowercase letter."
      );
      return;
    } else {
      setpassworderror(""); 
    }

    // console.log({ name, email, password, photo });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateuser({displayName: name ,photoURL:photo})
        .then(()=>{

          setuser({...user,displayName: name ,photoURL:photo});

        })
        .catch((error)=>{
          console.log(error)
          setuser(user)
        })
        

        // navigation add 
        navigation("/")  
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center min-h-screen items-center relative overflow-hidden px-4 md:px-0 py-12">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -z-10"></div>

      <div className="flex flex-col items-center mb-8 animate-slide-up">
        <h1 className="text-4xl font-black text-gradient-primary mb-2">Create Account</h1>
        <p className="text-white/60">Join PlayVerse to start your journey</p>
      </div>

      <div className="glass-dark w-full max-w-md rounded-[2rem] p-8 md:p-10 shadow-2xl border border-white/10 relative z-10 animate-slide-up hover:border-white/20 transition-all duration-300">
        <form onSubmit={handelRegister} className="space-y-6">
          <div>
            <label className="label-premium">Display Name</label>
            <input type="text" name="name" className="input-premium" placeholder="Enter your name" required />
          </div>

          <div>
            <label className="label-premium">Email Address</label>
            <input type="email" name="email" className="input-premium" placeholder="Enter your email" required />
          </div>

          <div>
            <label className="label-premium">Avatar Image URL</label>
            <input type="text" name="photo" className="input-premium" placeholder="Provide image link" required />
          </div>

          <div>
            <label className="label-premium">Password</label>
            <input type="password" name="password" className="input-premium" placeholder="Create a password" required />
            {passworderror && (
              <p className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs p-2 rounded-lg mt-2 flex items-center gap-1.5">
                <span>⚠</span> {passworderror}
              </p>
            )}
          </div>

          <button type="submit" className="btn-premium w-full py-4 text-lg mt-4">
            Create Profile
          </button>

          <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-white/40 text-sm font-medium">OR JOIN WITH</span>
              <div className="flex-grow border-t border-white/10"></div>
          </div>

          <button 
            type="button"
            onClick={handleGoogleSignUp} 
            className="w-full glass py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-3 active:scale-95"
          >
            <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Google Registration
          </button>

          <p className="text-center text-sm text-white/60 pt-4">
            Already have an account?{" "}
            <Link className="text-primary font-bold hover:text-white transition-colors" to="/auth/login">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
