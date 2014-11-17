/* jshint node:true */
"use strict";

module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-jasmine");

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
    },
    jasmine: {
      src: "app/**/*.js",
      options: {
        specs: "spec/**/*Spec.js",
        outfile: ".jasmine.html",
        helpers: "spec/specHelper.js"
      }
    }
  });

  grunt.registerTask("default", ["jasmine", "jshint"]);
};
