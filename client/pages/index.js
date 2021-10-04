import CardAlt from "../components/CardAlt";
import Nav from "../components/Nav";
import PostCard from "../components/PostCard";
import Showcase from "../components/Showcase";
import ShowcaseCard from "../components/ShowcaseCard";
const Home = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Showcase />
        <div className="card-row">
          <PostCard url="https://www.cloudways.com/blog/wp-content/uploads/How-to-Convert-HTML-Website-into-WordPress-Business-Theme.jpg" />
          <PostCard url="https://media.onlinecoursebay.com/2019/03/29124858/673420_5279_3-750x405.jpg" />
          <PostCard url="https://i.pinimg.com/736x/d0/25/0b/d0250b7b3bef2042996d08448a5329ad.jpg" />
        </div>
        <div className="card-row">
          <PostCard url="https://www.cloudways.com/blog/wp-content/uploads/How-to-Convert-HTML-Website-into-WordPress-Business-Theme.jpg" />
          <PostCard url="https://media.onlinecoursebay.com/2019/03/29124858/673420_5279_3-750x405.jpg" />
          <PostCard url="https://i.pinimg.com/736x/d0/25/0b/d0250b7b3bef2042996d08448a5329ad.jpg" />
        </div>
        <div className="alt-card-row">
          <div className="test-class">
            <ShowcaseCard
              height="30rem"
              style={{ width: "100%" }}
              url="https://miro.medium.com/max/6000/0*XLVH4uGdJCyEkXz1"
            />
          </div>
          <div className="alt-card-column">
            <CardAlt url="https://i.redd.it/fv7nrd8g3vm01.jpg" height="6rem" />{" "}
            <CardAlt url="https://i.redd.it/fv7nrd8g3vm01.jpg" height="6rem" />{" "}
            <CardAlt url="https://i.redd.it/fv7nrd8g3vm01.jpg" height="6rem" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
