package com.sector.server.Controller;

import com.sector.server.Entities.loginEntity.LoginForm;
import com.sector.server.Entities.loginEntity.User;
import com.sector.server.Entities.loginEntity.UserLogin;
import com.sector.server.repositories.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class ControllerLogin {
    private ArrayList<UserLogin> loggedUsers = LoggedUsers.getInstance().getClass().ge;

    @Autowired
    private UserDao userDao;


    @RequestMapping(method = RequestMethod.GET, value = "/login")
    @ResponseBody
    public UserLogin login(@RequestBody LoginForm loginForm) {
        if (userDao.findByEmailAndAndPassword(loginForm.getEmail(), loginForm.getPassword()) != null) {
            if (loggedUsers.contains(loginForm))
                loggedUsers.remove(loginForm);
            UserLogin user = new UserLogin(loginForm.getEmail());
            loggedUsers.add(user);
            return user;
        } else
            return null;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/register")
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
        return loggedUsers;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/logout")
    public boolean logout(@RequestBody UserLogin login) {
        for (UserLogin u: loggedUsers) {
            if (u.equals(login)) {
                loggedUsers.remove(login);
                return true;
            }
        }

        return false;
    }
}
