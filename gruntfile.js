module.exports = function(grunt)
{
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [['babelify', {presets: ['es2015']}]]
                },

            files: {
                'app/main.js': ['dev/JS/main.js'],
                'app/init.js': ['dev/JS/init.js']
                }
            }
        },


        stylus: {
            build: {
                options: {
                    compress: true
                },
                files: {
                    'app/style.css': 'dev/Stylus/*styl'
                }
            }
        },


        // Ajoute les préfixes CSS
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: ['> 0%']})
                ]
            },
            dist: {
                files: {
                    'app/style.css': 'app/style.css'
                }
            }
        },


        watch: {
            js: {
                files: 'dev/JS/*.js',
                tasks: ["browserify"]
            },
            css: {
                files: 'dev/Stylus/*styl',
                tasks: ["css"],
                options: {
                    livereload: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['browserify', 'stylus']);
    grunt.registerTask('css', ['stylus', 'postcss']);
};