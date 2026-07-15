package com.example.demo.Modele;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Commanderesto") 
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommandeResto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_commande")
    private Long idCommande;


    @Column(name = "articles")
    private String articles;

    @Column(name = "status")
    private String status;

    @Column(name = "quantite")
    private Integer quantite;

    @Column(name = "prix")
    private Double prix;

    @Column(name = "num_tab")
    private Integer numTab;
}