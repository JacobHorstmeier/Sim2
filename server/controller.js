module.exports = {

    getHouses: (req, res, next) => {
        const db = req.app.get('db');
        console.log('GetHouses got hit')
        
        db.get_houses()
            .then(houses => res.status(200).send(houses)
            .catch(() => res.status(500).send() ))
    }







}