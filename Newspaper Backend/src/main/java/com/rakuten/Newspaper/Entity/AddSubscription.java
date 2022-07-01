package com.rakuten.Newspaper.Entity;

public class AddSubscription {
	long subscribeId;
	long newspaperId;
	String subscribetype;
	int cost;
	String emailId;
	long vendorId;
	
	@Override
	public String toString() {
		return "AddSubscription [subscribeId=" + subscribeId + ", newspaperId=" + newspaperId + ", subscribetype="
				+ subscribetype + ", cost=" + cost + ", emailId=" + emailId + ", vendorId=" + vendorId + "]";
	}
	public AddSubscription(long subscribeId, long newspaperId, String subscribetype, int cost, String emailId,
			long vendorId) {
		super();
		this.subscribeId = subscribeId;
		this.newspaperId = newspaperId;
		this.subscribetype = subscribetype;
		this.cost = cost;
		this.emailId = emailId;
		this.vendorId = vendorId;
	}
	public long getSubscribeId() {
		return subscribeId;
	}
	public void setSubscribeId(long subscribeId) {
		this.subscribeId = subscribeId;
	}
	public long getNewspaperId() {
		return newspaperId;
	}
	public void setNewspaperId(long newspaperId) {
		this.newspaperId = newspaperId;
	}
	public String getsubscribetype() {
		return subscribetype;
	}
	public void setsubscribetype(String subscribetype) {
		this.subscribetype = subscribetype;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public long getVendorId() {
		return vendorId;
	}
	public void setVendorId(long vendorId) {
		this.vendorId = vendorId;
	}

}
