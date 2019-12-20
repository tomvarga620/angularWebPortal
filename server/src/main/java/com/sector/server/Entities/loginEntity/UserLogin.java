package com.sector.server.Entities.loginEntity;

import java.util.UUID;

public class UserLogin {
    private UUID token;
    private String email;

    public UserLogin() {
    }

    public UserLogin(String email) {
        this.token = UUID.randomUUID();
        this.email = email;
    }

    public UUID getToken() {
        return token;
    }

    public void setToken(UUID token) {
        this.token = token;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

        return email != null ? email.equals(userLogin.email) : userLogin.email == null;
    }

    @Override
    public String toString() {
        return "UserLogin{" +
                "token=" + token +
                ", email='" + email + '\'' +
                '}';
    }

    @Override
    public int hashCode() {
        int result = token != null ? token.hashCode() : 0;
        result = 31 * result + (email != null ? email.hashCode() : 0);
        return result;
    }
}
