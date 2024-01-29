const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments?_limit=12";

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = (url: string) => {
  return fetch(url);
};

getData(COMMENTS_URL)
  .then((response: Response) => {
    if (!response.ok) throw new Error("Network response error");
    return response.json();
  })
  .then((comments: IComment[]) => {
    comments.forEach((comment: IComment) =>
      console.log("ID:", comment.id, "Email:", comment.email)
    );
  })
  .catch((error) => console.log("Error", error))
  .finally(() => console.log("finnaly"));

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
