const prisma = require("../db/config");

const createAuthor = async (req, res) => {
  try {
    const {
      first_name,
      family_name,
      name,
      date_of_birth,
      date_of_death,
      lifespan,
      url,
    } = req.body;

    if (!first_name || !family_name || !name || !date_of_birth || !url) {
      return res.status(400).json({ message: "missing fields" });
    }
    const checkIfExists = await prisma.author.findUnique({
      name,
    });

    if (checkIfExists) {
      return res.status(400).json({ message: "author already exists" });
    }

    const created = await prisma.author.create({
      first_name,
      family_name,
      name,
      date_of_birth,
      date_of_death,
      lifespan,
      url,
    });

    return res.status(201).json({ "user created": created });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// showAuthor by ID
const showAuthor = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
        const author = await prisma.author.findUnique({author_id})
        if (!author){
            return res.status(404).json({"message" : "no author found"})
        }
        return res.status(200).json({"message" : author})
    }

    const allAuthors = await prisma.author.findMany()
    return res.s

  } catch (error) {}
};


