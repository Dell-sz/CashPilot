const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:Dellsz@localhost:5432/cashpilot',
});

client.connect()
  .then(() => {
    console.log("✅ Conectado com sucesso!");
    return client.end();
  })
  .catch(err => console.error("❌ Erro de conexão:", err));
