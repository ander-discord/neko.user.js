// ==UserScript==
// @name         neko!!!
// @version      v1
// @description  a good cat!
// @author       fiveappls
// @match        https://*/*
// ==/UserScript==

(function(){
    'use strict';
    console.log("neko");
    var s=document.createElement('script');s.src='http://localhost:3000/neko.js';document.head.appendChild(s);
})();
