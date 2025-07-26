import { users, type User, type InsertUser, type DemoRequest, type InsertDemoRequest } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDemoRequest(request: InsertDemoRequest): Promise<DemoRequest>;
  getAllDemoRequests(): Promise<DemoRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private demoRequests: Map<number, DemoRequest>;
  currentId: number;
  demoRequestId: number;

  constructor() {
    this.users = new Map();
    this.demoRequests = new Map();
    this.currentId = 1;
    this.demoRequestId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createDemoRequest(insertRequest: InsertDemoRequest): Promise<DemoRequest> {
    const id = this.demoRequestId++;
    const demoRequest: DemoRequest = {
      id,
      name: insertRequest.name,
      company: insertRequest.company,
      email: insertRequest.email,
      phone: insertRequest.phone || null,
      sector: insertRequest.sector || null,
      message: insertRequest.message || null,
      consent: insertRequest.consent || false,
      createdAt: new Date(),
    };
    this.demoRequests.set(id, demoRequest);
    return demoRequest;
  }

  async getAllDemoRequests(): Promise<DemoRequest[]> {
    return Array.from(this.demoRequests.values());
  }
}

export const storage = new MemStorage();
