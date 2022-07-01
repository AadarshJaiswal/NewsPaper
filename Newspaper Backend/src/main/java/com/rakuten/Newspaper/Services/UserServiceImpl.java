package com.rakuten.Newspaper.Services;

import java.net.http.HttpRequest;
import java.nio.charset.StandardCharsets;
import java.security.DigestException;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.Cookie;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rakuten.Newspaper.Entity.AddSubscription;
import com.rakuten.Newspaper.Entity.Mysubscriptions;
import com.rakuten.Newspaper.Entity.Newspaper;
import com.rakuten.Newspaper.Entity.Subscription;
import com.rakuten.Newspaper.Entity.User;
import com.rakuten.Newspaper.Entity.Userhome;
import com.rakuten.Newspaper.Entity.Vendor;
import com.rakuten.Newspaper.Repository.NewspaperRepository;
import com.rakuten.Newspaper.Repository.SubscriptionRepository;
import com.rakuten.Newspaper.Repository.UserRepository;
import com.rakuten.Newspaper.Repository.VendorRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userrepo;
	@Autowired
	VendorRepository vendorrepo;
	@Autowired
	NewspaperRepository newsrepo;
	@Autowired
	SubscriptionRepository subrepo;
	private String dbkey="this is newspaper project password key";
	private String lgkey="newspaper login key";
	public boolean addUser(User user)
	{
		User u=userrepo.getUserByEmail(user.getEmail());
		if(u==null) {
			System.out.println(u);
		System.out.println("user===="+userrepo.save(user));
		return true;
		}
		else
		{return false;}
	}
//	public ResponseEntity<?> checkUser(User user,HttpServletRequest req,HttpServletResponse response)
//	{
////		System.out.println(user.getEmail());
////		System.out.println(user.getPassword());
//		try {
//		User u=userrepo.getOne(user.getEmail());
//		System.out.println(u);
//
////		String loginpass=dcrypt(user.getPassword());
//		System.out.println(user.getPassword());
//		if(user.getPassword().equals("123"))
//		{
//			System.out.println("INsIDE COOOKIE 1");
//			Cookie cookie1=new Cookie("username",user.getEmail());
//	          cookie1.setPath("/");
//	          cookie1.setMaxAge(-1);
////	          cookie1.setDomain("http://localhost:4200");
//	          response.addCookie(cookie1);
//	          System.out.println("inside cookies");
//			Cookie cookie2=new Cookie("password","123");
//			 cookie2.setPath("/");
//	// setting -1 means we are creating session cookies i.e when the browser get closed then cookies also expired
//	         cookie2.setMaxAge(-1);
//	         response.addCookie(cookie2);
//	         Cookie cookie3=new Cookie("type","user");
//			 cookie3.setPath("/");
//	// setting -1 means we are creating session cookies i.e when the browser get closed then cookies also expired
//	         cookie3.setMaxAge(-1);
//	         response.addCookie(cookie3);
//	         
//	 		System.out.println(cookie1+" "+cookie2);
//	 		return new ResponseEntity<Object>("LOGIN SUCCESS : Navigating You To Home Page",HttpStatus.ACCEPTED);
//	 		
//		}
//		
//		
//		
//		
//		
//////		String databasepass=dcrypt(u.getPassword());
////		System.out.println("THIS IS LOGIN PASS OF "+loginpass);
////		System.out.println("THIS IS DECRYPTED Login "+user.getPassword());
////		System.out.println("THIS IS DECRYPTED Database "+databasepass);
////		if(u.getPassword().equals(user.getPassword()))
////		{
////			System.out.println("YES CORRET");
////			return u;
////		}
//		
//		}catch (Exception e) {
//			// TODO: handle exception
//			return null;
//		}
////		System.out.println("User inside login"+user);
////		if(user.getPassword().equals(password))
////		return user;
////		return null;
//		return null;
//	}
	@Override
	public List<User> getallUser() {
		return userrepo.findAll();
	}
	public boolean validateUserCookies(HttpServletRequest request) {
		 
		Cookie[] cookieList = request.getCookies();
		if (cookieList == null) {
 System.out.println("cokkies not set ");
			return false;
		}

		// creating an object of loginRequest with the username ie.email and password
		User loginRequest = new User();

		for (Cookie c : cookieList) {

			System.out.println(c.getName() + " is name and value :" + c.getValue());
			if (c.getName().equals("username")) {
				loginRequest.setEmail(c.getValue());
			}
			if (c.getName().equals("password")) {
				loginRequest.setPassword(c.getValue());
			}
		}
		// sending object to validatelogin to check the username and password ;
		return validatLogin(loginRequest);
	}

	private boolean validatLogin(User loginRequest) {
		// checking email

		User userfromdb = null;

		try {
			userfromdb = userrepo.getById(loginRequest.getEmail());
			System.out.println("fetchd from db");
			String databasepass=dcrypt(userfromdb.getPassword(),dbkey);
			String loginpass=dcrypt(loginRequest.getPassword(),lgkey);
			System.out.println("==== "+databasepass);
			System.out.println("=== "+loginpass);
			try {
				if (databasepass.equals(loginpass)) 
					return true;
				
			} catch (Exception e) {}


		} catch (Exception e) {
			return false;
		}
				return false;

	}

	public ResponseEntity<?> loginUser(User loginRequest, HttpServletRequest request,
			HttpServletResponse response) {
		
		if (!validatLogin(loginRequest)) {
 System.out.println("login faild");
			return new ResponseEntity("Incorrect", HttpStatus.NOT_FOUND);
		}

		// seeting cookies
		Cookie cookie1 = new Cookie("username", loginRequest.getEmail());
		cookie1.setPath("/");
//		cookie1.setMaxAge(3600*24*2);
		cookie1.setMaxAge(-1);
		response.addCookie(cookie1);

		Cookie cookie2 = new Cookie("password", loginRequest.getPassword());
		cookie2.setPath("/");
// setting -1 means we are creating session cookies i.e when the browser get closed then cookies also expired
//		cookie2.setMaxAge(3600*24*2);
		cookie2.setMaxAge(-1);
		response.addCookie(cookie2);

		User userType = userrepo.getById(loginRequest.getEmail());
		System.out.println("cokies set");

		loginRequest.setType(userType.getType());
		
		Cookie cookie3 = new Cookie("usertype", loginRequest.getType());
		cookie3.setPath("/"); 
//		cookie3.setMaxAge(3600*24*2);
		cookie3.setMaxAge(-1);
		response.addCookie(cookie3);
		if(loginRequest.getType().equalsIgnoreCase("Vendor"))
		{
			String id=vendorrepo.getId(loginRequest.getEmail());
			System.out.println(id);
			Cookie cookie4 = new Cookie("vendorId", id);
			cookie4.setPath("/"); 
//			cookie3.setMaxAge(3600*24*2);
			cookie4.setMaxAge(-1);
			response.addCookie(cookie4);
			
		}
		
		
		//		List<Users> list = new ArrayList<Users> ();
//		list.add(userType);
		return new ResponseEntity(loginRequest,HttpStatus.ACCEPTED);
	}
	
	
	
	
	
	
	
	
	
	
	private String dcrypt(String cipherText,String secret) {
//	String secret = "this is newspaper project password key";
	System.out.println(cipherText);
	byte[] cipherData = Base64.getDecoder().decode(cipherText);
	byte[] saltData = Arrays.copyOfRange(cipherData, 8, 16);
try {
	MessageDigest md5 = MessageDigest.getInstance("MD5");
	final byte[][] keyAndIV = GenerateKeyAndIV(32, 16, 1, saltData, secret.getBytes(StandardCharsets.UTF_8), md5);
	SecretKeySpec key = new SecretKeySpec(keyAndIV[0], "AES");
	IvParameterSpec iv = new IvParameterSpec(keyAndIV[1]);

	byte[] encrypted = Arrays.copyOfRange(cipherData, 16, cipherData.length);
	Cipher aesCBC = Cipher.getInstance("AES/CBC/PKCS5Padding");
	aesCBC.init(Cipher.DECRYPT_MODE, key, iv);
	byte[] decryptedData = aesCBC.doFinal(encrypted);
	String decryptedText = new String(decryptedData, StandardCharsets.UTF_8);

	System.out.println("THIS IS DESCRYPT"+decryptedText);
	return decryptedText;
}catch (Exception e) {
// TODO: handle exception
System.out.print(e);
return null;
}
}
	public static byte[][] GenerateKeyAndIV(int keyLength, int ivLength, int iterations, byte[] salt, byte[] password, MessageDigest md) {

        int digestLength = md.getDigestLength();
        int requiredLength = (keyLength + ivLength + digestLength - 1) / digestLength * digestLength;
        byte[] generatedData = new byte[requiredLength];
        int generatedLength = 0;

        try {
            md.reset();

            // Repeat process until sufficient data has been generated
            while (generatedLength < keyLength + ivLength) {

                // Digest data (last digest if available, password data, salt if available)
                if (generatedLength > 0)
                    md.update(generatedData, generatedLength - digestLength, digestLength);
                md.update(password);
                if (salt != null)
                    md.update(salt, 0, 8);
                md.digest(generatedData, generatedLength, digestLength);

                // additional rounds
                for (int i = 1; i < iterations; i++) {
                    md.update(generatedData, generatedLength, digestLength);
                    md.digest(generatedData, generatedLength, digestLength);
                }

                generatedLength += digestLength;
            }

            // Copy key and IV into separate byte arrays
            byte[][] result = new byte[2][];
            result[0] = Arrays.copyOfRange(generatedData, 0, keyLength);
            if (ivLength > 0)
                result[1] = Arrays.copyOfRange(generatedData, keyLength, keyLength + ivLength);

            return result;

        } catch (DigestException e) {
            throw new RuntimeException(e);

        } finally {
            // Clean out temporary data
            Arrays.fill(generatedData, (byte)0);
        }
    }
	@Override
	public List<Userhome> getNewspaper() {
		List<Userhome> al=userrepo.getNewspaper();
		System.out.println(al);
		return al;
	}
	@Override
	public Newspaper getNewspapersbyIdSubscribe(long id) {
		Newspaper n=newsrepo.getNewspaperByNewspaperId(id);
		System.out.println("this is output "+n);
		return n;
	}
	@Override
	public boolean deleteUser(String emailid) {
		try
		{
			System.out.println(userrepo.getById(emailid));
			subrepo.deleteByUserEmailId(emailid);
			System.out.println("deleteByUserEmailId");
			userrepo.delete(userrepo.getById(emailid));
			return true;
		}
		catch (Exception e) {
			return false;
		}
	}
	public Subscription subscribeNewspaper(AddSubscription sub) {
		System.out.println(sub.getEmailId());
		System.out.println(sub.getVendorId());
		Subscription sg=new Subscription();
		User u=new User();
		u=userrepo.getUserByEmail(sub.getEmailId());
		Vendor v =vendorrepo.getVendorById(sub.getVendorId());
//		v.setVendorId(sub.getVendorId());
		sg.setCost(sub.getCost());
		sg.setNewspaperId(sub.getNewspaperId());
		sg.setSubscribetype(sub.getsubscribetype());
		sg.setVendor(v);
		sg.setUser(u);
//		Vendor v=vendorrepo.getVendorById((sub.getVendorId()));
//		System.out.println(v);
//		long cost, long newspaperId, String subscribetype, Vendor vendor, User user
//		sub.getCost(),sub.getNewspaperId(),sub.getSubscriptionType(),v,u
		Subscription s =new Subscription();
		System.out.println(sg);
//		long cost, long newspaperId, String subscribetype, Vendor vendor, User user
		
		int a=subrepo.storeSubscription(sub.getCost(),sub.getNewspaperId(),sub.getsubscribetype(),v,u);
		System.out.println(a);
		return sg;

	}
	@Override
	public List<Subscription> getallSubscription() {
		return subrepo.getallSubscription();
	}
	@Override
	public List<Mysubscriptions> getmySubscription(String emailId) {
		// TODO Auto-generated method stub
		
		List<Integer> al=newsrepo.getSubscriptionNewspaperId();
		Map<Long,String> map=new HashMap<Long,String>();  
		for(int i=0;i<al.size();i++)
		{
			map.put((long)al.get(i), newsrepo.getByNewspaperNameById(al.get(i)));
		}
		ArrayList<Mysubscriptions> mysublist=new ArrayList<>();
		for(int i=0;i<subrepo.getmySubscription(emailId).size();i++)
		{
		Subscription s=subrepo.getmySubscription(emailId).get(i);
	      try {
	    	  Mysubscriptions sub=new Mysubscriptions(map.get(s.getNewspaperId()), s.getSubscribetype(),(int)s.getCost(), s.getVendor().getAgencyName());
//				  Mysubscriptions sub=new Mysubscriptions(map.get(s.getNewspaperId()), s.getSubscribetype(),(int)s.getCost(), s.getUser().get);
//				
//	    	  System.out.println(sub);
				mysublist.add(sub);
	      }
	      catch (Exception e) {
			// TODO: handle exception
	    	  System.out.println(e);
	    	  return null;
		}
		}
	      return mysublist;
	}

	
}
