package com.example.backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .csrf().disable() // Disabling CSRF for simplicity
            .authorizeRequests()
            .antMatchers("/login").permitAll() // Allowing login and register without authentication
            .anyRequest().authenticated() // All other requests need authentication
            .and()
            .formLogin() // Enabling form-based login
            .loginPage("/login") // Custom login page (optional)
            .permitAll()
            .and()
            .logout()
            .permitAll();
    }
}
