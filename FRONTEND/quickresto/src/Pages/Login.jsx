import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import { loginUser } from "../Services/authServices";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        email,
        password,
      });

      console.log("SUCCESS:", response.data);

      alert(response.data.message || "Connexion réussie");

     
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
       navigate("/home");

    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);

      alert(
        error.response?.data?.message ||
        "Email ou mot de passe incorrect"
      );
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white font-sans overflow-hidden">

   
      <header className="sticky top-0 z-50 bg-blue-950/70 backdrop-blur-md border-b border-blue-800">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

       
          <div className="text-3xl flex font-bold text-white">
            <p className="text-blue-600">Q</p>
            uick <span className="text-blue-600">R</span>esto
          </div>

          {/* MENU */}
          <div className="flex gap-8 text-sm text-gray-200">

            <Link to="/" className="hover:text-white transition hover:scale-105">
              Accueil
            </Link>

            <Link to="/a-propos" className="hover:text-white transition hover:scale-105">
              À propos
            </Link>

          </div>

        </nav>
      </header>

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 opacity-40 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 blur-3xl rounded-full"></div>
      </div>

      {/* LOGIN SECTION */}
      <section className="relative flex justify-center items-center min-h-[85vh] px-6">

        <div className="w-full max-w-md bg-blue-950/40 border border-blue-800 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">

          {/* TITLE */}
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold">
              Connexion
            </h1>

            <p className="text-blue-100 mt-3 text-sm">
              Connectez-vous à votre espace Quick Resto
            </p>

          </div>

          {/* GOOGLE BUTTON */}
          <button
            className="w-full flex items-center justify-center gap-3 bg-white text-blue-900 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            <FaGoogle />
            Continue with Google
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-6">

            <div className="flex-1 h-[1px] bg-blue-800"></div>

            <p className="text-sm text-blue-200">
              ou
            </p>

            <div className="flex-1 h-[1px] bg-blue-800"></div>

          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* EMAIL */}
            <div>

              <label className="text-sm text-blue-100">
                Adresse email
              </label>

              <div className="mt-2 flex items-center bg-blue-900/50 border border-blue-800 rounded-xl px-4">

                <FaEnvelope className="text-blue-300" />

                <input
                  type="email"
                  placeholder="Entrer votre email"
                  autoComplete="off"
                  className="w-full bg-transparent border-none outline-none px-3 py-2 text-white placeholder:text-blue-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div>

              <label className="text-sm text-blue-100">
                Mot de passe
              </label>

              <div className="mt-2 flex items-center bg-blue-900/50 border border-blue-800 rounded-xl px-4">

                <FaLock className="text-blue-300" />

                <input
                  type="password"
                  placeholder="Entrer votre mot de passe"
                  className="w-full bg-transparent border-none outline-none px-3 py-2 text-white placeholder:text-blue-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </div>

            </div>

            {/* OPTIONS */}
            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2 text-blue-100">
                <input type="checkbox" />
                Se souvenir de moi
              </label>

              <Link
                to="/forgot-password"
                className="text-blue-300 hover:text-white"
              >
                Mot de passe oublié ?
              </Link>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-white text-blue-900 py-2 rounded-xl font-bold hover:scale-105 transition"
            >
              Se connecter
            </button>

          </form>

          {/* FOOTER */}
          <p className="text-center text-blue-100 text-sm mt-8">

            Vous n’avez pas de compte ?

            <Link
              to="/register"
              className="text-white font-semibold ml-2 hover:text-blue-300"
            >
              Créer un compte
            </Link>

          </p>

        </div>

      </section>

    </div>
  );
}