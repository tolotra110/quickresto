package com.example.demo.Controlleur;

import org.springframework.web.bind.annotation.*;
import com.example.demo.Service.Clientservice;
import com.example.demo.Modele.Client;
import com.example.demo.dto.ClientDTO;

import java.util.List;

@RestController
@RequestMapping("/api/client")
public class Clientcontrolleur {

    private final Clientservice clientservice;

    public Clientcontrolleur(Clientservice clientservice) {
        this.clientservice = clientservice;
    }
    @PostMapping("/createclient")
    public String createClient(@RequestBody ClientDTO dto) {

        return clientservice.createClient(dto);
    }
    @GetMapping("/totalclient")
public long getTotalClients() {
    return clientservice.getTotalClients();

    @GetMapping("/allclient")
    public List<Client> getAllClients() {
        return clientservice.getAllClients();
    }

    
    @DeleteMapping("/deleteclient/{id}")
    public String deleteClient(@PathVariable Long id) {
        return clientservice.deleteClient(id);
    }
} 