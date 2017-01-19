module.exports = function(grunt) {
	//minify js documents and combine into one js file
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//loading watch plugin
	grunt.loadNpmTasks('grunt-contrib-watch');
	//loading compass plugin
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					//look for scripts.js in development folder and compress it into procution js file
					'_/production/js/script.js': ['_/development/js/*.js']
				} //files
			} //my_target
		}, //uglify

		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}//options
			}//dev
		},//compass

		watch: {
			//livereload, won't work in all browsers but works in Chrome
			options: {livereload: true }, 
			//watching for js changes
			scripts: {
				//watch:
				files: ['_/development/js/*.js'],
				//execute:
				tasks: ['uglify']
			},//scripts

			sass: {
				//watch:
				files: ['_/development/sass/*.scss'],
				//execute:
				tasks: ['compass']
			},//sass

			//wathcing for html changes
			html: {
				//watch
				files: ['*.html']
			}

		} //watch

	}); //initConfig

	//creating the default grunt task
	grunt.registerTask('default', 'watch');
}; //exports