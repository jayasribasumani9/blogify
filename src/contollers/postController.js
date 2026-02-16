export const getPostById= async(req,res)=>{
    try{
        const{postId}= req.params;
        res.status(200).json({
            success:true,
            data:{
                postId:postId,
                message:`Fetching data for ID ${postId}`
            }
        });
    }catch(err){
        res.status(401).json({
            success:false,
            message:"Error fetchng data!"
        });
    }
}