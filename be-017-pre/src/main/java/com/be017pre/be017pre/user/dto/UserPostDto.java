package com.be017pre.be017pre.user.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public class UserPostDto {
    @NotNull
    private int userId;
    @NotNull
    @Email
    private String userEmail;
    @NotNull
    @Size(min = 1, max = 50)
    private String userName;
    @NotNull
    @Size(min = 6, max = 50)
    private String userPw;

    public UserPostDto(int userId, String userName, String userEmail, String userPw) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPw = userPw;
    }
}