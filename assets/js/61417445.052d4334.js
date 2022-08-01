"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1765],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(n),g=r,h=m["".concat(s,".").concat(g)]||m[g]||p[g]||o;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1852:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return g}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={author:"Palash Shrivastava",author_title:"Owner",author_url:"https://github.com/battleofplassey",author_image_url:"https://avatars.githubusercontent.com/u/35087196?v=4",tags:["blog","git","programming","vcs"],keywords:["blog","git","programming","vcs"],description:"Blog By Palash Shrivastava",hide_table_of_contents:!1,slug:"git-tricks",title:"GIT tricks I think everyone should know",draft:!1},s=void 0,c={permalink:"/git-tricks",source:"@site/blog/git-tricks-i-think-everyone-should-know.md",title:"GIT tricks I think everyone should know",description:"Blog By Palash Shrivastava",date:"2022-08-01T09:02:24.451Z",formattedDate:"August 1, 2022",tags:[{label:"blog",permalink:"/tags/blog"},{label:"git",permalink:"/tags/git"},{label:"programming",permalink:"/tags/programming"},{label:"vcs",permalink:"/tags/vcs"}],readingTime:.725,truncated:!1,authors:[{name:"Palash Shrivastava",title:"Owner",url:"https://github.com/battleofplassey",imageURL:"https://avatars.githubusercontent.com/u/35087196?v=4"}],prevItem:{title:"Essential Tools I use on Mac",permalink:"/essential-tools-for-mac"},nextItem:{title:"Why You Should Not Develop a Mobile App",permalink:"/why-mobile-app"}},u={authorsImageUrls:[void 0]},p=[{value:"1. Moving or Migrating GIT stashes from old computer to new.",id:"1-moving-or-migrating-git-stashes-from-old-computer-to-new",children:[]},{value:"2. GIT add all and commit in 1 line",id:"2-git-add-all-and-commit-in-1-line",children:[]}],m={toc:p};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-moving-or-migrating-git-stashes-from-old-computer-to-new"},"1. Moving or Migrating GIT stashes from old computer to new."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, List all your stashes.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"L:\\Project1> git stash list\nstash@{0}: On parallax-effect-feature: setting aside animated feature code\nstash@{1}: On parallax-effect-feature: testing parallex\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Second, Export to Patch files. You'll have to specify your stash ID and provide a name for your patch file. Do this for the stashes you want to move.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git stash show -p stash@{0} > AnimatedPatch\ngit stash show -p stash@{1} > ParallexPatch\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Patch files will be created in your pwd. Copy the patch file in new directory in the new machine."),(0,o.kt)("li",{parentName:"ul"},"Finally, Apply your stashes and finally Re-Stash them")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /new/project/dir\ngit apply AnimatedPatch\ngit stash\ngit apply ParallexPatch\ngit stash\n")),(0,o.kt)("h3",{id:"2-git-add-all-and-commit-in-1-line"},"2. GIT add all and commit in 1 line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -am "add all and commit"\n')))}g.isMDXComponent=!0}}]);