package com.be017pre.be017pre.user.mapper;


import com.be017pre.be017pre.user.dto.UserPostDto;
import com.be017pre.be017pre.user.dto.UserResponseDto;
import com.be017pre.be017pre.user.entity.User;
import org.mapstruct.Mapper;
@Mapper(componentModel = "spring")
public interface UserMapper {

    User userPostDtoToUser(UserPostDto userPostDto);
    UserResponseDto userToUserResponseDto(User user);

}