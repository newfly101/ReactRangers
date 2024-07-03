package com.daybreak.rangers.controller;
import org.springframework.web.bind.annotation.RequestMapping;

public class DefaultController {

    @RequestMapping({"/", "/home"})
    public String getMain() {
        return "forward:/index.html";
    }
}
