(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{379:function(s,a,t){"use strict";t.r(a);var n=t(45),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_1-primeros-pasos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-primeros-pasos"}},[s._v("#")]),s._v(" 1.- Primeros pasos")]),s._v(" "),t("p",[s._v("Vamos a comenzar con las instalaciones necesarias para configurar nuestro proyecto utilizando MongoDb y Python.")]),s._v(" "),t("h2",{attrs:{id:"instalando-virtualenv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instalando-virtualenv"}},[s._v("#")]),s._v(" Instalando Virtualenv")]),s._v(" "),t("p",[s._v("Entorno virtual\nProyecto que va estar aislado de los demas, es decir cada proyecto tiene sus propias dependencias, paquetes.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        $ pip install virtualenv\n")])])]),t("h2",{attrs:{id:"creando-un-entorno-virtual-dentro-de-nuestro-proyecto"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creando-un-entorno-virtual-dentro-de-nuestro-proyecto"}},[s._v("#")]),s._v(" Creando un entorno virtual dentro de nuestro proyecto")]),s._v(" "),t("p",[s._v("Para eso tienes que crear una carpeta nueva y abrila en cualquier editor de código")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("     $ virtualenv venv\n")])])]),t("h2",{attrs:{id:"crear-una-carpeta-src"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crear-una-carpeta-src"}},[s._v("#")]),s._v(" Crear una carpeta SRC")]),s._v(" "),t("p",[s._v('Creamos una carpeta llamada "src" y dentro un archivo "app.py"')]),s._v(" "),t("h2",{attrs:{id:"activamos-virtualenv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#activamos-virtualenv"}},[s._v("#")]),s._v(" Activamos virtualenv")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        source ./venv/bin/activate\n")])])]),t("h2",{attrs:{id:"instalando-modulos-principales"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instalando-modulos-principales"}},[s._v("#")]),s._v(" Instalando Modulos principales")]),s._v(" "),t("p",[s._v("Instalando Flask y MongoDb, solo se instalara en nuestro proyecto por eso estamos utilizando un entorno virtual.\n"),t("a",{attrs:{href:"https://flask-pymongo.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://flask-pymongo.readthedocs.io/en/latest/"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        $ pip install Flask-PyMongo\n")])])]),t("h2",{attrs:{id:"en-app-py-escribimos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#en-app-py-escribimos"}},[s._v("#")]),s._v(' En "app.py" escribimos')]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('      from flask import Flask\n      from flask_pymongo import PyMongo\n      \n      app = Flask(__name__)\n      app.config["MONGO_URI"] = "mongodb://localhost:27017/nombre-de-la-base-de-datos"\n      mongo = PyMongo(app)\n')])])]),t("h2",{attrs:{id:"abrimos-o-activamos-mongo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abrimos-o-activamos-mongo"}},[s._v("#")]),s._v(" Abrimos o activamos mongo")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        mongod\n")])])]),t("h2",{attrs:{id:"si-mongo-no-quiere-activarse-puedes-solucionarlo-con-los-siguientes-comandos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#si-mongo-no-quiere-activarse-puedes-solucionarlo-con-los-siguientes-comandos"}},[s._v("#")]),s._v(" Si mongo no quiere activarse puedes solucionarlo con los siguientes comandos")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        mongo start\n        service mongod restart \n        ______________________________\n        \n        I face same issue after searching a lot I solve this by following :\n        \n        sudo service mongodb stop \n        sudo rm /var/lib/mongodb/mongod.lock \n        sudo mongod --repair --dbpath /var/lib/mongodb \n        sudo mongod --fork --logpath /var/lib/mongodb/mongodb.log --dbpath /var/lib/mongodb \n        mongo\n\n")])])]),t("h2",{attrs:{id:"en-el-archivo-app-py-escribimos-lo-siguiente"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#en-el-archivo-app-py-escribimos-lo-siguiente"}},[s._v("#")]),s._v(' En el archivo "app.py" escribimos lo siguiente')]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        @app.route(\"/users\", methods=[\"POST\"])\n        def create_user():\n\n                return {'menssaje': 'received'}\n")])])]),t("p",[s._v('Para mirar por pantalla los datos que van a ser enviados desde Postman necesitamos importar request "print(request.json)"')]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        from flask import Flask, request\n\n        @app.route(\"/users\", methods=[\"POST\"])\n        def create_user():\n                \n                print(request.json)\n\n                return {'menssaje': 'received'}\n")])])]),t("h2",{attrs:{id:"abrimos-postman"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abrimos-postman"}},[s._v("#")]),s._v(" Abrimos Postman")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        postman&\n")])])]),t("p",[s._v("Esribimos la siguiente ruta:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("       http://localhost:5000/users\n\n")])])]),t("p",[s._v("Vamos a Header y dentro escribimos")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        Content-Type             -           application/json\n")])])]),t("p",[s._v("Luego vamos a raw y escrimos un usuario en formato JSON y enviamos la petición por consola")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('    {\n    "username": "roma"\n     }\n')])])]),t("h2",{attrs:{id:"enviando-un-post-para-que-se-guarde-y-cree-la-base-de-datos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enviando-un-post-para-que-se-guarde-y-cree-la-base-de-datos"}},[s._v("#")]),s._v(" Enviando un POST para que se guarde y cree la base de datos")]),s._v(" "),t("p",[s._v("borramos el print(request.json) y escribimos para guardarlos y encriptar la contraseña")]),s._v(" "),t("div",{staticClass:"language-py extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[s._v("        username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        email "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            hashed_password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" generate_password_hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mongo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("insert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hashed_password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            response "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" response\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'menssage'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'necesito los datos'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"encriptamos-la-contasena"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encriptamos-la-contasena"}},[s._v("#")]),s._v(" Encriptamos la contaseña")]),s._v(" "),t("p",[s._v("Para eso debemos de importar")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        from werkzeug.security import generate_password_hash, check_password_hash\n\n")])])]),t("p",[s._v('Despúes creamos una variable "hashed_passwoord" donde dentro estara')]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        hashed_password = generate_password_hash(password)\n")])])]),t("h2",{attrs:{id:"el-codigo-terminaria-asi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#el-codigo-terminaria-asi"}},[s._v("#")]),s._v(" El código terminaria así")]),s._v(" "),t("div",{staticClass:"language-py extra-class"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[s._v("        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Flask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask_pymongo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" PyMongo\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" werkzeug"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("security "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" generate_password_hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" check_password_hash\n        app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MONGO_URI"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mongodb://localhost:27017/pythonmongo"')]),s._v("\n        mongo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PyMongo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("route")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/users"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" methods"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"POST"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create_user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            email "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" username  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" email "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                hashed_password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" generate_password_hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mongo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("insert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hashed_password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                response "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hashed_password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" response\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mensaje'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'necesito los datos'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'menssaje'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'received'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("debug"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);