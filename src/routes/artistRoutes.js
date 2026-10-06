import { Router } from "express";
import prisma from '../libs/prisma'

const router = Router();

// rota para buscar todos os artistas /api/artists/

router.get("/", async (req, res) => {
    try {
        const artists = await prisma.artists.findMany()
        res.status(200).json(artists)
    } catch (error) {
        console.error("Erro ao buscar artistas: ", error)
        res.status(500).json({error: 'Erro ao buscar artistas'})
    }
});

// rota para buscar um artista em especifico /api/artistas/<id>

router.get("/:id", async (req, res) => {});

router.get("/:id/artworks", async (req, res) => {});

export default router;
