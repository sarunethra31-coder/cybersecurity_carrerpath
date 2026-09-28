import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Users, Star, ArrowRight, CheckCircle, Shield, Sparkles } from 'lucide-react';
import { COURSES } from '../data/cyberData';
import { Course } from '../types';
import { CourseDetailModal } from './CourseDetailModal';

interface CoursesSectionProps {
  onNavigate?: (route: string) => void;
  showTitle?: boolean;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onNavigate, showTitle = true }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeCoursesState, setActiveCoursesState] = useState<Course[]>(COURSES);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const CATEGORIES = [
    'All',
    'Cybersecurity Fundamentals',
    'Networking',
    'Linux Security',
    'Python for Cybersecurity',
    'Ethical Hacking',
    'Web Application Security',
    'Penetration Testing',
    'SOC Analyst',
    'Digital Forensics',
    'Malware Analysis',
    'Cloud Security'
  ];

  const DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = activeCoursesState.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleStartCourse = (courseId: string) => {
    setActiveCoursesState(prev => prev.map(c => {
      if (c.id === courseId) {
        return { ...c, progress: c.progress && c.progress > 0 ? c.progress : 15 };
      }
      return c;
    }));

    const foundCourse = activeCoursesState.find(c => c.id === courseId);
    const courseTitle = foundCourse ? foundCourse.title : 'Selected Course';

    setToastMessage(`🚀 Enrolled in "${courseTitle}"! Launching Sandboxed Lab environment...`);
    
    setTimeout(() => {
      setToastMessage(null);
      if (onNavigate) {
        onNavigate('/labs');
      }
    }, 1800);
  };

  return (
    <section className="py-16 relative border-b border-cyan-500/10">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl bg-cyan-950/90 border border-cyan-400 text-cyan-200 text-sm font-bold shadow-[0_0_30px_rgba(0,240,255,0.5)] flex items-center space-x-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <span>EXPLORE CURRICULUM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cybersecurity <span className="text-gradient-cyan">Course Catalog</span>
            </h2>
            <p className="text-slate-300 text-base mt-3">
              Comprehensive courses covering fundamental protocols, ethical hacking techniques, SOC operations, and digital forensics.
            </p>
          </div>
        )}

        {/* Filter Controls Bar */}
        <div className="bg-slate-950/80 p-4 rounded-2xl border border-cyan-500/20 mb-8 space-y-4 shadow-lg">
          
          {/* Top row: Search input & Difficulty tabs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses by title, skill, or topic..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 text-sm font-sans"
              />
            </div>

            {/* Difficulty Tabs */}
            <div className="md:col-span-6 flex items-center justify-start md:justify-end space-x-2">
              <span className="text-xs font-mono text-slate-400 mr-1 flex items-center">
                <Filter className="w-3.5 h-3.5 mr-1 text-cyan-400" /> Level:
              </span>
              {DIFFICULTIES.map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    selectedDifficulty === diff
                      ? 'bg-cyan-950 border border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>

          </div>

          {/* Category Filter Badges Scroll */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-left">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="group relative rounded-xl p-6 glass-panel-interactive border border-slate-800 hover:border-cyan-500/40 cursor-pointer flex flex-col justify-between text-left"
              >
                <div>
                  {/* Category Pill & Difficulty */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-cyan-950/70 border border-cyan-500/30 text-cyan-400">
                      {course.category}
                    </span>
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                      course.difficulty === 'Beginner' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' :
                      course.difficulty === 'Intermediate' ? 'bg-blue-950 text-blue-400 border border-blue-500/30' :
                      'bg-purple-950 text-purple-400 border border-purple-500/30'
                    }`}>
                      {course.difficulty}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition line-clamp-2 mb-2">
                    {course.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.skills.slice(0, 3).map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer stats */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center"><Clock className="w-3.5 h-3.5 text-cyan-400 mr-1" /> {course.duration}</span>
                    <span className="flex items-center"><BookOpen className="w-3.5 h-3.5 text-blue-400 mr-1" /> {course.lessonsCount} lessons</span>
                    <span className="flex items-center text-amber-400"><Star className="w-3.5 h-3.5 fill-amber-400 mr-1" /> {course.rating}</span>
                  </div>

                  {/* Progress bar if enrolled */}
                  {course.progress !== undefined && course.progress > 0 && (
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-1">
                        <span>Course Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                        <div className="bg-cyan-400 h-full" style={{ width: `${course.progress}%` }} />
                      </div>
                    </div>
                  )}

                  <div className="pt-1 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-cyan-400 transition">
                    <span>View Syllabus & Start</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-xl bg-slate-900/40 border border-slate-800">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-300">No courses match your filter</h3>
            <p className="text-xs text-slate-400 mt-1">Try resetting search keywords or category filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedDifficulty('All'); }}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-mono bg-cyan-950 border border-cyan-500/40 text-cyan-300 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Selected Course Detail Modal */}
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onStartCourse={handleStartCourse}
        />

      </div>
    </section>
  );
};
