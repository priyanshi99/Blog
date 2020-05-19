package com.example.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Configuration
@EnableConfigurationProperties
@Order(1)

public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
  @Autowired
  MongoUserDetailsService userDetailsService;
  @Bean
  public BCryptPasswordEncoder passwordEncoder() {
   return new BCryptPasswordEncoder(10);
  }
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .csrf().disable()
      .authorizeRequests()
      .antMatchers("/**").permitAll()
      .anyRequest().authenticated()
      .and().httpBasic()
      .and().sessionManagement().disable();
  }
 
  @Override
  public void configure(AuthenticationManagerBuilder builder) throws Exception {
   builder.userDetailsService(userDetailsService);
  }
}