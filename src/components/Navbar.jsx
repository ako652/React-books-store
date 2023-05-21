import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex  justify-center gap-4 bg-slate-600 h-20">
      <Link to="/" className="mt-5">
        Home
      </Link>
      <Link to="/Favorite" className="mt-5">
       
        favorite
      </Link>
    </div>
  );
}
