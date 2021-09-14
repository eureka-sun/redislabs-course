import "dotenv/config";

import redis from "redis";
import { promisify } from "util";

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
const setAsync = promisify(client.set).bind(client);
// Método utilizado somente para Obter Valores
const getAsync = promisify(client.get).bind(client);

/**
 * Maneiras de trabalhar com assincronismo no Redis
 */

(async () => {
  try {
    const resultSet = await setAsync(key, value);
    const resultGet = await getAsync(key);

    console.log("set::", resultSet);
    console.log("get::", resultGet);
  } catch (error) {
    console.error(error);
  }

  client.quit();
})();

setAsync(key, value)
  .then((resultSet) => console.log("set::", resultSet))
  .then(() => client.quit())
  .catch(console.error);

getAsync(key)
  .then((resultGet) => console.log("get::", resultGet))
  .then(() => client.quit())
  .catch(console.error);
