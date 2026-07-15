package com.example.demo.Controlleur;

import org.springframework.web.bind.annotation.*;
import com.example.demo.Service.PersonnelService;
import com.example.demo.Modele.Personnel;

import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/api/personnalite")
public class Personnalitecontroller {

    private final PersonnelService personnelService;

    public Personnalitecontroller(PersonnelService personnelService) {
        this.personnelService = personnelService;
    }


    @PostMapping("/createpersonellle")
    public String createPersonnel(
            @RequestParam String nomPersonelle,
            @RequestParam String fonction,
            @RequestParam String heureDebut,
            @RequestParam String heureFin
    ) {

        return personnelService.createPersonnel(
                nomPersonelle,
                fonction,
                LocalTime.parse(heureDebut),
                LocalTime.parse(heureFin)
        );
    }

    @GetMapping("/allpersonelle")
    public List<Personnel> getAllPersonnels() {
        return personnelService.getAllPersonnels();
    }
    @GetMapping("/totalpersonelle")
    public long gettotalpersonelle(){
        return personnelService.gettotalpersonelle();
    }

    @DeleteMapping("/deletepersonelle/{id}")
    public String deletePersonnel(@PathVariable Long id) {
        return personnelService.deletePersonnel(id);
    }
}