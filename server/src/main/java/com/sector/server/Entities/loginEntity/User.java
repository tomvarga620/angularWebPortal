package com.sector.server.Entities.loginEntity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String password;
    private String email;

    @GeneratedValue
    private boolean privilege;

    public User() {
    }

    public User(String name, String password, String email) {
        //this.id = UUID.randomUUID();
        this.name = name;
        this.password = password;
        this.email = email;
        this.privilege = false;
    }

    public boolean isPrivilege() {
        return privilege;
    }

    public void setPrivilege(boolean privilege) {
        this.privilege = privilege;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", privilege=" + privilege +
                '}';
    }
}
