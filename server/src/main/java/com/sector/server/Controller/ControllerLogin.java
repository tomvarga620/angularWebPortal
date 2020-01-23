package com.sector.server.Controller;

import com.sector.server.Entities.loginEntity.LoginForm;
import com.sector.server.Entities.loginEntity.User;
import com.sector.server.Entities.loginEntity.UserLogin;
import com.sector.server.repositories.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ControllerLogin {
    private static LoggedUsers loggedUsers = LoggedUsers.getInstance();
    private static ArrayList<UserLogin> loggedUsersArray = loggedUsers.getLoggedUsersArray();

    @Autowired
    private UserDao userDao;

    @RequestMapping(method = RequestMethod.POST, value = "/login")
    @ResponseBody
    public UserLogin login(@RequestBody LoginForm loginForm) {
        if (userDao.findByEmailAndAndPassword(loginForm.getEmail(), loginForm.getPassword()) != null) {
            if (loggedUsersArray.contains(loginForm))
                loggedUsersArray.remove(loginForm);
            UserLogin user = new UserLogin(loginForm.getEmail());
            loggedUsersArray.add(user);
            return user;
        } else
            return null;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public boolean register(@RequestBody User user) {
        if (userDao.findByEmail(user.getEmail()) == null) {
            userDao.save(user);
            return true;
        } else {
            return false;
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getLoggedUsers")
    public ArrayList<UserLogin> getLoggedUsers() {
        return loggedUsersArray;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/logout")
    public boolean logout(@RequestBody UserLogin login) {
        for (UserLogin u: loggedUsersArray) {
            if (u.equals(login)) {
                loggedUsersArray.remove(login);
                return true;
            }
        }
        return false;
    }
}
