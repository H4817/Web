module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        eslint: {
            src: ['src/Scripts/*.js'],
            options: {
                configFile: "eslint.json"
            }
        }

    });
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['eslint']);
};
