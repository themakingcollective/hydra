"use strict";

module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "app/**/*.js",
        "spec/**/*.js"
      ],
      options: {
        jshintrc: true
      }
    }
  });

  grunt.registerTask("default", ["jshint"]);
};
