const {prisma} = require('../db/config');

const addGenre = async(req,res) => {
    try{
        const {name , url} = req.body ;

    if (!name || !url) {
        throw new Error('Missing Fields')
    }
    const checkExists = await prisma.genre.findFirst({
        where : {
            name , url
        }
    })

    if (checkExists){
        throw new Error('Genre Already Exists')
    }
    const create = await prisma.genre.create({
        data : {
            name , url
        }
    })
    res.status(201).send({"message" : 'Genre created successfully' , "Genre" : create})
    }catch(error){
        res.status(500).send({message : error.message})
    }
    
}

module.exports = {addGenre}