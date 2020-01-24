package com.sector.server.Controller;
import com.sector.server.Entities.loginEntity.User;
import com.sector.server.Entities.loginEntity.UserLogin;
import com.sector.server.repositories.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Qualifier("userDao")
    @Autowired
    private UserDao userDao;

    private static LoggedUsers loggedUsers = LoggedUsers.getInstance();
    private static ArrayList<UserLogin> loggedUsersArray = loggedUsers.getLoggedUsersArray();

    @RequestMapping(method = RequestMethod.GET, value = "/getAllUsers")
    public ArrayList<User> getAllUsers(@RequestBody UserLogin login) {
        for (UserLogin u: loggedUsersArray) {
            if (u.equals(login)) {
                User user = userDao.findByEmail(u.getEmail());

                if (user.isPrivilege())
                    return (ArrayList<User>) userDao.findAll();
            }
        }

        return null;
    }
}
