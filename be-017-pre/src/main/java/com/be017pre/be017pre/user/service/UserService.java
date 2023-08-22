package com.be017pre.be017pre.user.service;

import com.be017pre.be017pre.user.dto.UserPostDto;
import com.be017pre.be017pre.user.entity.User;
import com.be017pre.be017pre.user.repository.UserRepository;
import com.be017pre.be017pre.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

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
