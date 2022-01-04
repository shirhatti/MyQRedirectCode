/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
 exports.helloworld = (req, res) => {
  let message = req.query.message || req.body.message || '{"message": "Hello World!"}';
  res.status(200).send(message);
};

/**
 * This method takes in an authenticated cookie and redirect URL from the MyQ OAuth process.
 * It then passes that cookie along in a GET request to that URL.
 * Finally, it grabs the resulting code and scope from the resulting location header.
 * Note that without the original PKCS challenge information, this method itself it not able
 * to fully generate MyQ login information.
 */
// app.post('/getRedirectCode', async function (req, res) {
//   try {
//     let config =
//     {
//       headers: {
//         "Cookie": req.body.cookie,
//         "User-Agent": "null"
//       },
//       maxRedirects: 0
//     }
//     try {
//       await axios.get(req.body.redirectUrl, config);
//     } catch (error) {
//       if (error.response?.status == 302){
//         const redirectResponseUrl = new URL(error.response?.headers['location'] ?? "");
//         let result = {
//           code: redirectResponseUrl.searchParams.get("code"),
//           scope: redirectResponseUrl.searchParams.get("scope")
//         }
//         res.json(result);
//         return;
//       }
//       else{
//         res.status(error.response?.status ? error.response.status : 500).json({error: error.message});
//         return;
//       }
//     }
//     res.status(500).json({error: "Failed to get code from MyQ"});

//   } catch (error) {
//     console.error(error.stack);
//     res.status(500).json({error: error.message});
//   }
// })

// //listen on the port
// app.listen(port, function () {
//   console.log(`Listening on port ${port}`)
// })

// //export the app module
// exports = module.exports = app;