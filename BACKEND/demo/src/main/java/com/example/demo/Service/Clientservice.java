package com.example.demo.Service;

import org.springframework.stereotype.Service;
import com.example.demo.Modele.Client;
import com.example.demo.Repository.Clientrepository;
import com.example.demo.dto.ClientDTO;

import java.util.List;

@Service
public class Clientservice {

    private final Clientrepository clientrepository;

    public Clientservice(Clientrepository clientrepository) {
        this.clientrepository = clientrepository;
    }

    // ✅ CREATE AVEC DTO
    public String createClient(ClientDTO dto) {

        Client client = Client.builder()
                .numTab(dto.getNumTab())
                .nomClient(dto.getNomClient())
                .build();

        clientrepository.save(client);

        return "Client ajouté avec succès";
    }

    public List<Client> getAllClients() {
        return clientrepository.findAll();
    }

    public String deleteClient(Long id) {
        if (clientrepository.existsById(id)) {
            clientrepository.deleteById(id);
            return "Client supprimé avec succès";
        }
        return "Client introuvable";
    }
    public long getTotalClients() {
    return clientrepository.count();
}
}