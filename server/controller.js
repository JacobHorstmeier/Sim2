module.exports = {

    getHouses: (req, res, next) => {
        const db = req.app.get('db');
        console.log('GetHouses got hit')
        
        db.get_houses()
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send() )
    },

    addHouse: (req, res, next) => {
        const db = req.app.get('db');
        console.log('addHouse just hit')
        const {name,address,city,state,zipcode} = req.body

        db.add_house([name,address,city,state,zipcode])
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send())
    },

    deleteHouse: (req,res,next) => {
        const db = req.app.get('db');
        const {id} = req.params
console.log('delete just hit')
        
        db.delete_house([id])
            .then(houses =>  res.status(200).send(houses))
            .catch(() => res.status(500).send())
    }







}