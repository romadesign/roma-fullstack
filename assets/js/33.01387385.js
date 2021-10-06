(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{388:function(t,e,a){"use strict";a.r(e);var r=a(45),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_10-subir-proyecto-a-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-subir-proyecto-a-github"}},[t._v("#")]),t._v(" 10.- Subir proyecto a GitHub")]),t._v(" "),a("h2",{attrs:{id:"set-correct-publicpath-in-vue-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-correct-publicpath-in-vue-config-js"}},[t._v("#")]),t._v(" Set correct publicPath in vue.config.js.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// vue.config.js file to be place in the root of your repository\n\n          module.exports = {\n            publicPath: process.env.NODE_ENV === 'production'\n              ? '/my-project/'\n              : '/'\n          }\n")])])]),a("h2",{attrs:{id:"archivo-deploy-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#archivo-deploy-sh"}},[t._v("#")]),t._v(" Archivo deploy.sh")]),t._v(" "),a("p",[t._v("Crear fuera del proyecto un archivo deploy.sh y colocar el contenido")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("      #!/usr/bin/env sh\n\n            # abort on errors\n            set -e\n            \n            # build\n            npm run build\n            \n            # navigate into the build output directory\n            cd dist\n            \n            # if you are deploying to a custom domain\n            # echo 'www.example.com' > CNAME\n            \n            git init\n            git add -A\n            git commit -m 'deploy'\n            \n            # if you are deploying to https://USERNAME.github.io\n            # git push -f git@github.com:USERNAME/USERNAME.github.io.git master\n            \n            # if you are deploying to https://USERNAME.github.io/REPO\n            # git push -f git@github.com:USERNAME/REPO.git master:gh-pages\n            \n            cd -\n")])])]),a("h2",{attrs:{id:"enviar-a-produccion-el-proyecto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enviar-a-produccion-el-proyecto"}},[t._v("#")]),t._v(" Enviar a producción el proyecto")]),t._v(" "),a("p",[t._v("creara una carpeta DIST, la cual se tiene que subír al repositorio de github o a tu hosting")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("     $ npm run build\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);