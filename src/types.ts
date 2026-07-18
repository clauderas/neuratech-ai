export interface Expertise {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  techStack: string[];
  useCase: {
    problem: string;
    solution: string;
    impact: string;
  };
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}

export interface ApproachStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  details: string[];
}

export interface CaseStudy {
  id: string;
  clientName: string;
  clientIndustry: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}
