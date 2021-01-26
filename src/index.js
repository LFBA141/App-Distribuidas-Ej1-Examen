const express = require('express');
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: path.join(__dirname,'Publico/Uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
        
        }
});

//Inicializacion
const app = express();

//Configuracion
app.set('port',3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares
app.use(multer({
    storage,
    dest: path.join(__dirname,'Publico/Uploads')
}).single("Imagen"));

//Rutas
app.get('/', (req,res) => {
    res.render('index');
});

app.post('/Subir', (req, res)=> {
    console.log(req.file);
    res.send('Upload');
});
//Empiezo el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});