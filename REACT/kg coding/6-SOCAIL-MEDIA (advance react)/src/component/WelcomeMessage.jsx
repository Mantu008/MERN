import style from "./Post.module.css";
const WelcomeMessage = ({ handleGetPostClick }) => {
  return (
    <center className={style.welcomeMege}>
      <h3>There are No posts</h3>
    </center>
  );
};

export default WelcomeMessage;
