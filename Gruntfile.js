/*global module:false*/
module.exports = function(grunt) {

  var src = 'src',
      pub =  'pub';

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-lessless');
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n'// +
        // '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        // '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        // ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    less: {
      all: {
        src: src + '/style.less',
        dest: pub + '/style.css',
        options: {
          compress: true
        }
      }
    },
    htmllint: {
        all: ["src/*.html"]
    },
    htmlbuild: {
      dist: {
        src: src + '/index.html',
        dest: pub,
        options: {
          beautify: false,
          prefix: '',
          relative: true
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: src, src: ['png/*'], dest: pub},
          {expand: true, cwd: src, src: ['style.css'], dest: pub}
        ]
      }
    },
    lessless: {
      buildDir: pub,
      styleDirs: [src]
    }
  });

  // Default task.
  // grunt.registerTask('default', ['less', /*'htmllint',*/ 'htmlbuild', 'copy']);
  grunt.registerTask('default', ['htmlbuild', 'copy', 'less', 'lessless']);

};
