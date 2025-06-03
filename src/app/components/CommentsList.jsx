'use client';

import { useEffect, useState } from "react";

export default function CommentsList({ slug }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch(`/api/comments?slug=${slug}`);
            const data = await res.json();
            setComments(data);
        }

        fetchComments();
    }, [slug]);

    const formatDate = (createdAt) => {
       if (!createdAt) return 'Data desconhecida';

       try {
            if (createdAt.seconds) {
                const date = new Date(createdAt.seconds * 1000);
                return date.toLocaleString("pt-BR");
            }

            const date = new Date(createdAt);
             if (!isNaN(date)) {
                return date.toLocaleString("pt-BR");
             }

            return "Data inválida"; 
       } catch (error) {
        return "Erro ao formatar data";
       }

     

    };

    return (
             <div className="space-y-4 mt-6">
            <h3 className="text-lg font-semibold">Comentários</h3>
            {comments.length === 0 ? (
                <p className="text-sm text-gray-500">Nenhum comentário ainda.</p>
            ) : (
                comments.map(comment => (
                    <div key={comment.id} className="border p-4 rounded">
                        <p className="text-sm text-gray-600">
                            {comment.name} • {formatDate(comment.createdAt)}
                        </p>
                        <p>{comment.message}</p>
                    </div>
                ))
            )}
        </div>
    );
     
}


