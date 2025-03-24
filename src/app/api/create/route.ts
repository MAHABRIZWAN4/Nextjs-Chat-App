
import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

// Define values.
const api_key = "794xebu5vtq7";
const api_secret = "jc64r8tw8c4wn3fdvwy8mbbzetrfme49j6aax7jsysj7f53gfutnd7sfejnzfdtg";
// const user_id = "user_2uOaq4YTRP9tNurDi2i88CyYryY";

function Capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


export async function POST(request:any) {
    
    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);

    
    // Create User Token
//     const token = serverClient.createToken(user_id);

   // console.log(token);
   const user = await request.json()
    const token = serverClient.createToken(user.data.id);
    console.log("A NEW USER HAS BEEN CREATED SUCCESSFULLY", token);
    

    const client = await clerkClient()

await serverClient.upsertUser({id: user.data.id})



    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token,
        },
    })



    // give the access to this user for all chat forums
    const slugs = [
        "python-chat",
        "javascript-chat",
        "react-chat",
        "nextjs-chat",
        "tailwindcss-chat",
        "nodejs-chat",
        "sanity-chat"
    ];

    slugs.forEach(async (item) => { 

        const channel = serverClient.channel("messaging", item, {
            image: "https://getstream.io/random_png/?name=react",
            name: Capitalize(item) + "Discussion",
            created_by_id: user.data.id,
        });
        await channel.create();
        channel.addMembers([user.data.id]);
    });

    
    return Response.json({message:"HELLO WORLD"})
}