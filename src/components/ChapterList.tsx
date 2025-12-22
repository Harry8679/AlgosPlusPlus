import { Link } from 'react-router-dom';
// import { chapters, algorithms } from '@/data';
// import { useAlgoStore } from '@/store/useAlgoStore';
import { ChevronRight } from 'lucide-react';
import { algorithms, chapters } from '../types';
import { useAlgoStore } from '../store/useAlgoStore';

interface ChapterListProps {
  showStats?: boolean;
}

export default function ChapterList({ showStats = true }: ChapterListProps) {
  const { getProgressByChapter } = useAlgoStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {chapters.map((chapter) => {
        const chapterAlgos = algorithms.filter(a => a.chapter === chapter.id);
        const progressPercent = getProgressByChapter(chapter.id, algorithms);
        
        return (
          <Link
            key={chapter.id}
            to={`/chapter/${chapter.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 group"
          >
            {/* Icône et titre */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-lg ${chapter.color} flex items-center justify-center text-2xl`}>
                  {chapter.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {chapterAlgos.length} algorithmes
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">
              {chapter.description}
            </p>

            {/* Barre de progression */}
            {showStats && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progression</span>
                  <span className="font-semibold text-primary-600">
                    {progressPercent}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${chapter.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}