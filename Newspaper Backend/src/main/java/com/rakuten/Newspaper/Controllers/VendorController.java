package com.rakuten.Newspaper.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rakuten.Newspaper.Entity.*;
import com.rakuten.Newspaper.Services.*;
@CrossOrigin("http://localhost:4200")
@RestController
public class VendorController {
	@Autowired
	private VendorService vendorService;
	@Autowired
	private UserService userservice;
	
	
	@PostMapping("/addvendor")
	public Vendor_User addVendor(@RequestBody Vendor_User vendor) {
		return this.vendorService.addVendor(vendor);
	}
	@PutMapping("/updateVendor")
	public boolean updateVendor(@RequestBody Vendor_User vendor) {
		System.out.println("This is Json"+vendor);
		return this.vendorService.updateVendor(vendor);
	}
	
	
	
	@GetMapping("/getVendorList")
	public List<Vendor_User> getVendor() {
		return this.vendorService.getVendor();
	}
	@DeleteMapping("/deleteVendor/{emailId}")
	public boolean deleteVendor(@PathVariable String emailId)
	{
		return this.vendorService.deleteVendor(emailId);
	}
	@PostMapping("/vendor")
	public Newspaper addNewspaper(@RequestBody AddNewspaper newspaper)
	{
		System.out.println("this is add newspaper"+newspaper);
		return this.vendorService.addNewspaper(newspaper);
	}
	@GetMapping("/getNewspapers")
	public List<Newspaper> getNewspaper()
	{
		return this.vendorService.getNewspaper();
	}
	@GetMapping("/getNewspapers/{id}")
	public List<Newspaper> getNewspaperById(@PathVariable String id) {
		return this.vendorService.getNewspaperById(id);
	}
	@DeleteMapping("deleteNewspaper/{id}")
	public boolean deleteNewspaper(@PathVariable long id)
	{
		return this.vendorService.deleteNewspaper(id);
	}
	@PutMapping("/updateNewspaper")
	public Newspaper updateNewspaper(@RequestBody Newspaper newspaper) {
//		System.out.println("This is Json"+newspaper);
		return this.vendorService.updateNewspaper(newspaper);
	}
	@GetMapping("/getMySubscriberList/{emailId}")
	public List<Mysubscriptions> getmySubscription(@PathVariable String emailId)
	{
		System.out.println("Inside My Subscriptions");
		return this.vendorService.getSubscriptionList(emailId);
	}
	

}
