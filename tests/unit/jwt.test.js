import jwt from "jsonwebtoken";

test("jwt should create token", () => {
	const user = {_id: "123",role: "admin"};

	const token = jwt.sign({id: user._id,role: user.role,},"secret",);

	expect(token).toBeDefined();
});
