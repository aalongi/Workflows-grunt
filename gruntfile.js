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
					//look for scripts.js in components folder and compress it into new js file
					'_/js/script.js': ['_/components/js/*.js']
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
				files: ['_/components/js/*.js'],
				//execute:
				tasks: ['uglify']
			},//scripts

			sass: {
				//watch:
				files: ['_/components/sass/*.scss'],
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