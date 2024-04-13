package com.example.demo.
        util;

import com.example.demo.entity.ShopItem;
import com.example.demo.response.BrandDTO;
import com.example.demo.response.ShopItemDTO;

import java.util.NoSuchElementException;

public class ShopItemUtil {
    private ShopItemUtil() {
    }

    public static NoSuchElementException notFound(Integer Id) {
        return new NoSuchElementException("ShopItem with id=" + Id + " not found.");
    }

    public static ShopItemDTO mapToShopItemDTO(ShopItem emp) {
        return ShopItemDTO.builder().id(emp.getId()).qty(emp.getQty()).name(emp.getName()).img(emp.getImg()) .price(emp.getPrice()).brand(emp.getBrand()).build();
    }



}
