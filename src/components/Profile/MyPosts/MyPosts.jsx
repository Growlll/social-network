import React from "react";
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {maxLength, minLength, required} from "../../../utils/validators/validators";

const minLength5 = minLength(5)
const maxLength20 = maxLength(20)

const PostForm = (props) => {
  return (
    <div className={s.post}>
      <form onSubmit={props.handleSubmit}>
        <Field name={'newPost'}
               component={Textarea}
               validate={[required, minLength5, maxLength20]}/>
        <div>
          <button>Add post</button>
        </div>
      </form>
    </div>
  )
}

const PostReduxForm = reduxForm({form: 'postProfile'})(PostForm)

const MyPosts = props => {
  console.log("Growl")

  const postsElements = props.posts
    .map(p => <Post message={p.message} countsLikes={p.countsLikes}/>)

  const addPost = (values) => {
    props.addPost(values.newPost)
  }

  return (
    <div className={s.postsBlock}>
      My posts
      <PostReduxForm onSubmit={addPost}/>
      <div>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts