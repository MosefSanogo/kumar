import "../styles/ProjectCard.css";

const ProjectCard = ({ title, imageUrl }) => {
  return (
    <div className="project-card">
      {imageUrl && (
        <div className="project-card-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;