export interface TenantConfig {
  name: string;
  whatsappTo: string; // The specific client's phone number
}

export const TENANT_REGISTRY: Record<string, TenantConfig> = {
  colombobuildingsupplies: {
    name: "Colombo Building Supplies",
    whatsappTo: "whatsapp:+94763671514", // Unique to them
  },
  vertexmarketing: {
    name: "Vertex Marketing",
    whatsappTo: "whatsapp:+94763671514", // Unique to them
  },
  studiointeriors: {
    name: "Studio Interiors",
    whatsappTo: "whatsapp:+94755659529", // Unique to them — update with real number
  },
};