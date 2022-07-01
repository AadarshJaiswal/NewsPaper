package com.rakuten.Newspaper.Entity;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToOne;
import javax.persistence.Transient;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	private long cost;
	private long newspaperId;
	private String subscribetype;

	@ManyToOne(targetEntity=User.class,cascade=CascadeType.ALL) 
	private User user;
	
	@OneToOne(targetEntity=Vendor.class,cascade=CascadeType.ALL)  
	private Vendor vendor;



	public Subscription() {
		super();
		// TODO Auto-generated constructor stub
	}



	public int getId() {
		return Id;
	}



	public void setId(int id) {
		Id = id;
	}



	public long getCost() {
		return cost;
	}



	public void setCost(long cost) {
		this.cost = cost;
	}



	public long getNewspaperId() {
		return newspaperId;
	}



	public void setNewspaperId(long newspaperId) {
		this.newspaperId = newspaperId;
	}



	public String getSubscribetype() {
		return subscribetype;
	}



	public void setSubscribetype(String subscribetype) {
		this.subscribetype = subscribetype;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	public Vendor getVendor() {
		return vendor;
	}



	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}



	public Subscription(int id, long cost, long newspaperId, String subscribetype) {
		super();
		Id = id;
		this.cost = cost;
		this.newspaperId = newspaperId;
		this.subscribetype = subscribetype;
	
//		this.user = user;
//		this.vendor = vendor;
	}
	public Subscription( long cost, long newspaperId, String subscribetype, Vendor vendor, User user
			) {
		super();
		this.cost = cost;
		this.newspaperId = newspaperId;
		this.subscribetype = subscribetype;
//		this.vendorId = vendorId;
//		this.emailId = emailId;
		this.user = user;
		this.vendor = vendor;
	}

	@Override
	public String toString() {
		return "Subscription [Id=" + Id + ", cost=" + cost + ", newspaperId=" + newspaperId + ", subscribetype="
				+ subscribetype + ", vendorId=" + vendor + ", emailId=" + user + "]";
	}

	
}