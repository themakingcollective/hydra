Given(/^I have opened the app$/) do
  # noop
end

When(/^I touch "(.*)"$/) do |id|
  touch(expression(id))
end

Then(/^"(.*)" should display "(.*)"$/) do |id, text|
  element = query(expression(id)).first
  expect(element["text"]).to eq(text)
end

Then(/^I should see "(.*)"$/) do |id|
  check_element_exists(expression(id))
end

Then(/^I should not see "(.*)"$/) do |id|
  check_element_does_not_exist(expression(id))
end

When(/^I debug$/) do
  require "pry"
  binding.pry
end
