"use client"

import { Login } from "@/pages/auth/login";
import { Landing } from "@/pages/landing";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Home() {
  return (
        <Router>
                  <Routes>
                            <Route path="/" element={<Landing/>} />
                            <Route path="/Login" element={<Login/>} />
                  </Routes>
        </Router>
  );
}
