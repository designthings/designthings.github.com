module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['Gruntfile.js']//, 'lib/**/*.js', 'test/**/*.js']
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        }
    });

    grunt.registerTask('default', ['jshint', 'compass']);
};