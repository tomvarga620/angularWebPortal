package com.sector.server.Controller;
import com.sector.server.Entities.loginEntity.User;
import com.sector.server.Entities.loginEntity.UserLogin;
import com.sector.server.Exeption.UnauthorizedRequestException;
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
                    User updatedUser = userDao.findById(editedUser.getId()).get();
                    updatedUser = editedUser;
                    userDao.save(updatedUser);
                    return;
                }
                throw new UnauthorizedRequestException("Bad Login");
            }
            throw new UnauthorizedRequestException("Bad Login");
        }
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/deleteUser/{token}/{id}")
    public void deleteUser(@PathVariable(value = "id") Long id, @PathVariable String token) {
        for (UserLogin u: loggedUsersArray) {
            if (u.getToken().toString().equals(token)) {
                User user = userDao.findByEmail(u.getUsername());

                if (user.isPrivilege()) {
                    userDao.deleteById(id);
                    return;
                }
                throw new UnauthorizedRequestException("Bad Login");
            }
            throw new UnauthorizedRequestException("Bad Login");
        }
    }
}
