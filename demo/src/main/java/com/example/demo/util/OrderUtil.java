package com.example.demo.util;

import com.example.demo.entity.Branddata;
import com.example.demo.entity.OrderData;
import com.example.demo.response.BrandDTO;
import com.example.demo.response.OrderDTO;

import java.util.NoSuchElementException;

public class OrderUtil {
    private OrderUtil(){};
    public static NoSuchElementException notFound(Integer Id) {
        return new NoSuchElementException("Order with id=" + Id + " not found.");
    }
    public static OrderDTO mapToOrderDTO(OrderData emp) {
        return OrderDTO.builder().id(emp.getId()).name(emp.getName()).address(emp.getAddress()).tfn(emp.getTfn()).number(emp.getNumber()).product(emp.getProduct()).time(emp.getTime()).build();
    }
}
