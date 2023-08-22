package com.be017pre.be017pre.user.controller;

import com.be017pre.be017pre.user.dto.UserPostDto;
import com.be017pre.be017pre.user.dto.UserResponseDto;
import com.be017pre.be017pre.user.entity.User;
import com.be017pre.be017pre.user.mapper.UserMapper;
import com.be017pre.be017pre.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }
    @PostMapping("/register")
    public ResponseEntity<UserResponseDto> signup(@RequestBody UserPostDto userPostDto) {
        logger.info("Received UserPostDto: {}", userPostDto);
        User user = userMapper.userPostDtoToUser(userPostDto);
        User response = userService.createUser(user);
        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserPostDto userPostDto) {
        String token = userService.loginUser(userPostDto);
        if (token != null) {
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @GetMapping("/info/{userId}")
    public ResponseEntity<UserResponseDto> getUserInfo(@PathVariable int userId) {
        User user = userService.findById(userId);
        if (user != null) {
            return ResponseEntity.ok(userMapper.userToUserResponseDto(user));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{userId}")
    public ResponseEntity<UserResponseDto> updateUser(@PathVariable int userId, @RequestBody UserPostDto userPostDto) {
        User userToUpdate = userMapper.userPostDtoToUser(userPostDto);
        User updatedUser = userService.updateUser(userId, userToUpdate);
        if (updatedUser != null) {
            return ResponseEntity.ok(userMapper.userToUserResponseDto(updatedUser));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable int userId) {
        if (userService.deleteUser(userId)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}