package com.example.demo.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
    public Integer id;
    public String name;
    public String time;
    public String number;
    public String address;
    public String tfn;
    public String product;
}
