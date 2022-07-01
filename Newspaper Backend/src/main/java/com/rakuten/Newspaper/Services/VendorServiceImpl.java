package com.rakuten.Newspaper.Services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import com.rakuten.Newspaper.Repository.*;
import com.rakuten.Newspaper.Services.*;
import com.rakuten.Newspaper.Entity.*;
import java.lang.*;

@Service
public class VendorServiceImpl implements VendorService  {
	@Autowired
	private VendorRepository VendorRepository;
	@Autowired
	private NewspaperRepository NewsRepository;
	@Autowired
	private SubscriptionRepository subRepo;
	@Autowired
	private UserRepository userRepo;
	
	Vendor vn=new Vendor();
	User us=new User();
	
	
	public Vendor_User addVendor(Vendor_User vendor)
	{
		System.out.println("before insert");
		User u=userRepo.getUserByEmail(vendor.getEmail());
		if(u==null) {		
			if(VendorRepository.getVendorId()!=null)
			{
		vn.setVendorId(VendorRepository.getVendorId()+1);
			}
			else
			{
				vn.setVendorId(1);
			}
		System.out.print(vendor.toString());
		vn.setAgencyName(vendor.getAgencyName());
		us.setName(vendor.getName());
		us.setContact(vendor.getContact());
		us.setEmail(vendor.getEmail());
		us.setPassword(vendor.getPassword());
//		us.setVendor(vendor.set);
		us.setType("Vendor");
		vn.setUsers(us);
		System.out.println("This is vendor"+vn.toString());
		VendorRepository.save(vn);
		System.out.println("Save IN VENDOR And User both");
		return vendor;
		}
		else
		{
			return null;
		}
	}
	
	public boolean updateVendor(Vendor_User vu)
	{
		System.out.print(vu);
		int a=VendorRepository.updateOnVendor(vu.getAgencyName(),vu.getEmail());
		if(a!=0) {
		int b=VendorRepository.updateOnUser(vu.getName(),vu.getContact(),vu.getEmail());
		System.out.println(a+" "+b);
		if(a==1&&b==1)
		return true;
		}
		return false;
	}
	public List<Vendor_User> getVendor()
	{
		List<Vendor_User> alss = VendorRepository.getVendor();

		return alss;
	}
	public boolean deleteVendor(String emailId)
	{

//		 List <Vendor> al=VendorRepository.findAll();
//		  for(int i=0;i<al.size();i++)
//		  {
//			  User us=al.get(i).getUsers();
//			  if(al.get(i).getUsers().getEmail().equalsIgnoreCase(emailId))
//			  {
//				  VendorRepository.delete(al.get(i));
//				 al.remove(i);
//				 return true;
//			  }
//		  }
		try {
			long id=Long.parseLong(VendorRepository.getId(emailId));
		List<Subscription> subList=subRepo.getByVendorId(id);
//		System.out.println(subList.size());
		for(int i=0;i<subList.size();i++)
		{
			subRepo.deleteBySubId(subList.get(i).getId());	
		}
		List<Newspaper> newsList=NewsRepository.getNewspaperByVendorId(id);
		for(int i=0;i<newsList.size();i++)
		{
			System.out.println("news id "+newsList.get(i).getNewspaperId());
			NewsRepository.deleteNewspaperById(newsList.get(i).getNewspaperId());	
			System.out.println(i+1);
		}
		int a;
		try
		{
			System.out.println("deleteByUserEmailId");
			 a=VendorRepository.deleteByVendorId(id);
//			userRepo.delete();
			System.out.println(userRepo.getById(emailId));
				
		}
		catch (Exception e) {
			return false;
		}

//		int a =VendorRepository.deleteVendorByEmailId(emailId);
		if(a==1)
			return true;
		else		 
		  return false;
		}catch (Exception e) {
			return false;
			// TODO: handle exception
		}
	}

	@Override
	public Newspaper addNewspaper(AddNewspaper newspaper) {
//		long id=Long.parseLong(newspaper.getVendorId());
//		Vendor v=new Vendor();
//		v.setVendorId(id);
//		Newspaper n=new Newspaper(newspaper.getNewspaperName(),
//				newspaper.getWeeklyPrice(),newspaper.getMonthlyPrice(),
//				newspaper.getYearlyPrice(),v);
//		
//		String newspaperName, long weeklyPrice, long monthlyPrice, long yearlyPrice,
//		Vendor vendor
//		long vendorId, String agencyName
		Vendor v=VendorRepository.getVendorById(Long.parseLong(newspaper.getVendorId()));
		vn.setVendorId(v.getVendorId());
		vn.setAgencyName(v.getAgencyName());
		System.out.println(vn);
		Newspaper n=new Newspaper(newspaper.getNewspaperName(),newspaper.getWeeklyPrice(),
				newspaper.getMonthlyPrice(),newspaper.getYearlyPrice(),v);
		System.out.println(n);
		int a=NewsRepository.storeNewspaper(NewsRepository.getNewspaperId()!=null?NewsRepository.getNewspaperId()+1:1,newspaper.getNewspaperName(),newspaper.getWeeklyPrice(),
				newspaper.getMonthlyPrice(),newspaper.getYearlyPrice(),v);
		if(a==1)
		return n;
		else
			return null;
	}

	@Override
	public List<Newspaper> getNewspaper() {
		List<Newspaper> al=NewsRepository.findAll();
		return al;
	}

	@Override
	public boolean deleteNewspaper(long id) {
		int a=NewsRepository.deleteNewspaperById(id);
		if(a==1)
			return true;
		else
			return false;
	}

	@Override
	public Newspaper updateNewspaper(Newspaper newspaper) {
		int a=NewsRepository.updateNewspaper(newspaper.getNewspaperId(),newspaper.getNewspaperName(),newspaper.getWeeklyPrice(),newspaper.getMonthlyPrice(),newspaper.getYearlyPrice());
		if(a==1)
		return newspaper;
		else
		return null;
	}

	@Override
	public List<Newspaper> getNewspaperById(String id) {
		long vendorId=Long.parseLong(id);
		List<Newspaper> al= NewsRepository.getNewspaperById(vendorId);
		
		return al;
	}

	@Override
	public List<Mysubscriptions> getSubscriptionList(String emailId) {
		List<Integer> al=NewsRepository.getSubscriptionNewspaperId();
		Map<Long,String> map=new HashMap<Long,String>();  
		for(int i=0;i<al.size();i++)
		{
			map.put((long)al.get(i), NewsRepository.getByNewspaperNameById(al.get(i)));
		}
		System.out.println("HELLLO1"+emailId);
		System.out.println(VendorRepository.getId(emailId));
		try {
		int id=Integer.parseInt(VendorRepository.getId(emailId));
//		System.out.println("helllo2"+subRepo.getmySubscriptionById(id));
		ArrayList<Mysubscriptions> mysublist=new ArrayList<>();
//		System.out.println("this is "+subRepo.getmySubscriptionById(id));
		for(int i=0;i<subRepo.getmySubscriptionById(id).size();i++)
		{
		Subscription s=subRepo.getmySubscriptionById(id).get(i);
	      try {
	    	  Mysubscriptions sub=new Mysubscriptions(map.get(s.getNewspaperId()), s.getSubscribetype(),(int)s.getCost(), s.getUser().getEmail());
//				  Mysubscriptions sub=new Mysubscriptions(map.get(s.getNewspaperId()), s.getSubscribetype(),(int)s.getCost(), s.getUser().get);
//				
	    	  System.out.println(sub);
				mysublist.add(sub);
	      }
	      catch (Exception e) {
			// TODO: handle exception
	    	  System.out.println(e);
	    	  return null;
		}
		}
		System.out.println(mysublist);
	      return mysublist;
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println(e);
			return null;
		}
	}

	}


