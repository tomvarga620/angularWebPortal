package com.sector.server.Controller;

import com.sector.server.Entities.LoginForm;
import com.sector.server.Entities.User;
import com.sector.server.Entities.UserLogin;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class Controller {
    private ArrayList<UserLogin> loggedUsers = new ArrayList<>();

    @RequestMapping(method = RequestMethod.GET, value = "/login")
    @ResponseBody
    public UserLogin login(@RequestBody LoginForm loginForm) {
        UserLogin user = new UserLogin(loginForm.getEmail());
        loggedUsers.add(user);
        return user;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/register")
    public boolean register(@RequestBody User user) {
        if (true) {
            System.out.println("REGISTRATION: ");
            System.out.println(user.getEmail());
            System.out.println(user.getPassword());
            System.out.println(user.getName());
            //add user to database
            return true;
        } else {
            return false;
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getLoggedUsers")
    public ArrayList<UserLogin> getLoggedUsers() {
        return loggedUsers;
    }
}
