package com.example.demo.Controlleur;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import com.example.demo.Modele.CommandeResto;
import com.example.demo.Service.Commandeservice;

@RestController
@RequestMapping("/api/commande")
public class Commandecontroller {

    private final Commandeservice commandeservice;

    public Commandecontroller(Commandeservice commandeservice) {
        this.commandeservice = commandeservice;
    }
    @PostMapping("/createcommande")
    public String createCommande(
            @RequestParam String articles,
            @RequestParam String status,
            @RequestParam Integer quantite,
            @RequestParam Double prix,
            @RequestParam Integer numTab) {

        return commandeservice.createCommande(articles, status, quantite, prix, numTab);
    }
    @GetMapping("/allcommande")
    public List<CommandeResto> getAll() {
    return commandeservice.getAllCommandes();
}
@DeleteMapping("/deletecommande/{id}")
public String delete(@PathVariable Long id) {
    return commandeservice.deleteCommande(id);
}
@GetMapping("/dashboard/ca")
public Double getCA() {
    return commandeservice.getTotalCA();
}

@GetMapping("/dashboard/totalcommande")
public long getTotal() {
    return commandeservice.totalCommandes();
}
@GetMapping("/top-plat")
public Object getTopPlat() {
    return commandeservice.getTopPlat();
}
@GetMapping("/dashboard/total-par-table")
public List<Object[]> getTotalParTable() {
    return commandeservice.getTotalCommandeParTable();
}
}
