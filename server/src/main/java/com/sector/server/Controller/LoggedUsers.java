package com.sector.server.Controller;

import com.sector.server.Entities.loginEntity.UserLogin;

import java.util.ArrayList;

public class LoggedUsers {
    private static ArrayList<UserLogin> loggedUsersArray = new ArrayList<>();
    private static LoggedUsers loggedUsers = null;

    private LoggedUsers() {
        loggedUsersArray = new ArrayList<>();
    }

    public static LoggedUsers getInstance() {
        if (loggedUsers == null)
            loggedUsers = new LoggedUsers();

        return loggedUsers;
    }

    public ArrayList<UserLogin> getLoggedUsersArray() {
        return loggedUsersArray;
    }
}
