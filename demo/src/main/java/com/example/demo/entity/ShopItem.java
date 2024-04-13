
package com.example.demo.entity;

import jakarta.persistence.*;
import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "shopitem")
public class ShopItem {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        public Integer id;
        @Column(name = "img")
        public String img;

        @Column(name = "name")
        public String name;



        @Column(name = "price")
        public Integer price;

        @Column(name = "brand")
        public String brand;

        @Column(name = "qty")
        public Integer qty;
}
