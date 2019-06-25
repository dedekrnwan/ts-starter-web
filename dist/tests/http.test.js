"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../lib/app");
const app = new app_1.default().app;
// describe('Accessing api controllers', () => {
//     Api.forEach(item => {
//         item.path.forEach(path => {
//             test(`Test of ${path}, should get 200 status code`, async (done) => {
//                 await request(app).get(path).then(async (response) => {
//                     await mongoose.connection.close();
//                     expect(response.status).toBe(200);
//                     done();
//                 });
//             });
//         });
//     })
// })
