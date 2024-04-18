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
@Table(name = "ordersdata")
public class OrderData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Integer id;
    @Column(name = "name")
    public String name;
    @Column(name = "time")
    public String time;
    @Column(name = "number")
    public String number;
    @Column(name = "address")
    public String address;
    @Column(name = "tfn")
    public String tfn;
    @Column(name = "product")
    public String product;



}
