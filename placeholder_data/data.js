const data = [
  {
    name: "Airflow",
    ring: "Adopt",
    quadrant: "Platforms",
    description:
      "Almost every team has used it or will use it in the future. A powerful platform for many use cases. Examples: Insights panels, Smart Tags, Audit API, Google merchant center, Splinter.",
  },
  {
    name: "Scala",
    ring: "Hold",
    quadrant: "Languages & frameworks",
    description: `Scala was introduced in Kenshoo back in 2014. It was chosen as an additional formal programming language in our stacks due to its popularity, expressiveness, immutable and functional nature, and other benefits. The onboarding included training and workshops, nurturing subject-matter experts, and eventually, some teams started developing new services and libraries with Scala.
        Since then, some things have changed: Scala’s popularity subsided, recruiting became harder, the Scala knowledge within the company decreased, and we see that Java, our main stack, is adopting many of Scala’s benefits.
        Unfortunately, this situation reduced our flexibility, increased the maintenance costs, and slowed our growth.
        We will stop developing new services and components with Scala. The owning teams of existing ones will continue to maintain those until their EOL or migrated. Whenever a team is required to add a significant investment to its Scala component, they should consider alternative implementations, such as a Java module, a separate service, using an AWS Lambda, etc.
        (Decision documentation: https://stackoverflow.com/c/kenshoo/articles/2267)`,
  },
  {
    name: "Monte Carlo",
    ring: "Asses",
    quadrant: "Tools",
    description: `Currently we don't have a tool for monitoring "data downtime" on our analytical data streams. We had a demo session with Monte Carlo a few months ago that seemed promising, but didn't follow through due to other priorities.`,
  },
  {
    name: "ML Platform",
    ring: "Trial",
    quadrant: "Platforms",
    description: `Yonatan:
      a platform to develop, deploy and manage models & ML pipelines and track experiments. Can include (but not limited to) a model registry, feature store, experiment tracking, versioning, feature engineering and serving.
      
      Liat:
      MLOPs is a new area for skai to explore. We currently have many gaps and we are looking for tools to use to fill these gaps
      
      Jolles (on MLflow):
      MLflow is an open source platform for managing e2e ML lifecycle. It's primary components allows for experiments tracking and comparison, deploying models from a variety of ML libraries, model registry and model serving. We're currently using it extensively for experiments tracking.`,
  },
  {
    name: "Data Mesh",
    ring: "Trial",
    quadrant: "Techniques",
    description: `Data Mesh is a concept that we are trying to adopt in Skai. But so far we are only scratching the surface of what needs to be done to fully utilize this concept towards becoming a more data driven organization.`,
  },
];

export default data;
