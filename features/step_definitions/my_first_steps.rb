Given /^I am on the Welcome Screen$/ do
  element_exists("view")
end

Given /^I debug$/ do
  require "pry";

  binding.pry
end
