package com.example.demo.repository;

import com.example.demo.entity.Branddata;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
    public interface BrandRepository extends JpaRepository<Branddata,Integer> {

    }

