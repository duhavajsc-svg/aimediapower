
export interface RoadmapItem {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: string;
  isActive?: boolean;
  isSpecial?: boolean;
}

export interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
  lessons: number;
  weeks: number;
  features: string[];
  colorClass: string;
  buttonLabel: string;
  isHot?: boolean;
}

export interface Instructor {
  name: string;
  role: string;
  quote: string;
  image: string;
  gradient: string;
  specialty: string;
}
