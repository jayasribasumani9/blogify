export const getPostByID= async(req,res)=>{
    try{
        const {postId}= req.params;
        return res.status(200).json({
            message:"fetching data with the post ID"+postId
        });
    }catch(err){
        res.status(400).json({
            message:"Error fetching data!"
        });
    }



};
