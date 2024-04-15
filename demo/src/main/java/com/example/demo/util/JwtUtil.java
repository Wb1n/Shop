package com.example.demo.util;

import io.jsonwebtoken.*;

import java.util.Date;
import java.util.UUID;

public class JwtUtil {

    private static long time = 1000*60*60*24;
    private static String signature = "admin";
    public static String creatToken(){
        JwtBuilder jwtBuilder = Jwts.builder();
        String jwtToken = jwtBuilder
                //header
                .setHeaderParam("typ","JWT")
                .setHeaderParam("alg","HS256")
                //playload
                .claim("username","admin")
                .claim("role","user")
                .setSubject("admin-test")
                .setExpiration(new Date(System.currentTimeMillis()+time))
                .setId(UUID.randomUUID().toString())
                //signature
                .signWith(SignatureAlgorithm.HS256,signature)
                .compact();
        return jwtToken;

    }
    public static String creatAdminToken(){
        JwtBuilder jwtBuilder = Jwts.builder();
        String jwtToken = jwtBuilder
                //header
                .setHeaderParam("typ","JWT")
                .setHeaderParam("alg","HS256")
                //playload
                .claim("username","admin")
                .claim("role","admin")
                .setSubject("admin-test")
                .setExpiration(new Date(System.currentTimeMillis()+time))
                .setId(UUID.randomUUID().toString())
                //signature
                .signWith(SignatureAlgorithm.HS256,signature)
                .compact();
        return jwtToken;

    }
    public static boolean checkToken(String token){
        if(token == null){
            return false;
        }else {
        try {

            Jws<Claims> claimsJws = Jwts.parser().setSigningKey(signature).parseClaimsJws(token);
            Claims claims =claimsJws.getBody();

            System.out.println(claims.get("username"));
            System.out.println(claims.get("role"));
            System.out.println(claims.getSubject());
            System.out.println(claims.getExpiration());

            return claims.get("role").equals("user");

        } catch (Exception e) {
            return false;
        }
        }
        }
    public static boolean checkAdminToken(String token){
        if(token == null){
            return false;
        }else {
            try {

                Jws<Claims> claimsJws = Jwts.parser().setSigningKey(signature).parseClaimsJws(token);
                Claims claims =claimsJws.getBody();

                System.out.println(claims.get("username"));
                System.out.println(claims.get("role"));
                System.out.println(claims.getSubject());
                System.out.println(claims.getExpiration());

                return claims.get("role").equals("admin");

            } catch (Exception e) {
                return false;
            }
        }
    }
}


