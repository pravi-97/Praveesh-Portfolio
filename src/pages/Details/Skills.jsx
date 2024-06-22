import "./style/Skills.css";
const Skills = () => {
  return (
    <>
      <div id="skills-section">
        <div className="container-fluid">
          <div className="row">
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td className="skill_name">HTML</td>
                  <td className="skill_knowledge">
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
