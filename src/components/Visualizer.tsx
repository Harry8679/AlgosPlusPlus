import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export interface VisualizerProps<T> {
  type: 'stack' | 'queue' | 'tree' | 'graph' | 'array';
  data?: T[];
}

export default function Visualizer<T>({ type, data = [] }: VisualizerProps<T>) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [visualData, setVisualData] = useState<T[]>(data);

  useEffect(() => {
    setVisualData(data);
  }, [data]);

  const handlePlay = () => setIsPlaying((prev) => !prev);

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    setVisualData(data);
  };

  // ---- Rendus ----

  const renderStack = () => (
    <div className="flex flex-col-reverse items-center space-y-reverse space-y-2">
      {visualData.map((item, index) => (
        <div
          key={index}
          className="w-32 h-12 bg-primary-500 text-white flex items-center justify-center rounded border-2 border-primary-600 font-semibold"
        >
          {String(item)}
        </div>
      ))}
      <div className="text-sm text-gray-500 mt-2">↑ Top (Sommet)</div>
    </div>
  );

  const renderQueue = () => (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">← Front</span>
        {visualData.map((item, index) => (
          <div
            key={index}
            className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded border-2 border-green-600 font-semibold"
          >
            {String(item)}
          </div>
        ))}
        <span className="text-sm text-gray-500">Rear →</span>
      </div>
    </div>
  );

  const renderArray = () => (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-1">
        {visualData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-14 h-14 bg-blue-500 text-white flex items-center justify-center border border-blue-600 font-semibold">
              {String(item)}
            </div>
            <div className="text-xs text-gray-500 mt-1">[{index}]</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderVisualization = () => {
    switch (type) {
      case 'stack':
        return renderStack();
      case 'queue':
        return renderQueue();
      case 'array':
        return renderArray();
      case 'tree':
        return <div>Tree visualisation à venir</div>;
      case 'graph':
        return <div>Graph visualisation à venir</div>;
      default:
        return <div>Type inconnu</div>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Visualisation</h2>

        <div className="flex items-center space-x-2">
          <button
            onClick={handlePlay}
            className="p-2 bg-primary-500 hover:bg-primary-600 text-white rounded transition-colors"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <button
            onClick={handleReset}
            className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded transition-colors"
          >
            <RotateCcw />
          </button>
        </div>
      </div>

      <div className="min-h-[300px] flex items-center justify-center bg-gray-50 rounded-lg p-8">
        {visualData.length > 0 ? renderVisualization() : <div className="text-gray-400">Aucune donnée</div>}
      </div>

      <div className="mt-4 text-sm text-gray-600 text-center">
        Étape {currentStep} / {visualData.length}
      </div>
    </div>
  );
}
