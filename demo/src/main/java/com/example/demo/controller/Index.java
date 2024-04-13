package com.example.demo.controller;


import com.example.demo.entity.ShopItem;
import com.example.demo.entity.User;
import com.example.demo.request.OrdersRequest;
import com.example.demo.request.ShopItemRequest;
import com.example.demo.request.UsersRequest;
import com.example.demo.response.BrandDTO;
import com.example.demo.response.OrderDTO;
import com.example.demo.response.ShopItemDTO;
import com.example.demo.response.UserDTO;
import com.example.demo.service.ShopItemService;
import com.example.demo.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping(value = "/api/v1")
public class Index {
    
    private final String USERNAME = "admin";
    private final String PASSWORD = "123123";



    @GetMapping("/login")
    public User Login(User user){
        if(USERNAME.equals(user.getName())&&PASSWORD.equals(user.getPassword())){
            System.out.println(user.getName());
            System.out.println(user.getPassword());
            //添加token
            user.setToken(JwtUtil.creatToken());
            return user;
        }
        return null;
    }

    @GetMapping("/check")
    public boolean checkToken(HttpServletRequest request){
        String token = request.getHeader("token");
        return JwtUtil.checkToken(token);
    }


    @GetMapping("/index")
    public String Index(){
        return "hello world!";
    }
    @Autowired
    private ShopItemService shopItemService;

    @GetMapping(value = "/shopItem")
    @ResponseStatus(HttpStatus.OK)
    public List<ShopItemDTO> shopItems() {
        return shopItemService.shopItems();
    }

    @GetMapping(value = "/branddata")
    @ResponseStatus(HttpStatus.OK)
    public List<BrandDTO> brandItems() { return shopItemService.brandDatas();
    }
    @GetMapping(value = "/orderdata")
    @ResponseStatus(HttpStatus.OK)
    public List<OrderDTO> OrderItems() { return shopItemService.orderDatas();
    }


    @GetMapping(value = "/shopItem/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ShopItemDTO shopItem(@PathVariable(value = "id") Integer Id) {

        return shopItemService.shopItem(Id);
    }



    @GetMapping(value = "/search/{name}")
    @ResponseStatus(HttpStatus.OK)
    public List<ShopItemDTO> shopItem(@PathVariable(value = "name") String name) {
        return shopItemService.SearchByName("%"+name+"%");
    }
    @GetMapping(value = "/searchOrders/{name}")
    @ResponseStatus(HttpStatus.OK)
    public List<OrderDTO> OrderItem(@PathVariable(value = "name") String name) {
        return shopItemService.OrderSearchByName("%"+name+"%");
    }




    @PostMapping(value = "/shopItems")
    @ResponseStatus(HttpStatus.CREATED)
    public ShopItemDTO save(@RequestBody ShopItemRequest emp) {
        return shopItemService.save(emp);
    }

    @PostMapping(value = "/orders")
    @ResponseStatus(HttpStatus.CREATED)
    public OrderDTO saveOrder(@RequestBody OrdersRequest emp) {
        return shopItemService.saveOrder(emp);
    }


    @DeleteMapping(value = "/shopItems")
    @ResponseStatus(HttpStatus.OK)
    public String deleteAll() {
        return shopItemService.deleteAll();
    }

    @DeleteMapping(value = "/shopItems/{id}")
    @ResponseStatus(HttpStatus.OK)
    public String delete(@PathVariable(value = "id") Integer Id) {
        return shopItemService.delete(Id);
    }

    @DeleteMapping(value = "/ordersdata/{id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteOrder(@PathVariable(value = "id") Integer Id) {

        return shopItemService.deleteOrder(Id);
    }


    @PutMapping(value = "/shopItems")
    @ResponseStatus(HttpStatus.OK)
    public ShopItemDTO update(@RequestBody ShopItemRequest emp) {
        return shopItemService.update(emp);
    }
    @PutMapping(value = "/orders")
    @ResponseStatus(HttpStatus.OK)
    public OrderDTO updateOrder(@RequestBody OrdersRequest emp) {
        return shopItemService.updateOrder(emp);
    }
    @PutMapping(value = "/users")
    @ResponseStatus(HttpStatus.OK)
    public UserDTO updateUser(@RequestBody UsersRequest emp) {
        return shopItemService.updateUser(emp);
    }


}




