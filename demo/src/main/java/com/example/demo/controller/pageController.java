package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class pageController {
        @RequestMapping("/")
        public String index(){
            return "forward:index.html";

        }
        @RequestMapping("/home")
        public String home(){
        return "forward:index.html";

        }
    @RequestMapping("/cart")
    public String cart(){
        return "forward:index.html";

    }
    @RequestMapping("/orders")
    public String orders(){
        return "forward:index.html";

    }
    @RequestMapping("/login")
    public String login(){
        return "forward:index.html";

    }
    @RequestMapping("/admin")
    public String admin(){
        return "forward:index.html";

    }


}
