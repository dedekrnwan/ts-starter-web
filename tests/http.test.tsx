import App from "../lib/app";
import { web, api } from "../app/routes/routes";
import * as request from "supertest";
import * as mongoose from "mongoose";

const app = new App().app;
const Web = web.data;
const Api = api.data;

describe('Accessing web controllers', () => {
    Web.forEach(item => {
        item.path.forEach(path => {
            test(`Test of ${path}, should get 200 status code`, async (done) => {
                await request(app).get(path).then(async (response) => {
                    await mongoose.connection.close();
                    expect(response.status).toBe(200);
                    done();
                });
            });
        });
    })
})

describe('Accessing api controllers', () => {
    Api.forEach(item => {
        item.path.forEach(path => {
            test(`Test of ${path}, should get 200 status code`, async (done) => {
                await request(app).get(path).then(async (response) => {
                    await mongoose.connection.close();
                    expect(response.status).toBe(200);
                    done();
                });
            });
        });
    })
})

