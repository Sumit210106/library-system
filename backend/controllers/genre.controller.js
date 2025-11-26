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


const readGenre = async(req,res) => {
    try{
        const read = await prisma.genre.findMany()
        res.status(200).json(read)

    }catch(error){
        res.status(500).send({message : error.message})
    }
}

const updateGenre = async (req, res) => {
  try {
    const id = req.params.genreId
    // console.log(id)
    const updatedata = req.body;
    if (!id){
        throw new Error('no id provided')
    }
    const update = await prisma.genre.update({
      where: { id: Number(id) },
      data: updatedata 
    });

    return res.status(200).json(update);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


const deleteGenre = async(req,res) => {
    try {
        const id = req.params.genreId; 
    const exists = await prisma.genre.findFirst({
        where : {id : Number(id)}
    })
    if (!exists){
        throw new Error('No such genre Exists')
    }
    const deletedData = await prisma.genre.delete({
        where : { 
            id : Number(id)
        }
    })
    res.status(204).json(deletedData)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    
    
}
module.exports = {addGenre , readGenre , updateGenre ,deleteGenre}