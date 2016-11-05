module.exports = function(grunt)
{
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [['babelify', {presets: ['es2015']}]]
                },
                src: ['app/JS-src/main.js'],
                dest: 'app/JS/main.js',
            }
        },


        stylus: {
            build: {
                options: {
                    compress: true
                },
                files: {
                    'app/style.css': 'app/Stylus/*styl'
                }
            }
        },


        watch: {
            scripts: {
                files: 'app/JS-src/*.js',
                tasks: ["browserify"]
            },
            stylus: {
                files: ['app/Stylus/**/*'],
                tasks: ['stylus'],
                options: {
                    livereload: true,
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['browserify', 'stylus']);
};