package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Modele.Fournisseur;
import org.springframework.stereotype.Repository;
@Repository
public interface Fournisseurrepository  extends JpaRepository<Fournisseur,Long> {
long count();
}
