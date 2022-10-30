import "./AboutProjectList.css";

function AboutProjectList({ title, text }) {
  return (
    <article className="about-project-list">
      <h3 className="about-project-list__title">{title}</h3>
      <p className="about-project-list__text">{text}</p>
    </article>
  );
}

export default AboutProjectList;
