const router = require('express')();
const {compressImages} = require('./imageUploader');

const folderPath = './images'
router.post('/imageUpload', async (req, res) => {
  try {
    // console.log(req.files)
    const data = req.body;
    const compressedImagePaths = await compressImages(req.files,folderPath);
    console.log(compressedImagePaths);
    res.send({ status: true, message: compressedImagePaths,data });
  } catch (err) {
    res.send({ status: false, message: err.message });
  }
});


module.exports = router;