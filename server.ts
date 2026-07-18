import express from "express";
import path from "path";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Groq client to prevent startup crash if key is missing
let groqClient: Groq | null = null;
function getGroqClient(): Groq {
  if (!groqClient) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error("GROQ_API_KEY_MISSING");
    }
    groqClient = new Groq({ apiKey });
  }
  return groqClient;
}

// Secure API endpoint for Groq Chat Completions
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Format des messages invalide." });
    }

    try {
      const groq = getGroqClient();
      
      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `Tu es NeuraTech Copilot, l'assistant intelligent de NeuraTech AI. NeuraTech AI est un cabinet d'élite de conseil et d'intégration en Intelligence Artificielle et Automatisation.
Nos expertises majeures :
1. Développement d'Agents IA (LangGraph, CrewAI) pour des décisions et opérations autonomes complexes.
2. Chatbots Intelligents haut de gamme connectés à vos systèmes d'information.
3. Systèmes RAG (Retrieval-Augmented Generation) ultra-sécurisés (Pinecone, LlamaIndex, ChromaDB) conformes au RGPD et sans hallucination.
4. Automatisation de Workflows (n8n, Make.com, Zapier, API Python) pour orchestrer les logiciels (CRM, ERP, emails).
5. Analyse de Données et Prédictions (Machine Learning).
6. Solutions d'IA Générative (co-création, génération de contenu).

Nos tarifs : Forfaits d'audit technique flash et PoC fonctionnel à partir de 2 500€ pour valider le ROI de l'intégration.

Nos études de cas de réussite :
- Nexia Logistics (Logistique) : traitement des litiges douaniers par agent IA (temps divisé par 8, de 40 à 5 minutes).
- SoluFin Advisors (Finance) : RAG juridique réduisant la recherche de 25 min à 12s, économisant 120 000€/an.
- InstaBuy International (E-Commerce) : chatbot d'aide à l'achat omnicanal augmentant les conversions de +18%.

Consignes de réponse :
- Réponds de manière chaleureuse, professionnelle, de ton point de vue de consultant d'élite. Sois convaincant, clair et structuré.
- Ne larp pas de détails techniques imaginaires. Parle de résultats métiers tangibles.
- Suggère avec tact de planifier un audit gratuit en remplissant le formulaire de contact juste en dessous si cela s'y prête.
- Utilise un français impeccable et formule tes réponses en Markdown fluide (avec des listes à puces et du texte en **gras** si nécessaire).`
          },
          ...messages
        ],
        model: "llama-3.3-70b-specdec",
        temperature: 0.7,
        max_tokens: 1024,
      });

      const reply = completion.choices[0]?.message?.content || "";
      return res.json({ reply, mode: "live" });
    } catch (err: any) {
      if (err.message === "GROQ_API_KEY_MISSING") {
        return res.json({
          reply: "⚠️ **Mode Démo Actif** (Pas de clé d'API Groq détectée).\n\nPour tester l'intelligence en temps réel avec Groq (`Llama 3.3 70B`), ajoutez votre clé d'API : \n- Ajoutez `GROQ_API_KEY=votre_cle_groq` dans le fichier `.env` local ou vos variables d'environnement.\n\n*Je réponds en mode simulation locale pour le moment. Posez-moi des questions sur nos solutions !*",
          mode: "simulated_demo"
        });
      }
      throw err;
    }
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    return res.status(500).json({ error: "Une erreur est survenue lors de la communication avec l'assistant." });
  }
});

// Vite middleware setup
const startServer = async () => {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[NeuraTech Server] Running on http://localhost:${PORT}`);
  });
};

startServer();
