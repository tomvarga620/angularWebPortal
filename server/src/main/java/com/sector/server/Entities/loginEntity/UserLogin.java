package com.sector.server.Entities.loginEntity;

import java.util.UUID;

public class UserLogin {
    private String username ;
    private UUID token;
    private boolean privilage;

    public UserLogin() {
    }

    public UserLogin(String username) {
        this.token = UUID.randomUUID();
        this.username = username;
    }

    public boolean isPrivilage() {
        return privilage;
    }

    public void setPrivilage(boolean privilage) {
        this.privilage = privilage;
    }

    public UUID getToken() {
        return token;
    }

    public void setToken(UUID token) {
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;

        if (o == null || getClass() != o.getClass())
            return false;

        UserLogin userLogin = (UserLogin) o;

        if (token != null ? !token.equals(userLogin.token) : userLogin.token != null)
            return false;

        return username != null ? username.equals(userLogin.username) : userLogin.username == null;
    }

    @Override
    public String toString() {
        return "UserLogin{" +
                "token=" + token +
                ", username='" + username + '\'' +
                '}';
    }

    @Override
    public int hashCode() {
        int result = token != null ? token.hashCode() : 0;
        result = 31 * result + (username != null ? username.hashCode() : 0);
        return result;
    }
}
