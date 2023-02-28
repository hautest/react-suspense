export const getUserList = () => {
  console.log("fetch user list");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetched user list");
      resolve([
        { name: "haute", age: 24 },
        { name: "lee", age: 20 },
        { name: "evar", age: 21 },
        {
          name: "qq",
          age: 30,
        },
      ]);
    }, 1000);
  });
};

export const getArticleList = () => {
  console.log("fetch article list");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetched article list");
      resolve([
        { title: "article1", content: "content1" },
        { title: "article2", content: "content2" },
        { title: "article3", content: "content3" },
        {
          title: "article4",
          content: "content4",
        },
      ]);
    }, 2000);
  });
};
