package com.example.demo.Service;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import com.example.demo.dto.RegisterRequest;
import com.example.demo.dto.RegisterResponse;
import com.example.demo.Modele.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public LoginResponse login(LoginRequest request) {

        // ✅ Vérification null (IMPORTANT)
        if (request == null ||
                request.getEmail() == null ||
                request.getPassword() == null) {
            return new LoginResponse("Email ou mot de passe vide", null);
        }

        // ✅ Normalisation email
        String email = request.getEmail().trim().toLowerCase();

        System.out.println("EMAIL REÇU = " + email);

        // ✅ Recherche user
        User user = userRepository.findByEmail(email).orElse(null);

        if (user == null) {
            return new LoginResponse("Email incorrect", null);
        }

            // 🔥 DEBUG 4 : mots de passe
        System.out.println("PASSWORD DB (hash) = " + user.getPassword());
        boolean match = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        System.out.println("PASSWORD MATCH = " + match);
        if (!match) {
            return new LoginResponse("Mot de passe incorrect", null);
        }

        // ✅ Génération token JWT
        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse("Connexion réussie", token);
    }
    public RegisterResponse register(RegisterRequest request) {

    // Vérifie si email existe déjà
    if (userRepository.existsByEmail(request.getEmail())) {
        return new RegisterResponse("Email déjà utilisé");
    }

    // Création utilisateur
    User user = User.builder()
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .build();

    // Sauvegarde
    userRepository.save(user);

    return new RegisterResponse("Compte créé avec succès");
}
}