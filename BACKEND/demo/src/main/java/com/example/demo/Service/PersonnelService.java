package com.example.demo.Service;

import org.springframework.stereotype.Service;
import com.example.demo.Modele.Personnel;
import com.example.demo.Repository.Personnelrepository;

import java.util.List;

@Service
public class PersonnelService {

    private final Personnelrepository personnelRepository;

    public PersonnelService(Personnelrepository personnelRepository) {
        this.personnelRepository = personnelRepository;
    }

    
    public String createPersonnel(String nomPersonelle, String fonction,
                                  java.time.LocalTime heureDebut,
                                  java.time.LocalTime heureFin) {

        Personnel personnel = Personnel.builder()
                .nomPersonelle(nomPersonelle)
                .fonction(fonction)
                .heureDebut(heureDebut)
                .heureFin(heureFin)
                .build();

        personnelRepository.save(personnel);

        return "Personnel ajouté avec succès";

    public List<Personnel> getAllPersonnels() {
        return personnelRepository.findAll();
    }
    public long gettotalpersonelle(){
        return personnelRepository.count();
    }

    public String deletePersonnel(Long id) {
        if (personnelRepository.existsById(id)) {
            personnelRepository.deleteById(id);
            return "Personnel supprimé avec succès";
        } else {
            return "Personnel introuvable";
        }
    }
}