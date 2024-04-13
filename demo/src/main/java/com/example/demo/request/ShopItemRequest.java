package com.example.demo.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShopItemRequest {
    private Integer id;
    private String name;
    private String img;
    private Integer price;
    private String brand;
    private Integer qty;
}
