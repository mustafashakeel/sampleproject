
module.exports = function(grunt){

	grunt.initConfig({
		jshint:{
			all:['js/script.js']
		},
		concat: {
		   
		    dist: {
		    	// files:{
		    	// 	'js/main.js':['js/script.js','js/script2.js']
		    	// }
		      src: ['js/script.js','js/script2.js'],
		      dest: 'js/main.js',
		    },
		 },
		csslint:{
			all:['css/style.css']
		},
		sass: {                              // Task 
	      dist:{
	      	files: {                         // Dictionary of files 
	        'css/style.css': 'sass/style.scss'
	      	}
	      }
	    },
	  
		cssmin:{
			dist:{
				files:{
					'css/styles.min.css':['css/style.css']
				}
			}
		},
		autoprefixer:{
			all:{
				src:'css/style.min.css'
			}
		},
		watch: {
		    sass: {
		      // We watch and compile sass files as normal but don't live reload here 
		      files: ['sass/*.scss'],
		      tasks: ['sass'],
		    },
		    js:{
		    	files:['js/*.js'],
		    	tasks:['concat','jshint']
		    }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-concat');
	


	
	grunt.registerTask('default',[
		'watch',
		'jshint',
		'concat',
		'sass',
		'csslint',
		'cssmin',
		'autoprefixer'	
	]);

};