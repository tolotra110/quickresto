package com.example.demo.Security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import io.jsonwebtoken.security.Keys;

import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
public class JwtService {

    // CLE SECRETE
    private final String SECRET_KEY =
            "quickrestosecretkeyquickrestosecretkey";

    // GENERER TOKEN
    public String generateToken(String email) {

        // CREATION DE LA CLE
        Key key = Keys.hmacShaKeyFor(
                SECRET_KEY.getBytes()
        );

        // CREATION DU TOKEN
        return Jwts.builder()

                // email utilisateur
                .setSubject(email)

                // date creation
                .setIssuedAt(new Date())

                // expiration : 1 heure
                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                        + 1000 * 60 * 60
                        )
                )

                // signature
                .signWith(
                        key,
                        SignatureAlgorithm.HS256
                )

                // generer token final
                .compact();
    }
}