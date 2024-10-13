import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

//GET ALL POSTS
export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || undefined,
          lte: parseInt(query.maxPrice) || undefined,
        },
      },
    });

    // setTimeout(() => {
    res.status(200).json(posts);
    // }, 3000);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};


//GET SINGLE POST
export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    let userId;

    const token = req.cookies?.token;


    // const token = req.cookies?.token;

    if (!token) {
      // No token present
      return res.status(200).json({ ...post, isSaved: false });
    }
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const saved = await prisma.savedPost.findUnique({
        where: {
          userId_postId: {
            postId: id,
            userId: payload.id,
          },
        },
      });

      return res.status(200).json({ ...post, isSaved: saved ? true : false });
    } catch (err) {
      // Token verification failed
      return res.status(200).json({ ...post, isSaved: false });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};


//ADD POST
export const addPost = async (req, res) => {
  const { postData, postDetail } = req.body;
  const tokenUserId = req.userId;

  // Validate that required fields are present
  if (!postData || !postData.title) {
    return res.status(400).json({ message: "Title is required" });
  }

  if (!postDetail) {
    return res.status(400).json({ message: "Post detail is required" });
  }

  // // Convert latitude and longitude to strings if necessary
  // const latitude = postData.latitude ? postData.latitude.toString() : null;
  // const longitude = postData.longitude ? postData.longitude.toString() : null;

  // console.log("postData:", postData);
  // console.log("postDetail:", postDetail);
  // console.log("tokenUserId:", tokenUserId);


  try {
    const newPost = await prisma.post.create({
      data: {
        ...postData,
        userId: tokenUserId,
        postDetail: {
          create: postDetail,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.error("Error creating post:", err.message);
    res.status(500).json({ message: "Failed to create post" });
  }
};


//UPDATE POST
export const updatePost = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check authorization here if needed (e.g., post.userId !== req.userId)

    const updatedPost = await prisma.post.update({
      where: { id },
      data: updates,
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update post" });
  }
};


//DELETE POST
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    await prisma.post.delete({
      where: { id },
    });

    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete post" });
  }
};