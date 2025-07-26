import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Demo request endpoint
  app.post("/api/demo-request", async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);
      const demoRequest = await storage.createDemoRequest(validatedData);
      
      // TODO: Send email notification
      // TODO: Integrate with CRM
      
      res.json({ 
        success: true, 
        message: "Demo talebi başarıyla alındı",
        id: demoRequest.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Geçersiz veri formatı",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Sunucu hatası" 
        });
      }
    }
  });

  // Get all demo requests (for admin purposes)
  app.get("/api/demo-requests", async (req, res) => {
    try {
      const demoRequests = await storage.getAllDemoRequests();
      res.json(demoRequests);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Sunucu hatası" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
