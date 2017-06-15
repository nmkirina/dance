"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var dances_component_1 = require("./dances/dances.component");
var galary_component_1 = require("./galary/galary.component");
var history_component_1 = require("./history/history.component");
var staff_component_1 = require("./staff/staff.component");
var notfound_component_1 = require("./notfound/notfound.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'dances', component: dances_component_1.DancesComponent },
    { path: 'galary', component: galary_component_1.GalaryComponent },
    { path: 'history', component: history_component_1.HistoryComponent },
    { path: 'staff', component: staff_component_1.StaffComponent },
    { path: 'notfound', component: notfound_component_1.NotfoundComponent },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map