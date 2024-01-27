const getDB = require("../util/database").getDB;
class Product {
  constructor(title, price, imageUrl, description) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  save() {
    const db = getDB();
    db.collection("products")
      .insertOne(this)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  }
}

module.exports = Product;
