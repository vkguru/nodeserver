const db = require('../config/db');

class Post {
  constructor(title, body) {
    this.title =  title;
    this.body = body;
  }

  save() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let createdAtDate =  `${year}-${month}-${day}`;

    let sql = `
      INSERT INTO posts(
        title,
        body,
        created_at
      )
      VALUES(
        '${this.title}',
        '${this.body}',
        '${createdAtDate}'
      )
    `;

    return db.execute(sql);

  }

  static findAll() {
    let sql = "SELECT * FROM posts;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id = ${id};`;

    return db.execute(sql);
  }
}

module.exports = Post;