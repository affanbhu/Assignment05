import { useState } from "react";
import "./TechnologySection.css";

type Technology = {
  id: number;
  name: string;
  description: string;
  category: string;
  level: string;
  rating: number;
  badge: string;
  icon: string;
};

const technologies: Technology[] = [
  {
    id: 1,
    name: "React",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Popular",
    icon: "⚛",
  },
  {
    id: 2,
    name: "Vue.js",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
    badge: "Versatile",
    icon: "V",
  },
  {
    id: 3,
    name: "Svelte",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Fast",
    icon: "S",
  },
  {
    id: 4,
    name: "Next.js",
    description:
      "The React framework for full-stack web applications with hybrid static & server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
    badge: "SSR / Edge",
    icon: "N",
  },
  {
    id: 5,
    name: "Node.js",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Standard",
    icon: "JS",
  },
  {
    id: 6,
    name: "PostgreSQL",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
    badge: "Top SQL",
    icon: "PG",
  },
];

function TechnologySection() {
  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (!alreadyAdded) {
      setStack([...stack, technology]);
    }
  };

  const removeFromStack = (id: number) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setStack([]);
  };

  return (
    <section className="technology-section">
      <div className="technology-container">

        {/* Heading */}
        <div className="technology-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Content */}
        <div className="technology-layout">

          {/* Technology Cards */}
          <div className="technology-grid">
            {technologies.map((technology) => {
              const isSelected = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div className="technology-card" key={technology.id}>

                  <div className="card-top">
                    <div className={`tech-icon icon-${technology.id}`}>
                      {technology.icon}
                    </div>

                    <span className="tech-badge">
                      {technology.badge}
                    </span>
                  </div>

                  <h3>{technology.name}</h3>

                  <p className="tech-description">
                    {technology.description}
                  </p>

                  <div className="tech-info">
                    <span>{technology.category}</span>
                    <span>{technology.level}</span>
                    <span className="rating">
                      ★ {technology.rating}
                    </span>
                  </div>

                  <button
                    className={`add-button ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() => addToStack(technology)}
                    disabled={isSelected}
                  >
                    {isSelected ? "Added to Stack" : "Add to Stack"}
                  </button>

                </div>
              );
            })}
          </div>

          {/* Your Stack */}
          <aside className="stack-panel">

            <h3>Your Stack</h3>

            <p className="stack-count">
              {stack.length} Technology{stack.length !== 1 ? "s" : ""} Selected
            </p>

            <div className="selected-stack">

              {stack.length === 0 ? (
                <div className="empty-stack">
                  <span>+</span>
                  <p>Add technologies to build your stack</p>
                </div>
              ) : (
                stack.map((technology) => (
                  <div className="selected-item" key={technology.id}>

                    <div className={`small-icon icon-${technology.id}`}>
                      {technology.icon}
                    </div>

                    <div>
                      <strong>{technology.name}</strong>
                      <small>{technology.category}</small>
                    </div>

                    <button
                      className="remove-button"
                      onClick={() => removeFromStack(technology.id)}
                    >
                      ×
                    </button>

                  </div>
                ))
              )}

            </div>

            <button
              className="remove-all"
              onClick={removeAll}
              disabled={stack.length === 0}
            >
              Remove All
            </button>

          </aside>

        </div>
      </div>
    </section>
  );
}

export default TechnologySection;