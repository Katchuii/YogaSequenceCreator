
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import asanas from '../dist/js/asanas.js';
import path from 'path';



const app = express();
// app.use(express.json());

app.use(cors());

// serves website: 
app.use(express.static('dist'));
// app.use('/styles', express.static('styles'));
// app.use('/JavaScript', express.static('./JavaScript'));
app.use('/img', express.static('img'));
app.use('/js',express.static('js'));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(process.env.dirPath, '', 'index.html'));
});

app.get('/sequence', function (req, res, next) {
    res.sendFile(path.join(process.env.dirPath, '', 'dist/index.html'));
});

app.get('/asanas', (req, res, next) => {
    return res.send(Object.values(asanas));
});

// app.get('/asanasjson', (req, res, next) => {
//     return res.send(Object.values());
// });

app.get('/asanas/:id', (req, res) => {
    let asanaObject = null;
    console.log(req.params.id);
    asanas.forEach((asana) => {
        if (asana.id === parseInt(req.params.id)) {
            asanaObject = asana;
        }
    });
    if (asanaObject !== null) {
        return res.send(asanaObject);
    } else {
        return res.status(404).send("asana not found");
    }
});


app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}`),
);

console.log('Hellaaa Node.js project.');
// environment variables in .env: 
console.log(process.env.MY_SECRET_PASSWORD);
console.log(process.env.PORT);
console.log('Hello ever running Node.js project.');
