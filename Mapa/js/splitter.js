﻿
//window.fn = {};

//window.fn.open = function () {
//    var menu = document.getElementById('menu');
//    menu.open();
//};

//window.fn.load = function (page) {
//    var content = document.getElementById('content');
//    var menu = document.getElementById('menu');
//    content.load(page)
//      .then(menu.close.bind(menu));
//};

var splitter = {

    Control: {
        MenuID: document.getElementById('menu'),
        Content: document.getElementById('content')
    },

    Open: function () {
           var menu = document.getElementById('menu');
           menu.open();
    },
    Load: function (page) {
        debugger
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
               content.load(page)
               .then(menu.close.bind(menu));
    }

};