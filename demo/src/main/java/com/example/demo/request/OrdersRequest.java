package com.example.demo.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrdersRequest {
    private Integer id;
    private String time;
    private String name;
    private String number;
    private String address;
    private String tfn;
    private String product;
}
