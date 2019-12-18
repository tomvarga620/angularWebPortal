package com.sector.server.Controller;

import com.sector.server.Entities.loginEntity.UserLogin;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

public class LoggedUsers {
    private static ArrayList<UserLogin> loggedUsersArray;
    private static LoggedUsers loggedUsers = null;

    private LoggedUsers() {
    }

    public static LoggedUsers getInstance() {
        if (loggedUsers == null)
            loggedUsers = new LoggedUsers();

        return loggedUsers;
    }

    public static ArrayList<UserLogin> getLoggedUsersArray() {
        return loggedUsersArray;
    }
}
