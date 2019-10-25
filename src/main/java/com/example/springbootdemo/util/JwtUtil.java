package com.example.springbootdemo.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtil {
	 static final String SECRET = "ThisIsASecret";

	    public static String generateToken(String username) {
//	    	System.out.println(""+new Date(System.currentTimeMillis() + 3600000)); //1小时
//	    	System.out.println(""+new Date(System.currentTimeMillis() + 3600_000L));	//1小时
//	    	System.out.println(""+new Date(System.currentTimeMillis() + 3600_000_000L)); //1000小时
	        Map<String, Object> map = new HashMap<String, Object>();
	        //you can put any data in the map
	        map.put("username", username);
	        String jwt = Jwts.builder()
	                .setClaims(map)
	                .setExpiration(new Date(System.currentTimeMillis() + 3600000))// 1000H
	                .signWith(SignatureAlgorithm.HS512, SECRET)
	                .compact();
	        return "Bearer "+jwt; //jwt前面一般都会加Bearer
	    }

	    public static void validateToken(String token) {
	        try {
	            // parse the token.
	            Map<String, Object> body = Jwts.parser()
	                    .setSigningKey(SECRET)
	                    .parseClaimsJws(token.replace("Bearer ",""))
	                    .getBody();
	        }catch (Exception e){
	            throw new IllegalStateException("Invalid Token. "+e.getMessage());
	        }
	    }
}
