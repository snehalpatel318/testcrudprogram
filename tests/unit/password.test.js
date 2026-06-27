import bcrypt from "bcryptjs";

test("password should hash correctly", async () => {
	const password = "123456";
	const hash = await bcrypt.hash(password, 10);
	const result = await bcrypt.compare(password,hash);

	expect(result).toBe(true);
});
