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
@Entity
@Proxy(lazy = false)

@Table(name = "userdata")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public  Integer id;
    @Column(name = "name")
    public String name;
    @Column(name = "password")
    public String password;
    @Column(name = "number")
    public String number;
    @Column(name = "address")
    public String address;
    @Column(name = "tfn")
    public String tfn;
    @Column(name = "token")
    public String token;
}
