package com.example.demo.util;

import com.example.demo.entity.Branddata;
import com.example.demo.response.BrandDTO;
import com.example.demo.response.ShopItemDTO;

import java.util.NoSuchElementException;

public class BrandUtil {

    private BrandUtil(){};
    public static NoSuchElementException notFound(Integer Id) {
        return new NoSuchElementException("Brand with id=" + Id + " not found.");
    }
    public static BrandDTO mapToBrandDTO(Branddata emp) {
        return BrandDTO.builder().id(emp.getId()).img(emp.getImg()).brand(emp.getBrand()).build();
    }
}
