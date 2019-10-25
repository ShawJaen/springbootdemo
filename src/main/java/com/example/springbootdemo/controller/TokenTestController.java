package com.example.springbootdemo.controller;

import java.util.HashMap;
import java.util.Map;

import javax.security.auth.login.AccountException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootdemo.config.JwtAuthenticationFilter;
import com.example.springbootdemo.util.JwtUtil;
@Api(value = "TokenTestController", tags={"获取Token"})
@RestController
@RequestMapping(value="/login")
public class TokenTestController {
	
	@RequestMapping(value="check",method=RequestMethod.POST)
	@ApiOperation(value="登录身份验证",notes="登入")
	@ApiImplicitParams({
		@ApiImplicitParam(name="username",value = "用户名称",required = true,paramType = "form",dataType = "string"),
		@ApiImplicitParam(name = "password",value = "密码",required = true,paramType = "form",dataType = "string")
	})
	public Object getLoginInfo(HttpServletRequest request,HttpServletResponse response){
		Account account = new Account();
		account.setUsername(request.getParameter("username").toString());
		account.setPassword(request.getParameter("password").toString());
		if (isValidPassword(account)) {
			final String jwt = JwtUtil.generateToken(account.username);
			return new HashMap<String,String>(){{
				put("token",jwt);
			}};
		}else {
			return new ResponseEntity(HttpStatus.UNAUTHORIZED);
		}
	}	
	
	@Bean
    public FilterRegistrationBean jwtFilter() {
        final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        JwtAuthenticationFilter filter = new JwtAuthenticationFilter();
        registrationBean.setFilter(filter);
        return registrationBean;
    }
	
	//密码是否正确
    private boolean isValidPassword(Account ac) {
        Map<String, Object> param = new HashMap<String, Object>();
        param.put("userName", ac.getUsername());
        param.put("password", ac.getPassword());

        return ("test".equals(param.get("userName")))&&("123".equals(param.get("password")));
    }
	
	public static class Account {
        private String username;
        private String password;
        public String getUsername() {
            return username;
        }
        public void setUsername(String username) {
            this.username = username;
        }
        public String getPassword() {
            return password;
        }
        public void setPassword(String password) {
            this.password = password;
        }
    }
}
