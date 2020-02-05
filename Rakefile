# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

Rake::Task["assets:clean"].enhance do
#You probally don't need to loop the app/assets folder, just remove it. I need to test this
  ["#{Dir.pwd}/public/", "#{Dir.pwd}/app/assets/"].each do |dir_path|
    records = Dir.glob("#{dir_path}**/*")
    records.each do |f|
      if !(f =~ /manifest.*.json$/)
        File.delete(f) if File.file?(f)
        puts "removing #{f}"
      end
    end
    puts Dir.glob("#{dir_path}**/*")
  end
end