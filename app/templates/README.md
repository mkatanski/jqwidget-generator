<%= plugin_full_name %> v.0.0.1
===================
[![Build Status](https://travis-ci.org/NexwayGroup/<%= plugin_name %>.svg?branch=master)](https://travis-ci.org/NexwayGroup/<%= plugin_name %>)


<%= short_description %>


## Table of Contents
1. [Requirements](#Requirements)
2. [Installation](#Installation)
3. [Initialization](#Initialization)
4. [Options](#Options)
5. [API](#API) 
6. [More examples](#More)
7. [License](#License) 

--------------

Requirements<a name="Requirements"></a>
-------------

<%= plugin_full_name %> requires [jquery](http://jquery.com/) library to work.

Installation<a name="Installation"></a>
-------------

**Download with bower**<br >
You can use bower to get latest version of <%= plugin_full_name %>. Just type in system terminal/console:
```bash
bower install <%= plugin_name_dashed %> --save
```

**Enable on site**<br >
To enable this widget on your website you have to include javascript documents in your document head section:
 ```html
 <!-- jQuery  -->
 <script src="bower_components/jquery/dist/jquery.js"></script>
 <!-- Widget core scripts  -->
 <script src="scripts/<%= plugin_name %>.min.js"></script>
 ```

Also there is need to include css styles sheets:
```html
<link rel="stylesheet" href="styles/<%= plugin_name %>.css">
```

*<%= plugin_name %>.min.js* and *<%= plugin_name %>.css* files you can find in **/dist/scripts** and **/dist/styles** folders.

--------------

Initialization<a name="Initialization"></a>
-----------

First you have to create basic html skeleton for each instance like this:
```html
  <div id="element" class="<%= plugin_name %>" ></div>
```

It should be noted that the id attribute is optional and depends on how you want to initialize the plug-ins. There are two methods of doing this: by class or by id. The main difference between these two methods is that when plug-ins are initiated by the class name, all the options are the same for each instance on the page. Initialization by id gives each instance more independent behaviour.

> *Tip: You can create different classes for different groups of inputs. This way you can have two independent groups of widgets on your page with different settings.*


Below are some simple examples of initialization only needed to run plugins. For both methods of initialization by the class and id. Place it somewhere in your document (for example at the bottom, just before ```</body>``` tag).
```javascript
// WIDGET INITIALIZATION BY CLASS
$('.<%= plugin_name %>').<%= plugin_name %>();

// WIDGET INITIALIZATION BY ID
$('#element').<%= plugin_name %>();

```

> Note that if you want to intialize widget by element ID, you have to do it separately for each element.

------------


Options<a name="Options"></a>
------------

TO-DO


API <a name="API"></a>
--------------

This plugin is object oriented and has a number of public methods that can be used for advanced control and expand its capabilities.

To get access to the main class of the plugin you must assign an instance variable:
```javascript
var instance = $('#element').data('<%= plugin_name %>_#element');
```
where '#element' is an ID of html element.

More information about the available methods and variables can be found in the **/docs** folder.

More examples <a name="More"></a>
--------------

More working examples can be found in **/plugin** folder. see *index.html* source to check some possibilities.

If you have node.js installed on your machine, run: ```grunt serve``` in terminal or console to test plugin behaviour.


License<a name="License"></a>
--------------

<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title"><%= plugin_full_name %></span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported License</a> and also available under [the MIT License](LICENSE.txt).

