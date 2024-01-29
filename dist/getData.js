"use strict";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments?_limit=12";
const getData = (url) => {
    return fetch(url);
};
getData(COMMENTS_URL)
    .then((response) => {
    if (!response.ok)
        throw new Error("Network response error");
    return response.json();
})
    .then((comments) => {
    comments.forEach((comment) => console.log("ID:", comment.id, "Email:", comment.email));
})
    .catch((error) => console.log("Error", error))
    .finally(() => console.log("finnaly"));
