
import { StreamChat } from "stream-chat";

// Define values.
const api_key = "794xebu5vtq7";
const api_secret = "jc64r8tw8c4wn3fdvwy8mbbzetrfme49j6aax7jsysj7f53gfutnd7sfejnzfdtg";
const user_id = "user_2uOaq4YTRP9tNurDi2i88CyYryY";


export async function GET() {
    
    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    const token = serverClient.createToken(user_id);

console.log(token);

    return Response.json({message:"HELLO WORLD"})
}