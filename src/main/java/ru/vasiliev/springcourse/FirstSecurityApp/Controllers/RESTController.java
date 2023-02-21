package ru.vasiliev.springcourse.FirstSecurityApp.Controllers;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vasiliev.springcourse.FirstSecurityApp.models.User;
import ru.vasiliev.springcourse.FirstSecurityApp.services.UserService;


import java.util.List;

@RestController
@RequestMapping("/rest")
public class RESTController {
    private final UserService userService;

    public RESTController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAll() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable("id") int id) {
        return userService.findOne(id);
    }

    @PostMapping
    public ResponseEntity<HttpStatus> create(@RequestBody User user) {
        userService.saveUser(user);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PatchMapping()
    public User update(@RequestBody User user) {
        userService.update(user);
        return userService.findOne(user.getId());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("id") int id) {
        userService.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
