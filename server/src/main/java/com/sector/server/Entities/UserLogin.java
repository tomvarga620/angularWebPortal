package com.sector.server.Entities;

import java.util.UUID;

public class UserLogin {
    private UUID token;
    private String email;

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
}
