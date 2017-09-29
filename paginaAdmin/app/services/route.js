"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../controller/home/home.component');
var login_component_1 = require('../controller/login/login.component');
console.log("holasasd");
var rutas = [
    {
        path: 'homePage',
        component: home_component_1.HomePages
    },
    {
        path: 'loginPage',
        component: login_component_1.LoginPages
    }
];
exports.routing = router_1.RouterModule.forRoot(rutas);
//# sourceMappingURL=route.js.map