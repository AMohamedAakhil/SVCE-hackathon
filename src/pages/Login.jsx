import React from 'react'

const Login = () => {
  return (
    <>
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSj2F3oRVt-54vASJbjEgpHW9XSxDNMrbz96erKWmk&s")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-l">
      <h1 className="mb-5 text-5xl font-bold text-white">Transform Your Mental Health Today</h1>
      <p className="mb-5">Experience Personalized Support for a Happier Tomorrow with Our Effortless Solutions.</p>
      <button className="btn btn-primary">Login with Google</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Login