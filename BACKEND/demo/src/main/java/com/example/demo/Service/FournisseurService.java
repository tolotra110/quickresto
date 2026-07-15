package com.example.demo.Service;

import org.springframework.stereotype.Service;
import com.example.demo.Modele.Fournisseur;
import com.example.demo.Repository.Fournisseurrepository;

import java.util.List;

@Service
public class FournisseurService {

    private final Fournisseurrepository fournisseurrepository;

    public FournisseurService(Fournisseurrepository fournisseurrepository) {
        this.fournisseurrepository = fournisseurrepository;
    }


    public String createFournisseur(String nomFournisseur, Integer quantite, String unite,
                                    String statut, String ingredient, Double prixUnitaire) {

        Fournisseur fournisseur = Fournisseur.builder()
                .nomFournisseur(nomFournisseur)
                .quantite(quantite)
                .unite(unite)
                .statut(statut)
                .ingredient(ingredient)
                .prixUnitaire(prixUnitaire)
                .build();

        fournisseurrepository.save(fournisseur);

        return "Fournisseur ajouté avec succès";
    }


    public List<Fournisseur> getAllFournisseurs() {
        return fournisseurrepository.findAll();
    }


    public String deleteFournisseur(Long id) {
        if (fournisseurrepository.existsById(id)) {
            fournisseurrepository.deleteById(id);
            return "Fournisseur supprimé avec succès";
        } else {
            return "Fournisseur introuvable";
        }
    }
    public long gettotalfournisseur(){
        return  fournisseurrepository.count();
    }
}