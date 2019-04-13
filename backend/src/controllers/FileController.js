const Box = require('../models/Box');
const File = require('../models/File');

class FileController {
  async store(req, res) {
    const box = await Box.findById(req.params.id);

    // criar um arquivo
    const file = await File.create({
      title: req.file.originalname,
      path: req.file.key
    });

    box.files.push(file);

    await box.save();

    req.io.sockets.in(box._id).emit('file', file); // pega todos os usuários que estão conectados naquela box
    
    return res.json(file);
  }
}

module.exports = new FileController();