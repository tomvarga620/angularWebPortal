package com.sector.server.Controller;

import com.sector.server.Entities.loginEntity.LoginForm;
import com.sector.server.Entities.loginEntity.User;
import com.sector.server.Entities.loginEntity.UserLogin;
import com.sector.server.Exeption.UnauthorizedRequestException;
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
        System.out.println(loginForm.toString());
        if (userDao.findByEmailAndAndPassword(loginForm.getUsername(), loginForm.getPassword()) != null) {
            UserLogin user = new UserLogin(loginForm.getUsername());
            user.setPrivilage(userDao.findByEmailAndAndPassword(loginForm.getUsername(), loginForm.getPassword()).isPrivilege());
            loggedUsersArray.add(user);
            return user;
        } throw new UnauthorizedRequestException("Bad Login");
    }

    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public boolean register(@RequestBody User user) {
        if (userDao.findByEmail(user.getEmail()) == null) {
            userDao.save(user);
            return true;
        } throw new UnauthorizedRequestException("User Already Exist");
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getLoggedUsers")
    public ArrayList<UserLogin> getLoggedUsers() {
        return loggedUsersArray;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/logout/{token}")
    public boolean logout(@PathVariable(name = "token") String token) {

        System.out.println(token);
        for (UserLogin u: loggedUsersArray) {
            if (u.getToken().toString().equals(token)) {
                loggedUsersArray.remove(u);
                return true;
            }
        }
        throw new UnauthorizedRequestException("Bad Login");
    }
}
