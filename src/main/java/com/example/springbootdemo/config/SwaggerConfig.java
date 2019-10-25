package com.example.springbootdemo.config;

import io.swagger.annotations.ApiOperation;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	@Bean
	public Docket swaggerSpringMvcPlugin(){
		return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class)).build();
	}
	
	/*2
	 * @Bean
	public Docket swaggerSpringMvcPlugin(){
		return new Docket(DocumentationType.SWAGGER_2)
					.apiInfo(apiInfo())
					.select()
//					.apis(RequestHandlerSelectors.basePackage("com.example.springbootdemo.controller"))
					.apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))
					.paths(PathSelectors.any())
					.build();
	}
	
	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("标题：测试接口")
				.description("描述：测试模板").contact(new Contact("作者：Shaw Jaen", null, null))
				.version("1.0")
				.build();
	}*/
}
