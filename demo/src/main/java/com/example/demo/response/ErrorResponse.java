package com.example.demo.response;
import lombok.Builder;
import lombok.Data;

@Builder
@Data

public class ErrorResponse {
     private String message;
}
