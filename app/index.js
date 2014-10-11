'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var capitalize = require('capitalize');

var JqWidgetGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the astonishing JqWidget generator!'
    ));

    var prompts = [{
      name: 'widgetName',
      message: 'What is your widget name?',
      default: this.determineAppname()
    },{
      name: 'authorName',
      message: 'What is your name?',
      default: ''
    },{
      name: 'authorMail',
      message: 'What is your contact e-mail?',
      default: ''
    }];

    this.prompt(prompts, function (props) {
      this.widgetName = props.widgetName;
      this.authorName = props.authorName;
      this.authorMail = props.authorMail;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('plugin');
      this.dest.mkdir('plugin/coffee');
      this.dest.mkdir('plugin/less');
      this.dest.mkdir('plugin/styles');
      this.dest.mkdir('test');
      this.dest.mkdir('test/casperjs');

      var context = {
        plugin_name: this._.classify(this.widgetName),
        plugin_full_name: capitalize.words(this.widgetName),
        author_name: capitalize.words(this.authorName),
        author_mail: this.authorMail,

        // Gruntfile variables fix
        yeoman: {
          app: '<%= yeoman.app %>',
          dist: '<%= yeoman.dist %>',
        },
        connect: {
          options: {
            livereload: '<%= connect.options.livereload %>'
          }
        }
      };

      // Main files
      this.template("package.json", "package.json", context);
      this.template("bower.json", "bower.json", context);
      this.template("README.md", "README.md", context);
      this.template("Gruntfile.js", "Gruntfile.js", context);

      this.src.copy('.travis.yml', '.travis.yml');
      this.src.copy('.jshintrc', '.jshintrc');
      this.src.copy('_gitignor', '.gitignore');
      this.src.copy('.gitattributes', '.gitattributes');
      this.src.copy('.editorconfig', '.editorconfig');
      this.src.copy('.bowerrc', '.bowerrc');

      //Plugin
      this.template("plugin/index.html", "plugin/index.html", context);
      this.template("plugin/coffee/pluginBase.coffee", "plugin/coffee/"+context.plugin_name+".coffee", context);
      this.template('plugin/less/pluginName.less', 'plugin/less/'+context.plugin_name+'.less', context);
      this.template('plugin/less/mixins.less', 'plugin/less/mixins.less', context);
      this.template('plugin/less/variables.less', 'plugin/less/variables.less', context);

      this.src.copy('plugin/favicon.ico', 'plugin/favicon.ico');
      this.src.copy('plugin/.buildignore', 'plugin/.buildignore');
      this.src.copy('plugin/coffee/Plugin.coffee', 'plugin/coffee/Plugin.coffee');
      this.src.copy('plugin/styles/demo.css', 'plugin/styles/demo.css');

      //Test
      this.template("test/test.html", "test/test.html", context);
      this.template("test/casperjs/00-Main.coffee", "test/casperjs/00-Main.coffee", context);

      this.src.copy('test/.jshintrc', 'test/.jshintrc');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = JqWidgetGenerator;
