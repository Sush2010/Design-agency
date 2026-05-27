function Portfolio() {
    
    const projects = [
  {
    id: 1,
    title: "Modern Website",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Creative Agency",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Business Landing Page",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Portfolio Design",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Startup Website",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "E-Commerce UI",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
];

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">Our Portfolio</h2>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;