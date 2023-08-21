package com.be017pre.be017pre.user.service;

import com.be017pre.be017pre.user.entity.User;
import com.be017pre.be017pre.user.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public User createUser(User user) {

        return userRepository.save(user);
    }
}
