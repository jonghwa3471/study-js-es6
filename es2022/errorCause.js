try {
  2 + 2;
  throw new Error("DB Connection Faild.", {
    cause: {
      error: "password is incorrect",
      value: 1234,
      message: ["too short", "only number not ok"],
    },
  });
} catch (error) {
  console.log(error.message, error.cause);
}
