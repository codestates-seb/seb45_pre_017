package com.be017pre.be017pre.user.controller;

import com.be017pre.be017pre.user.dto.ErrorResponseDto;
import com.be017pre.be017pre.user.dto.UserPostDto;
import com.be017pre.be017pre.user.dto.UserResponseDto;
import com.be017pre.be017pre.user.entity.User;
import com.be017pre.be017pre.user.mapper.UserMapper;
import com.be017pre.be017pre.user.service.UserService;
import com.be017pre.be017pre.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;
    private final JwtUtil jwtUtil;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    public UserController(UserService userService, UserMapper userMapper, JwtUtil jwtUtil) {  // JwtUtil 추가
        this.userService = userService;
        this.userMapper = userMapper;
        this.jwtUtil = jwtUtil;  // 초기화
    }
    @PostMapping("/register")
    public ResponseEntity<Object> signup(@RequestBody UserPostDto userPostDto) {
        logger.info("Received UserPostDto: {}", userPostDto);
        if (userPostDto.getUserEmail() == null || userPostDto.getUserEmail().isEmpty()) {
            return new ResponseEntity<>(new ErrorResponseDto("User email cannot be null or empty"), HttpStatus.BAD_REQUEST);
        }
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

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {
        // 로그아웃 로직을 여기에 구현하면 됩니다.
        // 예를 들면, JWT 토큰을 무효화하거나 해당 사용자의 세션을 종료시킬 수 있습니다.
        return ResponseEntity.ok("Logged out successfully");
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
    @PostMapping("/refresh")
    public ResponseEntity<String> refreshToken(@RequestHeader("Authorization") String expiredToken) {
        String newToken = jwtUtil.refreshToken(expiredToken.substring(7)); // "Bearer " 제거
        return ResponseEntity.ok(newToken);
    }
}