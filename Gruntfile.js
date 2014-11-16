/* jshint node:true */
'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.initConfig({
    jshint: {
      options: { jshintrc: true },
      all: ['Gruntfile.js', 'app/**/*.js', 'spec/**/*.js']
    },
    jasmine: {
      options: {
        specs: 'spec/**/*Spec.js',
        outfile: '.jasmine.html'
      },
      src: 'app/**/*.js'
    }
  });

  grunt.registerTask('default', ['jasmine', 'jshint']);
};
