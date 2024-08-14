module.exports = (request) => {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      try {
        const parsedBody = JSON.parse(body);
        resolve(parsedBody);
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        reject(new Error("Invalid JSON"));
      }
    });

    request.on("error", (err) => {
      console.error("Request error:", err);
      reject(err);
    });
  });
};
