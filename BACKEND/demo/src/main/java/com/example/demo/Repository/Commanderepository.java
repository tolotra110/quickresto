package com.example.demo.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Modele.CommandeResto;

@Repository
public interface Commanderepository extends JpaRepository<CommandeResto, Long> {

    // nombre total de commandes
    long count();

    // 🔥 chiffre d'affaires
    @Query("SELECT SUM(c.prix * c.quantite) FROM CommandeResto c")
    Double getTotalCA();

    // total par table
    @Query("""
        SELECT c.numTab, SUM(c.prix * c.quantite)
        FROM CommandeResto c
        GROUP BY c.numTab
        ORDER BY SUM(c.prix * c.quantite) DESC
    """)
    List<Object[]> getTotalCommandeParTable();

    // top des plats vendus
    @Query("""
        SELECT c.articles, SUM(c.quantite)
        FROM CommandeResto c
        GROUP BY c.articles
        ORDER BY SUM(c.quantite) DESC
    """)
    List<Object[]> findTopSellingPlats();

    // recherche exacte
    List<CommandeResto> findByArticlesAndStatusAndQuantiteAndPrixAndNumTab(
            String articles,
            String status,
            Integer quantite,
            Double prix,
            Integer numTab
    );
}