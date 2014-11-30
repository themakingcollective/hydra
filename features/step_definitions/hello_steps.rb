When(/^I touch "(.*)"$/) do |id|
  touch(expression(id))
end

Then(/^"(.*)" should display "(.*)"$/) do |id, text|
  element = query(expression(id)).first
  assert_equal(text, element["text"])
end

When(/^I debug$/) do
  require "pry"
  binding.pry
end
