package com.example.demo.Modele;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "fournisseur")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Fournisseur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_fournisseur")
    private Long idFournisseur;

    @Column(name = "nom_fournisseur")
    private String nomFournisseur;

    @Column(name = "quantite")
    private Integer quantite;

    @Column(name = "unite")
    private String unite; 

    @Column(name = "statut")
    private String statut;

    @Column(name = "ingredient")
    private String ingredient;

    @Column(name = "prix_unitaire")
    private Double prixUnitaire;
}