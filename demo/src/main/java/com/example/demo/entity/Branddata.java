package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Proxy;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Proxy(lazy = false)
@Entity
@Table(name = "branddata")
public class Branddata {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Integer id;
    @Column(name = "brand")
    public String brand;
    @Column(name = "img")
    public String img;



}
