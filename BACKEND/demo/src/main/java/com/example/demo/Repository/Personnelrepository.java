package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Modele.Personnel;
@Repository
public interface Personnelrepository extends JpaRepository<Personnel,Long>{
    long count();
}
