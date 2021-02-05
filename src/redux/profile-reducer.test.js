import React from "react";
import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";

const state = {
  posts: [
    {id: 1, message: 'Hi, John Doe', countsLikes: 234},
    {id: 2, message: 'I\'m fine', countsLikes: 543},
    {id: 3, message: 'I\'m not bad', countsLikes: 43},
  ]
}

test('should be add new post and length is increment', () => {
  const addPost = addPostActionCreator('Earth')
  const result = profileReducer(state, addPost)

  expect(result.posts.length).toBe(4)
});

test('message of new post must be correct', () => {
  const addPost = addPostActionCreator('Earth')
  const result = profileReducer(state, addPost)

  expect(result.posts[3].message).toBe("Earth")
});

test('after deleting of messages should be decrement', () => {
  const deletePost = deletePostActionCreator(1)
  const result = profileReducer(state, deletePost)

  expect(result.posts.length).toBe(2)
});

test(`after deleting of messages shouldn't be change length`, () => {
  const deletePost = deletePostActionCreator(1000)
  const result = profileReducer(state, deletePost)

  expect(result.posts.length).toBe(3)
});
