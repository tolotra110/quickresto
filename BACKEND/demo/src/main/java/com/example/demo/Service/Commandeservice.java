package com.example.demo.Service;

import org.springframework.stereotype.Service;
import com.example.demo.Modele.CommandeResto;
import com.example.demo.Repository.Commanderepository;

import java.util.List;


@Service
public class Commandeservice {

    private final Commanderepository commanderepository;
    public Commandeservice(Commanderepository commanderepository) {
        this.commanderepository = commanderepository;
    }
    public String createCommande(String articles, String status, Integer quantite, Double prix, Integer numTab) {
        CommandeResto newCommande = CommandeResto.builder()
                .articles(articles)
                .status(status)
                .quantite(quantite)
                .prix(prix)
                .numTab(numTab)
                .build();

        commanderepository.save(newCommande);

        return "Commande créée avec succès";
    }

    public List<CommandeResto> getAllCommandes() {
        return commanderepository.findAll();
    }
public String deleteCommande(Long id) {
        if (commanderepository.existsById(id)) {
            commanderepository.deleteById(id);
            return "Commande supprimée avec succès";
        } else {
            return "Commande introuvable";
        }
    }
public Double getTotalCA() {
    Double ca = commanderepository.getTotalCA();
    return ca;
}

public long totalCommandes() {
    return commanderepository.count();
}
public Object getTopPlat() {
    List<Object[]> result = commanderepository.findTopSellingPlats();

    if (result.isEmpty()) {
        return "Aucune donnée";
    }

    return result.get(0); 
   
}
 public List<Object[]> getTotalCommandeParTable() {
        return commanderepository.getTotalCommandeParTable();
}
}
