'use client';

import { useState } from "react";

export default function CommentForm({ slug }) {
    const [form, setForm] = useState({name: '', email: '', message: '', website: ''});
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({...form, slug }),
        });

        if(res.ok) {
            setStatus('Comentário enviado com sucesso!');
            setForm({name: '', email: '', message: '', website: ''});
            

        } else {
            const err = await res.text()
            setStatus(`Erro: ${err}`)
        }

    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {/* Honeypot: campo invisível */}
            <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e) => setForm({...form, website: e.target.value})}
                autoComplete="off"
                className="hidden"
                tabIndex="-1"
            />

            <input 
            type="text"
            placeholder="Nome (opcional)"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
            className="w-full p-2 border" 
            />

            <input
             type="email"
             placeholder="Email"
             value={form.email}
             onChange={(e) => setForm({...form, email: e.target.value})}
             required
             className="w-full p-2 border"
            />

            <textarea 
            placeholder="Comente aqui..."
            value={form.message}
            onChange={(e) => setForm({...form, message: e.target.value})}
            required
            className="w-full p-2 border"></textarea>

            <button type="submit"
             className="bg-black rounded hover:cursor-pointer text-white px-4 py-2">Enviar</button>
             
            {status && <p>{status}</p>}

        </form>
    )

}