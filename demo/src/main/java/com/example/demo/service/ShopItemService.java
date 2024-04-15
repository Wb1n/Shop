package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.OrderData;
import com.example.demo.entity.ShopItem;
import com.example.demo.entity.User;
import com.example.demo.repository.BrandRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.request.OrdersRequest;
import com.example.demo.request.ShopItemRequest;
import com.example.demo.request.UsersRequest;
import com.example.demo.response.BrandDTO;
import com.example.demo.response.OrderDTO;
import com.example.demo.response.ShopItemDTO;
import com.example.demo.response.UserDTO;
import com.example.demo.util.BrandUtil;
import com.example.demo.util.OrderUtil;
import com.example.demo.util.ShopItemUtil;
import com.example.demo.util.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repository.IRepository;

import javax.naming.Name;

@Service
public class ShopItemService {

    @Autowired
    private IRepository repository;
    @Autowired
    private BrandRepository brandRepository;

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;
    public List<ShopItemDTO> shopItems() {
        return repository.findAll().stream().map(ShopItemUtil::mapToShopItemDTO).toList();
    }

    public List<BrandDTO> brandDatas(){
        return  brandRepository.findAll().stream().map(BrandUtil::mapToBrandDTO).toList();
    }

    public List<OrderDTO> orderDatas() {
        return orderRepository.findAll().stream().map(OrderUtil::mapToOrderDTO).toList();
    }
    public List<UserDTO> userDatas() {
        return userRepository.findAll().stream().map(UserUtil::mapToUserDTO).toList();
    }


    public ShopItemDTO shopItem(Integer Id) {
        ShopItem shopItem = repository.findById(Id).orElseThrow(() -> ShopItemUtil.notFound(Id));
        return ShopItemUtil.mapToShopItemDTO(shopItem);
    }

    public  List<ShopItemDTO> SearchByName(String name) {

        return repository.findByNameLike(name).stream().map(ShopItemUtil::mapToShopItemDTO).toList();
    }
    public  List<OrderDTO> OrderSearchByName(String name) {

        return orderRepository.findByNameLike(name).stream().map(OrderUtil::mapToOrderDTO).toList();
    }

    public  List<UserDTO> UserSearch(String name) {

        return userRepository.findByNameLike(name).stream().map(UserUtil::mapToUserDTO).toList();
    }

    public ShopItemDTO save(ShopItemRequest emp) {
        ShopItem shopItem = ShopItem.builder().id(emp.getId()).img(emp.getImg()).name(emp.getName()).brand(emp.getBrand()).price(emp.getPrice()).qty(emp.getQty()).build();
        return ShopItemUtil.mapToShopItemDTO(repository.save(shopItem));
    }

    public OrderDTO saveOrder(OrdersRequest emp) {
        OrderData orderData = OrderData.builder().id(emp.getId()).time(emp.getTime()).name(emp.getName()).address(emp.getAddress()).tfn(emp.getTfn()).number(emp.getNumber()).product(emp.getProduct()).build();
        return OrderUtil.mapToOrderDTO(orderRepository.save(orderData));
    }
    public UserDTO saveUser(UsersRequest emp) {
        User user = User.builder().id(emp.getId()).name(emp.getName()).address(emp.getAddress()).tfn(emp.getTfn()).number(emp.getNumber()).password(emp.getPassword()).build();
        return UserUtil.mapToUserDTO(userRepository.save(user));
    }

    public String delete(Integer Id) {
        ShopItem shopItem = repository.findById(Id).orElseThrow(() -> ShopItemUtil.notFound(Id));
        repository.delete(shopItem);
        return "ShopItem with id=" + Id + " removed";
    }

    public String deleteOrder(Integer Id) {
        OrderData orderData = orderRepository.findById(Id).orElseThrow(() -> OrderUtil.notFound(Id));
        orderRepository.delete(orderData);
        return "Orders with id=" + Id + " removed";
    }

    public String deleteUser(Integer Id) {
        User user = userRepository.findById(Id).orElseThrow(() -> UserUtil.notFound(Id));
        userRepository.delete(user);
        return "User with id=" + Id + " removed";
    }


    public String deleteAll() {
        List<ShopItem> shopItems = repository.findAll();
        if (shopItems.isEmpty())
            return "No ITEM available";
        repository.deleteAll();
        return "All ITEM are removed.";
    }



    public ShopItemDTO update(ShopItemRequest emp) {
        repository.findById(emp.getId()).orElseThrow(() -> ShopItemUtil.notFound(emp.getId()));
        ShopItem shopItem = ShopItem.builder().id(emp.getId()).name(emp.getName()).img(emp.getImg()).brand(emp.getBrand()).price(emp.getPrice()).qty(emp.getQty()).build();
        return ShopItemUtil.mapToShopItemDTO(repository.save(shopItem));
    }

    public OrderDTO updateOrder(OrdersRequest emp) {
        orderRepository.findById(emp.getId()).orElseThrow(() -> OrderUtil.notFound(emp.getId()));
        OrderData orderData = OrderData.builder().id(emp.getId()).time(emp.getTime()).name(emp.getName()).address(emp.getAddress()).number(emp.getNumber()).tfn(emp.getTfn()).product(emp.getProduct()).build();
        return OrderUtil.mapToOrderDTO(orderRepository.save(orderData));
    }

    public UserDTO updateUser(UsersRequest emp) {
        userRepository.findById(emp.getId()).orElseThrow(() -> UserUtil.notFound(emp.getId()));
        User user = User.builder().id(emp.getId()).name(emp.getName()).password(emp.getPassword()).address(emp.getAddress()).tfn(emp.getTfn()).number(emp.getNumber()).token(emp.getToken()).build();
        return UserUtil.mapToUserDTO(userRepository.save(user));
    }

}


