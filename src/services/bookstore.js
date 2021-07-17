export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Flower",
      price: 32,
      coverImage:
        "https://learning.oreilly.com/library/cover/9781491965962/250w/",
    },
    {
      Id: 2,
      title: "Release It",
      author: "Michael T. Nygard",
      price: 45,
      coverImage:
        "https://images-eu.ssl-images-amazon.com/images/I/419zAwJJH4L._SY445_SX342_QL70_ML2_.jpg",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (Math.random() > 0.2) {
            reject(new Error('Somethings bad happened'))
          } else {
            resolve(this.data)  
          }
      }, 700);
    });
  }
}
