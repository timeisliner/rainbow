module.exports = grunt => {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    concurrent: {
      starting: {
        tasks: ['nodemon:ep', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    
    nodemon: {
      ep: {
        script: 'src/ep.js',
        options: {
          args: null,  //Array of Strings, List of arguments to be passed to your script.
          nodeArgs: null,  //List of arguments to be passed to node.          
          delay : 7000, //Delay the restart of nodemon by a number of milliseconds when compiling a large amount of files so that the app doesn't needlessly restart after each file is changed.
          env: {
            //PORT: '5455'
          }
        }
      }
    },
    
    jshint: {
      options: {
        jshintrc : 'rb.jshintrc',
        force : true,
        ignores : ['src/libs/**/*.js']
      },
      
      ss: {
        src: ['Gruntfile.js', 'rb.jshintrc']
      },
      ep : {
        src : ['src/ep.js']
      }
      
    },
    
    watch: {//!dir/dontwatch.js
      ss: {
        files: '<%= jshint.ss.src %>',
        tasks: ['jshint:ss'],
        options: {
          reload: true
        }
      },
      ep : {
        files: '<%= jshint.ep.src %>',
        tasks: ['jshint:ep']
      }
    }
  });

  require('load-grunt-tasks')(grunt); //after
  
  grunt.registerTask('default', ['concurrent:starting']);
};