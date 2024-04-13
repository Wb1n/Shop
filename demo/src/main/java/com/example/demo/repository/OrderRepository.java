package com.example.demo.repository;

import com.example.demo.entity.OrderData;
import com.example.demo.entity.ShopItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<OrderData,Integer> {
    @Query("select u from OrderData u where u.name like %?1")
    List<OrderData> findByNameLike(String name);
}
