package com.be017pre.be017pre.user.service;

import com.be017pre.be017pre.user.dto.UserPostDto;
import com.be017pre.be017pre.user.entity.User;
import com.be017pre.be017pre.user.repository.UserRepository;
import com.be017pre.be017pre.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    public UserService(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    public String loginUser(UserPostDto userPostDto) {
        User user = userRepository.findByUserEmail(userPostDto.getUserEmail());
        if (user != null && user.getUserPw().equals(userPostDto.getUserPw())) {
            UserDetails userDetails = customUserDetailsService.loadUserByUsername(user.getUserEmail());
            return jwtUtil.generateToken(userDetails);
        }
        return null;
    }


    public User createUser(User user) {
        if (user.getUserEmail() == null) {
            // 여기에 로깅을 추가하거나 예외를 발생시킬 수 있습니다.
            throw new IllegalArgumentException("userEmail cannot be null");
        }
        // 로깅 추가
        logger.info("Creating user with email: {}", user.getUserEmail());
        return userRepository.save(user);
    }

    public User findById(int userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public User updateUser(int userId, User user) {
        if (userRepository.existsById(userId)) {
            user.setUserId(userId);
            return userRepository.save(user);
        }
        return null;
    }

    public boolean deleteUser(int userId) {
        if (userRepository.existsById(userId)) {
            userRepository.deleteById(userId);
            return true;
        }
        return false;
    }
}
