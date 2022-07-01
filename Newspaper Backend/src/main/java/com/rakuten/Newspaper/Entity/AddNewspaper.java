package com.rakuten.Newspaper.Entity;

public class AddNewspaper {
	@Override
	public String toString() {
		return "AddNewspaper [newspaperName=" + newspaperName + ", yearlyPrice=" + yearlyPrice + ", monthlyPrice="
				+ monthlyPrice + ", weeklyPrice=" + weeklyPrice + ", vendorId=" + vendorId + "]";
	}
	String newspaperName;
	int yearlyPrice;
	int monthlyPrice;
	int weeklyPrice;
	String vendorId;
	public AddNewspaper(String newspaperName, int yearlyPrice, int monthlyPrice, int weeklyPrice, String vendorId) {
		super();
		this.newspaperName = newspaperName;
		this.yearlyPrice = yearlyPrice;
		this.monthlyPrice = monthlyPrice;
		this.weeklyPrice = weeklyPrice;
		this.vendorId = vendorId;
	}
	public String getNewspaperName() {
		return newspaperName;
	}
	public void setNewspaperName(String newspaperName) {
		this.newspaperName = newspaperName;
	}
	public int getYearlyPrice() {
		return yearlyPrice;
	}
	public void setYearlyPrice(int yearlyPrice) {
		this.yearlyPrice = yearlyPrice;
	}
	public int getMonthlyPrice() {
		return monthlyPrice;
	}
	public void setMonthlyPrice(int monthlyPrice) {
		this.monthlyPrice = monthlyPrice;
	}
	public int getWeeklyPrice() {
		return weeklyPrice;
	}
	public void setWeeklyPrice(int weeklyPrice) {
		this.weeklyPrice = weeklyPrice;
	}
	public String getVendorId() {
		return vendorId;
	}
	public void setVendorId(String vendorId) {
		this.vendorId = vendorId;
	}

}
