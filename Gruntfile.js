
module.exports = function(grunt) {

  //////////////////////////////////////////////////////
  // Init Config
  //////////////////////////////////////////////////////

  grunt.initConfig({
    // Uglify
    uglify: {
      my_target: {
        files: {
          'build/scripts/app.min.js': ['scripts/*.js']
        }
      }
    },
    // CSS Minify
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'styles/css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/styles',
          ext: '.min.css'
        }]
      }
    },
    // HTML Minify
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'index.html': 'index-uncompressed.html'  // 'destination': 'source'
        }
      }
    }
  });

  //////////////////////////////////////////////////////
  // Load Plugins
  //////////////////////////////////////////////////////

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  //////////////////////////////////////////////////////
  // Tasks
  //////////////////////////////////////////////////////
  /* -- Custom Tasks -------------------------------- */
  /* -- Plugin Tasks -------------------------------- */

};
