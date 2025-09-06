const express = require("express");
const ImageKit = require("imagekit");


const imagekit = new ImageKit({
  publicKey: process.env.Imagekit_publickey,
  privateKey: process.env.Imagekit_privatekey,
  urlEndpoint: process.env.Imagekit_endpoint,
});

 async function uploadFile(file, fileName) {
  const fileUploadResult = await imagekit
    .upload({
      file: file,
      fileName: fileName,
    })
    return fileUploadResult

    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
}

module.exports = {
  uploadFile
};
