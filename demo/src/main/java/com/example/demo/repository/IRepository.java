package com.example.demo.repository;

import com.example.demo.entity.Branddata;
import com.example.demo.response.ShopItemDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.ShopItem;

import java.util.List;

@Repository
public interface IRepository extends JpaRepository<ShopItem,Integer> {
    @Query("select u from ShopItem u where u.name like %?1")
    List<ShopItem> findByNameLike(String name);
}



