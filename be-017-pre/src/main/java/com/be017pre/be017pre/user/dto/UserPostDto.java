package com.be017pre.be017pre.user.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserPostDto {

    @NotBlank(message = "User ID is mandatory")
    private Integer userId;

    @Email(message = "Email should be valid")
    @NotBlank(message = "Email is mandatory")  // 추가한 어노테이션
    private String userEmail;

    @NotBlank(message = "Name is mandatory")
    private String userName;

    @Size(min = 8, max = 40, message = "Password should be between 8 and 40 characters")
    private String userPw;

    public UserPostDto(int userId, String userName, String userEmail, String userPw) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPw = userPw;
    }
}
