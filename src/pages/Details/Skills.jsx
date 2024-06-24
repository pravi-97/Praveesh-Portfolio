import "./style/Skills.css";

const Skills = () => {
  const skillArr = [
    { skill: "Java", range: 80 },
    { skill: "Html", range: 80 },
    { skill: "CSS", range: 75 },
    { skill: "Javascript", range: 75 },
    { skill: "NodeJS", range: 60 },
    { skill: "React", range: 60 },
    { skill: "MySql", range: 60 },
    { skill: "AWS", range: 50 },
    { skill: "Sql Lite", range: 50 },
    { skill: "MongoDB", range: 50 },
  ];

  return (
    <>
      <div id="skills-section">
        <h1>Skills</h1>
        <div className="container-fluid">
          <div className="row">
            <table>
              <thead></thead>
              <tbody>
                {skillArr.map((skill, index) => (
                  <tr key={index}>
                    <td className="skill_name">{skill.skill}</td>
                    <td className="skill_knowledge">
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label={skill.skill}
                        aria-valuenow={skill.range}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar"
                          style={{ width: `${skill.range}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
