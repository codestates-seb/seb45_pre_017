package com.be017pre.be017pre.user.controller;

import com.be017pre.be017pre.user.dto.UserPostDto;
import com.be017pre.be017pre.user.entity.User;
import com.be017pre.be017pre.user.mapper.UserMapper;
import com.be017pre.be017pre.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users/register")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }
    @PostMapping
    public ResponseEntity postUser(@RequestBody UserPostDto userPostDto) {
        User user = userMapper.userPostDtoToUser(userPostDto);
        User response = userService.createUser(user);
        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.CREATED);
    }
}
