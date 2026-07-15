package com.example.demo.Controlleur;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import com.example.demo.dto.RegisterRequest;
import com.example.demo.dto.RegisterResponse;
import com.example.demo.Service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public LoginResponse login(
            @RequestBody LoginRequest request
    ) {
          System.out.println("EMAIL = " + request.getEmail());
    System.out.println("PASSWORD = " + request.getPassword());

        return authService.login(request);
    }
    @PostMapping("/register")
public RegisterResponse register(
        @RequestBody RegisterRequest request
) {
    return authService.register(request);
}
}