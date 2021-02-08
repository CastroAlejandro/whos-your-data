const axios = require("axios");
function gamesList(req, res) {
    const pageModel = {}
    axios.get("https://api.rawg.io/api/games", {
        params: {
            key: "0e56bd7d3b4f4008beeb13e44a4fa52a",
            page: req.query.page || 1,
            page_size: 5
        }
    })
        .then(response => {
            console.log(response.data.results)
            if(req.query.page){
                const curr = parseInt(req.query.page)
                pageModel.previousPage = curr - 1
                pageModel.currentPage = curr
                pageModel.nextPage = curr + 1
            } else {
                pageModel.currentPage = 1
                pageModel.nextPage = 2
            }
            pageModel.games = response.data.results
            res.render("members", pageModel)
            
        })
};
module.exports = gamesList;