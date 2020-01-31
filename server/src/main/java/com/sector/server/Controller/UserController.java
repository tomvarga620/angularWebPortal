package com.sector.server.Controller;
import com.sector.server.Entities.loginEntity.User;
import com.sector.server.Entities.loginEntity.UserLogin;
import com.sector.server.Exeption.UnauthorizedRequestException;
import com.sector.server.repositories.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Qualifier("userDao")
    @Autowired
    private UserDao userDao;

    private static LoggedUsers loggedUsers = LoggedUsers.getInstance();
    private static ArrayList<UserLogin> loggedUsersArray = loggedUsers.getLoggedUsersArray();

    @RequestMapping(method = RequestMethod.GET, value = "/getAllUsers/{token}")
    public ArrayList<User> getAllUsers(@PathVariable(value = "token") String token) {
        for (UserLogin u: loggedUsersArray) {
            if (u.getToken().toString().equals(token)) {
                User user = userDao.findByEmail(u.getUsername());

                if (user.isPrivilege())
                    return (ArrayList<User>) userDao.findAll();
            }
        }
        throw new UnauthorizedRequestException("Bad Login");
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/editUser/{token}")
    public void editUser(@PathVariable(value = "token") String token, @RequestBody User editedUser) {
        for (UserLogin u: loggedUsersArray) {
            if (u.getToken().toString().equals(token)) {
                User user = userDao.findByEmail(u.getUsername());

                if (user.isPrivilege()) {
                    Optional<User> updatedUser = userDao.findById(editedUser.getId());
                }
                throw new UnauthorizedRequestException("Bad Login");
            }
            throw new UnauthorizedRequestException("Bad Login");
        }
    }
}
