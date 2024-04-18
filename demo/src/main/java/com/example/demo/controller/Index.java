package com.example.demo.controller;


import com.example.demo.entity.ShopItem;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.request.OrdersRequest;
import com.example.demo.request.ShopItemRequest;
import com.example.demo.request.UsersRequest;
import com.example.demo.response.BrandDTO;
import com.example.demo.response.OrderDTO;
import com.example.demo.response.ShopItemDTO;
import com.example.demo.response.UserDTO;
import com.example.demo.service.ShopItemService;
import com.example.demo.util.JwtUtil;
import com.example.demo.util.OrderUtil;
import com.example.demo.util.UserUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.system.ApplicationHome;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/v1")
public class Index {



    private final String ADMINUSERNAME = "admin";
    private final String ADMINPASSWORD = "123123";
    @Autowired
    private UserRepository userRepository;


    @GetMapping("/login")
    public User Login(User user){

        String name = userRepository.findByNameLike(user.name).get(0).name;
        String psw = userRepository.findByNameLike(user.name).get(0).password;
        
        if(name.equals(user.getName())&&psw.equals(user.getPassword())){
            System.out.println(user.getName());
            System.out.println(user.getPassword());
            //添加token
            user.setToken(JwtUtil.creatToken());
            return user;
        }
        return null;
    }

    @GetMapping("/adminlogin")
    public User adminLogin(User user){
        if(ADMINUSERNAME.equals(user.getName())&&ADMINPASSWORD.equals(user.getPassword())){
            System.out.println(user.getName());
            System.out.println(user.getPassword());
            //添加token
            user.setToken(JwtUtil.creatAdminToken());
            return user;
        }
        return null;
    }

    @GetMapping("/check")
    public boolean checkToken(HttpServletRequest request){
        String token = request.getHeader("token");
        return JwtUtil.checkToken(token);
    }
    @GetMapping("/checkAdmin")
    public boolean checkAdminToken(HttpServletRequest request){
        String token = request.getHeader("token");
        return JwtUtil.checkAdminToken(token);
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

    @GetMapping(value = "/userdata")
    @ResponseStatus(HttpStatus.OK)
    public List<UserDTO> UserItems() { return shopItemService.userDatas();
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
    @GetMapping(value = "/searchUsers/{name}")
    @ResponseStatus(HttpStatus.OK)
    public List<UserDTO> UserItem(@PathVariable(value = "name") String name) {
        return shopItemService.UserSearch(name);
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

    @PostMapping(value = "/addUser")
    @ResponseStatus(HttpStatus.CREATED)
    public UserDTO saveUser(@RequestBody UsersRequest emp) {
        return shopItemService.saveUser(emp);
    }

    @PostMapping(value = "/upload")
    public String upload(@RequestParam("file") MultipartFile file) {
        String originalFilename = file.getOriginalFilename();

        System.out.println(originalFilename);
        String ext ="." + originalFilename.split("\\.")[1];
        String uuid = UUID.randomUUID().toString().replace("-","");
        String fileName = uuid + ext;

        ApplicationHome applicationHome = new ApplicationHome(this.getClass());
        String pre =applicationHome.getDir().getParentFile().getParentFile().getParentFile().getAbsolutePath() +
                "\\demo\\src\\main\\resources\\public\\images\\shops\\";
        String path = pre + fileName;
        System.out.println(path);
        try {
            file.transferTo(new File(path));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return fileName;
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
    public String deleteOrder(@PathVariable(value = "id") Integer Id) {return shopItemService.deleteOrder(Id);}

    @DeleteMapping(value = "/deleteUser/{id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteUser(@PathVariable(value = "id") Integer Id) {return shopItemService.deleteUser(Id);}


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




