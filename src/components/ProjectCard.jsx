import "../styles/ProjectCard.css";

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="project-card">
      {imageUrl && (
        <div className="project-card-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;