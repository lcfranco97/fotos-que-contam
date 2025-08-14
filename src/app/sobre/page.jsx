'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Sobre() {
    return (



        <motion.div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row mt-16   dark:bg-black" initial="hidden" animate="visible"
        variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .4
                }
            }
        }} >
            <article className="max-w-3xl mx-auto p-4">
                <h1 className="text-4xl font-bold mb-10 mt-4">Sobre <strong className="text-red-800">nós</strong></h1>

                <Image src="/fqc-about.png"
                    alt="Imagem sobre o Fatos que Contam"
                    width={800}
                    height={200}
                    priority
                    className="rounded-3xl mb-8"
                />    
                
                <div className="grid grid-cols-1 gap-6 text-justify mb-20">
                  <p className="text-xl text-black dark:text-white">
                    "Fotos que Contam" é um site dedicado a revelar o poder das imagens ao longo da história. Cada postagem traz uma foto histórica acompanhada de uma narrativa envolvente, explorando o contexto, os personagens e os eventos que deram vida àquela imagem. O objetivo é transportar o leitor para o momento capturado, oferecendo uma nova perspectiva sobre fatos que marcaram a humanidade.
                
                    Mais do que apenas mostrar fotos antigas, buscamos contar histórias que ressoam até os dias de hoje — momentos de luta, descoberta, transformação e emoção. Acreditamos que, ao compreender melhor o passado por meio dessas imagens, conseguimos refletir sobre o presente com mais profundidade.

                    <br />
                    <br />
                    Este espaço é pensado para curiosos, apaixonados por história, estudantes ou qualquer pessoa que veja valor em conhecer o mundo através dos registros visuais que ele deixou. Esperamos que cada visita ao "Fotos que Contam" desperte a curiosidade e a empatia, e que cada imagem traga consigo uma experiência única de aprendizado e reflexão.
                    <br />
                    <br />
                    A palavra história vem do grego historia, que significa "aprender ou conhecer por meio da investigação". A história é importante porque nos ajuda a compreender o presente.
                    <br />
                    <br />
                    Nos artigos exibidos nesse blog, incentivamos você a investigar, questionar, aprofundar e questionar. A história não é estática. É fluida. Ela muda, cresce e se torna mais rica e complexa quando qualquer indivíduo interage com ela.
                    <br />
                    <br />
                    
                  </p>
                </div>
               

            

            </article>

            
 

       </motion.div>        
       
    
  )
      

  
}

        
