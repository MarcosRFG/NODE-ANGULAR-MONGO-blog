const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/posts', {useNewUrlParser: true});

// Model Post Mongoose
const PostModel = mongoose.model('Post', { 
    'user': String,
    'date': String,
    'message': String,
    'timestamp': Number
});

// list posts
router.get('/list', (req, res) => {
    const query = PostModel.find().sort({'timestamp': 'desc'});
    query.exec().then((resBase) => {
        var postsRes = [];
        if (resBase.length > 0) {
            resBase.map((post) => {
                postsRes.push(
                    {
                        'user': post.user,
                        'date': post.date,
                        'message': post.message
                    }
                );
            });
        }

        res.json(postsRes).status(200);
    }).catch((err) => {
        const messageRes = {
            'status': '500',
            'message': 'ERRO'
        };

        res.json(messageRes).status(200);
    });
});

// insere posts
router.post('/insert', (req, res) => {
    const newPost = new PostModel({ 
        'user': req.body.user,
        'date': req.body.date,
        'message': req.body.message,
        'timestamp': Date.now()
    });
    newPost.save().then((data) => {
        const messageRes = {
            'status': '200',
            'message': 'SUCESSO'
        };

        res.json(messageRes).status(200);
    }).catch((err) => {
        const messageRes = {
            'status': '500',
            'message': 'ERRO'
        };

        res.json(messageRes).status(200);
    });
});

module.exports = router;