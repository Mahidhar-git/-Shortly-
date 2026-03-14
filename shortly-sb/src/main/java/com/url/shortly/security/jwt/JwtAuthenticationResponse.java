package com.url.shortly.security.jwt;

import lombok.AllArgsConstructor;
import lombok.Data;
@Data
@AllArgsConstructor
public class JwtAuthenticationResponse {
    private String token;
}
