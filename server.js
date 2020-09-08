const express = require('express');
const app = express();

const users = [
    {id:1, name: 'User 1'},
    {id:2, name: 'User 2'},
    {id:3, name: 'User 3'},
    {id:4, name: 'User 4'},
    {id:5, name: 'User 5'},
    {id:6, name: 'User 6'},
    {id:7, name: 'User 7'},
    {id:8, name: 'User 8'},
    {id:9, name: 'User 9'},
    {id:10, name: 'User 10'},
    {id:11, name: 'User 11'},
    {id:12, name: 'User 12'},
    {id:13, name: 'User 13'},
    {id:14, name: 'User 14'},
    {id:15, name: 'User 15'},
    {id:16, name: 'User 16'},
    {id:17, name: 'User 17'},
    {id:18, name: 'User 18'},
]

const posts = [
    {id:1, name: 'post 1'},
    {id:2, name: 'post 2'},
    {id:3, name: 'post 3'},
    {id:4, name: 'post 4'},
    {id:5, name: 'post 5'},
    {id:6, name: 'post 6'},
    {id:7, name: 'post 7'},
    {id:8, name: 'post 8'},
    {id:9, name: 'post 9'},
    {id:10, name: 'post 10'},
    {id:11, name: 'post 11'},
    {id:12, name: 'post 12'},
    {id:13, name: 'post 13'},
    {id:14, name: 'post 14'},
    {id:15, name: 'post 15'},
    {id:16, name: 'post 16'},
    {id:17, name: 'post 17'},
    {id:18, name: 'post 18'},
]

app.get('/posts', paginatedResults(posts), (req, res)=>{
    res.json(res.paginatedResults)
})

app.get('/users', paginatedResults(users) ,(req, res)=>{
    res.json(res.paginatedResults);
})

function paginatedResults(model){
    return(req, res, next)=>{
        const page = req.query.page;
        const limit = req.query.limit;

        const startIndex = (page - 1)*limit;
        const endIndex = page * limit;

        const results = {};
        if(endIndex < model.length){
            results.next = {
                page: page+1,
                limit: limit
            }
        }
    
        if(startIndex > 0){
            results.prev = {
                page: page-1,
                limit: limit
            }
        }   

        results.results = model.slice(startIndex, endIndex);
        // below results is the final reult, including next and prev
        res.paginatedResults = results;
        next();
    }
}

app.listen(3000);