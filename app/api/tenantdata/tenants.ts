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
};