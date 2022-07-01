package com.rakuten.Newspaper.Entity;

public class Mysubscriptions {
	String newspaperName;
	String SubscriptionType;
	int cost;
	String AgencyName;
	public String getNewspaperName() {
		return newspaperName;
	}
	public void setNewspaperName(String newspaperName) {
		this.newspaperName = newspaperName;
	}
	public String getSubscriptionType() {
		return SubscriptionType;
	}
	public void setSubscriptionType(String subscriptionType) {
		SubscriptionType = subscriptionType;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public String getAgencyName() {
		return AgencyName;
	}
	public void setAgencyName(String agencyName) {
		AgencyName = agencyName;
	}
	public Mysubscriptions(String newspaperName, String subscriptionType, int cost, String agencyName) {
		super();
		this.newspaperName = newspaperName;
		SubscriptionType = subscriptionType;
		this.cost = cost;
		AgencyName = agencyName;
	}
	@Override
	public String toString() {
		return "Mysubscriptions [newspaperName=" + newspaperName + ", SubscriptionType=" + SubscriptionType + ", cost="
				+ cost + ", AgencyName=" + AgencyName + "]";
	}
	
	
	
	
	

}
