package com.url.shortly.dtos;

import lombok.Data;



@Data
public class LoginRequest {
    private String username;
    private String password;
}