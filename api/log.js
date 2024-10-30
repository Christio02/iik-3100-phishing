export const handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    try {
      const { username, password } = req.body;
      const data = `Username: ${username}, Password: ${password}`;

      console.log("[Login Attempt: ", data);

      return {
        statusCode: 200,
        body: "Login successfull",
      };
    } catch (err) {
      console.error("[Error]:", err);
      return {
        statusCode: 500,
        body: "Error processing request",
      };
    }
  }
  return {
    statusCode: 405,
    body: "Method not allowed",
  };
};
