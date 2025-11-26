const { prisma } = require("../db/config");

const addBook = async (req, res) => {
  const { title, authorId, summary, isbn, genres, url } = req.body;
  try {
    // console.log(title, authorId, summary, isbn, genres, url )
    // console.log(req.body)

    if (!title || !authorId || !summary || !isbn || !genres || !url) {
      throw new Error("Missing fields");
    }

    const checkExists = await prisma.book.findFirst({
      where: {
        title: title,
        authorId: authorId,
      },
    });

    if (checkExists) {
      return res.status(403).send("Book with the same Author already exists");
    }

    const result = await prisma.book.create({
    data: {
      title: title,
      summary: summary,
      isbn: isbn,
      url: url,
      author: {
        connect: {
          id: authorId
        }
      },
      genres: {
        create: genres.map(genreId => ({
          genre: {
            connect: {
              id: genreId
            }
          }
        }))
      }
    }
  })
  return res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addBook };
