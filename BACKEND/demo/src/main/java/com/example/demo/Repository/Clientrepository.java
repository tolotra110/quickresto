package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Modele.Client;

@Repository
public interface Clientrepository extends JpaRepository<Client, Long> {

    long count();
}