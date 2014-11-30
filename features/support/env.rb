if ENV['PLATFORM'] == 'android'
  require 'calabash-android/operations'

  World(Calabash::Android::Operations)

  Before do |scenario|
    uninstall_apps
    install_app(ENV['TEST_APP_PATH'])
    install_app(ENV['APP_PATH'])
    start_test_server_in_background
  end

  After do |scenario|
    shutdown_test_server
  end

  def expression(accessibility_label)
    "* contentDescription:'#{accessibility_label}.'"
  end
else
  require 'calabash-cucumber/operations'
  require 'calabash-cucumber/launcher'

  World(Calabash::Cucumber::Operations)

  Before do |scenario|
    @calabash_launcher = Calabash::Cucumber::Launcher.new
    @calabash_launcher.relaunch
    @calabash_launcher.calabash_notify(self)
  end

  After do |scenario|
    calabash_exit
    @calabash_launcher.stop if @calabash_launcher.active?
  end

  at_exit do
    launcher = Calabash::Cucumber::Launcher.new
    Calabash::Cucumber::SimulatorHelper.stop if launcher.simulator_target?
  end

  def expression(accessibility_label)
    "* marked:'#{accessibility_label}'"
  end
end
