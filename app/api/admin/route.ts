import requireAdmin from "@/lib/admin";
export async function GET(){
    const userId=requireAdmin();
    if(!userId) return new Response("Forbidden",{status:403})

    return userId;
}