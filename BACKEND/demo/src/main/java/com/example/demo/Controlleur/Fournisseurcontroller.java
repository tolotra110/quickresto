package com.example.demo.Controlleur;

import org.springframework.web.bind.annotation.*;
import com.example.demo.Service.FournisseurService;
import com.example.demo.Modele.Fournisseur;

import java.util.List;

@RestController
@RequestMapping("/api/fournisseur")
public class Fournisseurcontroller {

    private final FournisseurService fournisseurService;

    public Fournisseurcontroller(FournisseurService fournisseurService) {
        this.fournisseurService = fournisseurService;
    }
    @PostMapping("/createfournisseur")
    public String createFournisseur(
            @RequestParam String nomFournisseur,
            @RequestParam Integer quantite,
            @RequestParam String unite,
            @RequestParam String statut,
            @RequestParam String ingredient,
            @RequestParam Double prixUnitaire
    ) {
        return fournisseurService.createFournisseur(
                nomFournisseur,
                quantite,
                unite,
                statut,
                ingredient,
                prixUnitaire
        );
    }

   
    @GetMapping("/allfournisseur")
    public List<Fournisseur> getAllFournisseurs() {
        return fournisseurService.getAllFournisseurs();
    }
    @GetMapping("/totalfournisseur")
    public long  gettotalfournisseur(){
        return fournisseurService.gettotalfournisseur();
    }
    @DeleteMapping("/deletefournisseur/{id}")
    public String deleteFournisseur(@PathVariable Long id) {
        return fournisseurService.deleteFournisseur(id);
    }
}