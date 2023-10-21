const sql = await Bun.file('../sql/database.sql').text()
const db = new Database(`./local_db/host.db`)
db.query(sql).run()