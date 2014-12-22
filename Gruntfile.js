/* jshint camelcase: false */
"use strict";

module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jasmine-node");
  grunt.loadNpmTasks("grunt-shell");

  var dir = "app/outer_hexagon/adapters/titaniumView/navigationView/symbolView";
  var browserify = "browserify " + dir + "/main.js > " + dir + "/bundle.js";

  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "Resources/**/*.js",
        "spec/**/*.js"
      ],
      options: {
        jshintrc: true
      }
    },
    jasmine_node: {
      all: ["spec"],
      options: {
        useHelpers: true
      }
    },
    shell: {
      // TODO: cucumber colours
      cucumber_ios: {
        command: [
          browserify,
          "rm -rf build",
          "ti build --platform ios s --build-only",
          "echo -e '\n' | ti calabash --platform ios"
        ].join("&&"),
        options: {
          execOptions: {
            maxBuffer: 10000 * 1024
          }
        }
      },
      cucumber_android: {
        command: [
          browserify,
          "/Applications/Genymotion.app/Contents/MacOS/player --vm-name s4",
          "ti calabash --platform android --device-id s4 && kill %1"
        ].join("&"),
        options: {
          execOptions: {
            maxBuffer: 10000 * 1024
          }
        }
      },
      browserify: {
        command: browserify
      }
    }
  });

  grunt.registerTask("default", [
    "jasmine_node",
    "jshint",
    "shell:browserify",
    "shell:cucumber_android",
    "shell:cucumber_ios"
  ]);
};
