console.log("This is a test");
// import * as request from "request";
// import {config} from "./config";
// import * as querystring from "querystring";
// import * as fs from "fs";
// import {Buffer} from "buffer";

// function analyzeImage(fileName: string){
//     const requestOptions: request.CoreOptions = {
//         headers:{
//             "Content-Type": "application/octet-stream",
//             "Ocp-Apim-Subscription-Key": config.key1
//         },
//         body: readImage(__dirname+ "/" + fileName)
//     }
//     const params: any = {
//         "visualFeatures": "Categories,Descriotion,Color",
//         "details":"",
//         "language":"en"
//     };
//     const uri = config.endpoint + "/analyze" + querystring.stringify(params);
//     request.post(
//         uri,
//         requestOptions,
//         (err, response, body) => {
//             console.dir(response.body, {depth: null, colors: true});
//         }
//     );
// }
// function readImage(filePath: string){
//     const fileData = fs.readFileSync(filePath).toString("hex");
//     const result = [];
//     for(let i = 0; i<filePath.length; i +=2){
//         result.push(parseInt(fileData[i]+""+fileData[i+1], 16))
//     }
//     return new Buffer(result);
// }