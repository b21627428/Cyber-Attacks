package com.example.httpserver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController

@RequestMapping("/api/cookies")
@CrossOrigin("*")
public class CookiesController {

    @Autowired
    private CookieService cookieService;

    @RequestMapping(value = "/add",method = RequestMethod.POST)
    public ResponseEntity add(@RequestBody Cookie cookie){
        try{
            cookieService.addCookie(cookie);
            return ResponseEntity.ok().build();
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public ResponseEntity getAll(){
        try{
            Map<String, List<Cookie>> cookiemap = new HashMap();
            cookiemap.put("data", cookieService.getAllCookies());
            return ResponseEntity.ok(cookiemap);
        } catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
}
