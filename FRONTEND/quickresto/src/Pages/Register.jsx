import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser } from "../Services/authServices";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser({
        email,
        password,
      });

      console.log("SUCCESS:", response.data);

      alert(response.data.message);

      setEmail("");
      setPassword("");

    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);

      alert(
        error.response?.data?.message ||
        "Erreur lors de l'inscription"
      );
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white font-sans overflow-hidden">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-blue-950/70 backdrop-blur-md border-b border-blue-800">

        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
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

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-40 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 blur-3xl rounded-full"></div>
      </div>

      {/* REGISTER */}
      <section className="relative flex justify-center items-center min-h-[85vh] px-6">

        <div className="w-full max-w-md bg-blue-950/40 border border-blue-800 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">

          {/* TITLE */}
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold">
              Créer un compte
            </h1>

            <p className="text-blue-100 mt-3 text-sm">
              Rejoignez Quick Resto dès maintenant
            </p>

          </div>

          {/* GOOGLE */}
          <button className="w-full flex items-center justify-center gap-3 bg-white text-blue-900 py-3 rounded-xl font-semibold hover:scale-105 transition">
            <FaGoogle />
            Continue with Google
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-[1px] bg-blue-800"></div>
            <p className="text-sm text-blue-200">ou</p>
            <div className="flex-1 h-[1px] bg-blue-800"></div>
          </div>

          {/* FORM */}
          <form onSubmit={handleRegister} className="space-y-5">

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
                  type={showPassword ? "text" : "password"}
                  placeholder="Créer un mot de passe"
                  className="w-full bg-transparent border-none outline-none px-3 py-2 text-white placeholder:text-blue-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-blue-300 hover:text-white ml-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>
            </div>

            {/* TERMS */}
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <input type="checkbox" required />
              <p>J'accepte les conditions d'utilisation</p>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-white text-blue-900 py-3 rounded-xl font-bold hover:scale-105 transition"
            >
              Créer un compte
            </button>

          </form>

          {/* FOOTER */}
          <p className="text-center text-blue-100 text-sm mt-8">
            Vous avez déjà un compte ?
            <Link to="/login" className="text-white font-semibold ml-2 hover:text-blue-300">
              Se connecter
            </Link>
          </p>

        </div>

      </section>

    </div>
  );
}