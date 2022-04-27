const express = require('express');
const app = express();

app.get('/posts', (req, res) => {
    return res.json({
        post_id: '1',
        post_title: 'Macaco fora do lugar',
        post_description: 'Macaco estava no chão invés de estar numa árvore'
    });
})

app.listen(3333, () => {
    console.log('server on');
})