package com.rakuten.Newspaper.Services;

import java.util.List;

import com.rakuten.Newspaper.Entity.AddNewspaper;
import com.rakuten.Newspaper.Entity.Mysubscriptions;
import com.rakuten.Newspaper.Entity.Newspaper;
import com.rakuten.Newspaper.Entity.Vendor_User;

public interface VendorService {
	public Vendor_User addVendor(Vendor_User vendor);
	public List<Vendor_User> getVendor();
	public boolean deleteVendor(String emailId);
	public boolean updateVendor(Vendor_User vendor);
	public Newspaper addNewspaper(AddNewspaper newspaper);
	public List<Newspaper> getNewspaper();
	public boolean deleteNewspaper(long id);
	public Newspaper updateNewspaper(Newspaper newspaper);
	public List<Newspaper> getNewspaperById(String id);
	public List<Mysubscriptions> getSubscriptionList(String emailId);

}
