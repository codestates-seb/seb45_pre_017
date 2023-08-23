package com.be017pre.be017pre.user.service;

import com.be017pre.be017pre.user.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class UserDetailsImpl implements UserDetails {

    private User user;

    public UserDetailsImpl(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // 사용자의 권한을 반환합니다. 필요에 따라 구현하십시오.
        return null;
    }

    @Override
    public String getPassword() {
        return user.getUserPw();
    }

    @Override
    public String getUsername() {
        return user.getUserEmail();
    }

    // 여기에 필요한 메소드들을 추가합니다.

    public Integer getId() {
        return user.getUserId();
    }

    public String getName() {
        return user.getUserName();
    }

    public String getEmail() {
        return user.getUserEmail();
    }

    // UserDetails 인터페이스의 나머지 메소드들도 구현해야 합니다.
    // 예를 들면:
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
