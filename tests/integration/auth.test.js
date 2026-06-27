import request from "supertest";

import app from "../../app.js";

describe("Auth API", () => {
	test("register user", async () => {
		const response = await request(app).post("/api/auth/register").send({
				name: "Test User",
				email: "test@test.com",
				password: "123456",
			});

		expect(response.statusCode).toBe(201);
	});
});
