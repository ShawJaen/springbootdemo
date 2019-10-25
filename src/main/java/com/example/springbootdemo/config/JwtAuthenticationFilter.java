package com.example.springbootdemo.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.springbootdemo.util.JwtUtil;

public class JwtAuthenticationFilter extends OncePerRequestFilter {
	
	private static final PathMatcher pathMatcher = new AntPathMatcher();

	@Override
	protected void doFilterInternal(HttpServletRequest request,
			HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		response.setHeader("Access-Control-Allow-Origin", "*");
		try {
			if (isProtectedUrl(request)) {
				//因为jwt用来验证身份的验证码是储存在header中的，而用swagger2时header中的值不好设置，需要进行修改，因此这里改成了从body中获取
                //String token = request.getHeader("Authorization");
				String token=request.getParameter("Authorization");
				//检查jwt令牌，如果令牌不合法或者过期，直接抛出异常，catch返回
				JwtUtil.validateToken(token);
			}
		} catch (Exception e) {
			response.sendError(HttpServletResponse.SC_UNAUTHORIZED, e.getMessage());
            return;
		} 
		//如果jwt令牌通过了检测, 那么就把request传递给后面的RESTful api
        filterChain.doFilter(request, response);
	}
	
	//现在只对接口开头是api的检查jwt
	private boolean isProtectedUrl(HttpServletRequest request) {
		return pathMatcher.match("/api/**", request.getServletPath());
	}

}
