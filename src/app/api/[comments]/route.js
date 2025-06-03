import { db } from "@/lib/firabase";
import { 
    collection,
    query,
    where,
    orderBy,
    getDocs,
    addDoc,
    Timestamp,
 } from "firebase/firestore";

//Buscar comentários de um artigo
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
        return new Response("Parâmetro 'slug' é obrigatório", {status: 400});
    };

    try {
        const q = query(
            collection(db, "comments"),
            where("slug", "==", slug),
            orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const comments = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))

        return Response.json(comments);
    } catch (error) {
        console.error("Erro ao buscar comentários:", error);
        return new Response("Erro interno ao buscar comentários", {status: 500});
    }
   
}

//Enviar novo comentário
export async function POST(request) {
    const body = await request.json();
    const { name, email, message, slug, website } = body;


    if (!slug || !email || !message) {
        return new Response("Campos obrigatórios ausentes", {status: 400});
    }

    //Honeypt: bloquear bots
    if (website && website.trim() !== '') {
        return new Response("Spam detectado", {status: 400});
    };

    const newComment = {
        name: name || "Anônimo",
        email,
        message,
        slug,
        createdAt: Timestamp.now(),
    };

    try{
        const docRef = await addDoc(collection(db,"comments"), newComment);

        return Response.json(
            {
                sucess: true,
                id: docRef.id,
                comment: {
                    ...newComment,
                    createdAt: new Date().toISOString(), //apenas para exibição
                },
            },
            {status: 201}
        );
    } catch (error) {
        console.error("Erro ao enviar comentário:", error);
        return new Response("Erro ao enviar comentário:", {status: 500});
    }

   
}