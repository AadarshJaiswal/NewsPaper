package com.rakuten.Newspaper.Controllers;

import java.nio.charset.StandardCharsets;
import java.security.DigestException;
import java.security.MessageDigest;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rakuten.Newspaper.Entity.AddSubscription;
import com.rakuten.Newspaper.Entity.Mysubscriptions;
import com.rakuten.Newspaper.Entity.Newspaper;
import com.rakuten.Newspaper.Entity.Subscription;
import com.rakuten.Newspaper.Entity.User;
import com.rakuten.Newspaper.Entity.Userhome;
import com.rakuten.Newspaper.Repository.UserRepository;
import com.rakuten.Newspaper.Services.UserService;
import javax.crypto.*;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;
@RestController
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
public class UserController {
	@Autowired
	UserService userservice;
	
	
	@PostMapping("/signup")
	public boolean addUser(@RequestBody User user)
	{	
		return this.userservice.addUser(user);
	}
	@PostMapping("/loginuser")
	public ResponseEntity<?> userLogin(@RequestBody User user,HttpServletRequest req,HttpServletResponse response)
	{		
//		System.out.println("This is encrpted "+user.getPassword());
		return this.userservice.loginUser(user, req,response);
	}	
	@GetMapping("/allusers")
	public List<User> getallUser()
	{
		return this.userservice.getallUser();
	}
	@GetMapping("/allsubscription")
	public List<Subscription> getallSubscription()
	{
		return this.userservice.getallSubscription();
	}
	@GetMapping("/mysubscription/{emailId}")
	public List<Mysubscriptions> getmySubscription(@PathVariable String emailId)
	{
		System.out.println("Inside My Subscriptions");
		return this.userservice.getmySubscription(emailId);
	}
	
	@GetMapping("/userhomedata")
	public List<Userhome> getNewspaper()
	{
		return this.userservice.getNewspaper();
	}
	
	@GetMapping("/subscribe/{id}")
	public Newspaper getNewspapersbyIdSubscribe(@PathVariable long id)
	{
		return this.userservice.getNewspapersbyIdSubscribe(id);
	}
	@DeleteMapping("deleteuser/{emailid}")
	public boolean deleteUser(@PathVariable String emailid)
	{
		return this.userservice.deleteUser(emailid);
	}
	@PostMapping("/subscribeNewspaper")
	public Subscription subscribeNewspaper(@RequestBody AddSubscription subscription) {
//		System.out.println("UserId : "+subscription.getEmailId());
		System.out.println("from controller; :"+subscription);
		return this.userservice.subscribeNewspaper(subscription);
	}
	
	
}
