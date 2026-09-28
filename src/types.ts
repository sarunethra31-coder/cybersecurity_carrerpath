export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface SyllabusModule {
  title: string;
  duration: string;
  topics: string[];
  summary?: string;
  keyConcepts?: string[];
  commandSnippets?: { cmd: string; explanation: string }[];
  codeExample?: { language: string; title: string; code: string };
  aiPrompts?: string[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: Difficulty;
  duration: string;
  lessonsCount: number;
  studentsCount: number;
  rating: number;
  badge: string;
  skills: string[];
  syllabus: SyllabusModule[];
  progress?: number;
}

export interface Lab {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: Difficulty;
  estimatedTime: string;
  skillsLearned: string[];
  targetSystem: string;
  scenariosCount: number;
  points: number;
  initialTerminalState?: string[];
  steps?: { title: string; instruction: string; expectedCommand?: string; hint?: string }[];
}

export interface SecurityTool {
  id: string;
  name: string;
  category: string;
  iconName: string;
  description: string;
  longDescription: string;
  keyFeatures: string[];
  commonCommands: { cmd: string; usage: string }[];
  useCases: string[];
  officialDocUrl: string;
}

export interface ProjectCodeFile {
  filename: string;
  language: string;
  code: string;
  explanation: string;
}

export interface ProjectProcedureStep {
  stepTitle: string;
  description: string;
  commands?: string[];
  codeReference?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  technologies: string[];
  architectureOverview: string;
  keyFeatures: string[];
  githubUrl: string;
  demoUrl?: string;
  stepByStepGuide: { step: string; details: string }[];
  codeSnippets?: ProjectCodeFile[];
  procedureGuide?: ProjectProcedureStep[];
  aiPrompts?: string[];
}

export interface CTFChallenge {
  id: string;
  title: string;
  category: string;
  points: number;
  difficulty: Difficulty;
  solvesCount: number;
  description: string;
  flagFormat: string;
  flagAnswer: string;
  hints: string[];
  solved?: boolean;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  challengesSolved: number;
  country: string;
  badge: string;
}

export interface CareerPath {
  id: string;
  title: string;
  tagline: string;
  avgSalary: string;
  demandLevel: 'High' | 'Very High' | 'Critical';
  description: string;
  requiredSkills: string[];
  recommendedCourses: string[];
  recommendedProjects: string[];
  certifications: string[];
  roadmapSteps: { phase: string; title: string; description: string }[];
}

export interface CertificationPrep {
  id: string;
  name: string;
  code: string;
  vendor: string;
  description: string;
  difficulty: Difficulty;
  examDuration: string;
  passingScore: string;
  domains: { name: string; percentage: number }[];
  recommendedCourses: string[];
}

export interface UserProfile {
  name: string;
  handle: string;
  email: string;
  avatar: string;
  role: string;
  rank: number;
  ctfPoints: number;
  level: number;
  currentStreakDays: number;
  completedCoursesCount: number;
  completedLabsCount: number;
  completedProjectsCount: number;
  completedCTFsCount: number;
  completedLabIds?: string[];
  completedCTFIds?: string[];
  terminalUser?: string;
  badges: { id: string; name: string; icon: string; earnedDate: string; color: string }[];
  skillMatrix: { skill: string; value: number }[];
}

export interface RoadmapNode {
  id: string;
  name: string;
  category: string;
  icon: string;
  level: string;
  description: string;
  estimatedTime: string;
  skills: string[];
  topics: string[];
  courseId?: string;
  recommendedLabId?: string;
}

