import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPost = async (req,res)=>{
    try {
        const postmessages = await PostMessage.find();

        res.status(200).json(postmessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req,res)=>{
    const post = req.body;
      console.log(post.title);
    const newPost = new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString()});
    // console.log(newPost);
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updatePost = async (req, res) =>{
    const { id:_id } =req.params;
    const post = req.body;
    // console.log("id :",_id);
    // console.log("post :",post);
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new:true })
    //   console.log("updatedPost:",updatedPost._id);
    res.json(updatedPost);
}

export const deletePost = async (req, res) =>{
    const { id:_id } =req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id');

     await PostMessage.findByIdAndRemove(_id);

     res.json({message:'Post deleted successfully'});
}    

export const likePost = async (req, res) =>{
    const { id:_id } =req.params;
    
    if(!req.userId) return ews.json({ message: 'Unauthenticated' });

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id');

    const post = await PostMessage.findById(_id);

    const index = post.likes.findIndex((id) => id === String(req.userId));
    if(index === -1){
        // like the post
        post.likes.push(req.userId);
    }else{
        // dislike the post
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new:true})
    
    res.json(updatedPost);
}    