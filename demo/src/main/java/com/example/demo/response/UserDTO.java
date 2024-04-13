package com.example.demo.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    public Integer id;
    public String name;
    public String password;
    public String token;
    public String number;
    public String address;
    public String tfn;
}
