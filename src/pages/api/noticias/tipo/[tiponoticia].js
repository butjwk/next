import {noticias} from "../noticias"

export default function handler(req, res) {
    const found = noticias.filter((noticias) => noticias.tiponoticia == req.query.tiponoticia);
    if(found.length===0){
        return res.status(404).json({ error: ' tipo noticia não encontrado'});
    }
    res.status(200).json(found)
}