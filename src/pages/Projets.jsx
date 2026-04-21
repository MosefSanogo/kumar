import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import "./Projets.css";

const Projets = () => {
  const projets = [
    {
      title: "Maison moderne F3",
      description: "Plan 2D + rendu 3D - Une maison familiale alliant modernité et fonctionnalité.",
      imageUrl: "https://via.placeholder.com/400x300?text=Maison+F3"
    },
    {
      title: "Villa contemporaine F5",
      description: "Design moderne avec étage - Villa spacieuse aux lignes épurées.",
      imageUrl: "https://via.placeholder.com/400x300?text=Villa+F5"
    },
    {
      title: "Projet personnel sur mesure",
      description: "Illustration de notre savoir-faire en conception architecturale et modélisation 3D.",
      imageUrl: "https://via.placeholder.com/400x300?text=Projet+Personnel"
    },
  ];

  return (
    <div>
      <Header />
      <section className="projets-page">
        <div className="container">
          <SectionTitle>Nos Réalisations</SectionTitle>
          <div className="projets-grid">
            {projets.map((projet, index) => (
              <ProjectCard
                key={index}
                title={projet.title}
                description={projet.description}
                imageUrl={projet.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projets;