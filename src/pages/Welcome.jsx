import "./styles/Welcome.css";
import praveesh from "../assets/images/praveesh.jpg";

const Welcome = () => {
  return (
    <section id="welcome-section">
      {/* <img src={praveesh} alt="Praveesh Image" /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, debitis neque. Nesciunt aut laborum eligendi laboriosam porro in sunt ut voluptates, et quidem iste, ipsa corrupti placeat quos quo neque saepe, delectus repellat. Odit eveniet sequi temporibus magnam et placeat commodi omnis natus, ab, quis qui nobis aspernatur tempora asperiores.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, doloribus repudiandae rerum placeat velit sit illo blanditiis quam enim assumenda, ea sequi autem aliquid rem!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam impedit praesentium facere labore eveniet accusamus minus, minima sequi, repellendus deleniti dolores voluptatem doloribus optio sit iure sunt, quas error. Fugit enim impedit sed dolore non voluptatibus maiores ipsam aspernatur facilis ex adipisci aut, obcaecati tempore officiis atque nesciunt libero ut explicabo debitis tempora! Asperiores totam laborum similique sapiente! Omnis ipsam doloribus ab aperiam iusto, quos minima autem expedita dignissimos! Tempore provident, impedit ut, voluptatem temporibus placeat doloremque dolore, rem molestiae tenetur maiores voluptate unde non error deserunt voluptates tempora! Modi?</p>
          </div>
          <div className="col-md-6">
          <img id="praveesh-image" src={praveesh} alt="Praveesh Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
