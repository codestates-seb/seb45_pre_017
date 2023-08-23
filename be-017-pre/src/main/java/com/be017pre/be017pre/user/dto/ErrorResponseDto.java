package com.be017pre.be017pre.user.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ErrorResponseDto {
    private String message;

    public ErrorResponseDto(String message) {
        this.message = message;
    }
}
