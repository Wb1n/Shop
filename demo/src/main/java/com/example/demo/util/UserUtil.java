package com.example.demo.util;

import com.example.demo.entity.OrderData;
import com.example.demo.entity.User;
import com.example.demo.response.OrderDTO;
import com.example.demo.response.UserDTO;

import java.util.NoSuchElementException;

public class UserUtil {
    private UserUtil(){};
    public static NoSuchElementException notFound(Integer Id) {
        return new NoSuchElementException("Order with id=" + Id + " not found.");
    }
    public static UserDTO mapToUserDTO(User emp) {
        return UserDTO.builder().id(emp.getId()).name(emp.getName()).password(emp.getPassword()).token(emp.getToken()).number(emp.getNumber()).address(emp.getAddress()).tfn(emp.getTfn()).build();
    }
}
