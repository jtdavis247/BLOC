require 'spec_helper'

describe "Static pages" do

  describe "Home page" do

    it "should have the title 'Home'" do
      visit '/static_pages/home'
      page.should have_selector('title',
                        :text => "Learn Game Development Now | Home")
    end
  end
end
