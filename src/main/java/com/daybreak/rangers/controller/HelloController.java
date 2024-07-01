package com.daybreak.rangers.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {

    @RequestMapping({"/", "/home"})
    public String getMain() {
        return "forward:/index.html";
    }
}
