import "dotenv/config";

import redis from "redis";

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
});

/**
 * Redis - Básico Chave valor
 */

const value = "valor-" + Math.random();
const key = "chave-" + Math.random();

// Método utilizado somente para Setar Valores
client.set(key, value, (error, reply) => {
  if (!error) {
    console.log("set::", reply);
  }

  client.quit();
});

// Método utilizado somente para Obter Valores
client.get(key, (getError, getReply) => {
  if (!getError) {
    console.log("get::", getReply);
  }

  client.quit();
});
