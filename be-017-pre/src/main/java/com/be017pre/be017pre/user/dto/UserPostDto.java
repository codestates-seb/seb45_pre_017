package com.be017pre.be017pre.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserPostDto {
    private int userId;
    private String userEmail;
    private String userName;
    private String userPw;

    public UserPostDto(int userId, String userName, String userEmail, String userPw) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPw = userPw;
    }
}