/*global module:false*/
module.exports = function(grunt) {

  var src = 'src',
      pub =  'pub';

  grunt.loadNpmTasks('grunt-less');
  grunt.loadNpmTasks('grunt-html');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    less: {
      all: {
        src: src + '*.less',
        dest: src + 'style.css',
        options: {
          compress: true
        }
      }
    },
    htmllint: {
        all: ["src/*.html"]
    }
  });

  // Default task.
  //grunt.registerTask('default', 'lint qunit concat min');
  grunt.registerTask('default');

};
