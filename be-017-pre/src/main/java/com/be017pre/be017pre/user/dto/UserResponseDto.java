package com.be017pre.be017pre.user.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserResponseDto {

    private Integer userId;
    private String userName;
    private String userEmail;
    private String userPw;

    public UserResponseDto(int userId, String userName, String userEmail, String userPw) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPw = userPw;

    }
}