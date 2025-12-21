import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface VisualizerProps {
  type: 'stack' | 'queue' | 'tree' | 'graph' | 'array';
  data?: any[];
}

// Composant pour visualiser les structures de données (version basique)
export default function Visualizer({ type, data = [] }: VisualizerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [visualData, setVisualData] = useState<any[]>(data);

  useEffect(() => {
    setVisualData(data);
  }, [data]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    setVisualData(data);
  };

  // Rendu pour une pile (Stack)
  const renderStack = () => {
    return (
      <div className="flex flex-col-reverse items-center space-y-reverse space-y-2">
        {visualData.map((item, index) => (
          <div
            key={index}
            className="w-32 h-12 bg-primary-500 text-white flex items-center justify-center rounded border-2 border-primary-600 font-semibold"
          >
            {item}
          </div>
        ))}
        <div className="text-sm text-gray-500 mt-2">↑ Top (Sommet)</div>
      </div>
    );
  };

  // Rendu pour une file (Queue)
  const renderQueue = () => {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">← Front</span>
          {visualData.map((item, index) => (
            <div
              key={index}
              className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded border-2 border-green-600 font-semibold"
            >
              {item}
            </div>
          ))}
          <span className="text-sm text-gray-500">Rear →</span>
        </div>
      </div>
    );
  };

  // Rendu pour un tableau
  const renderArray = () => {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-1">
          {visualData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-500 text-white flex items-center justify-center border border-blue-600 font-semibold">
                {item}
              </div>
              <div className="text-xs text-gray-500 mt-1">[{index}]</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Rendu pour un arbre (Tree) - version simplifiée
  const renderTree = () => {
    return (
      <div className="flex flex-col items-center space-y-8">
        <div className="text-sm text-gray-500">Visualisation d'arbre (à venir)</div>
        <div className="w-16 h-16 bg-purple-500 text-white flex items-center justify-center rounded-full border-2 border-purple-600 font-semibold">
          Root
        </div>
      </div>
    );
  };

  // Rendu pour un graphe - version simplifiée
  const renderGraph = () => {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="text-sm text-gray-500">Visualisation de graphe (à venir)</div>
      </div>
    );
  };

  const renderVisualization = () => {
    switch (type) {
      case 'stack':
        return renderStack();
      case 'queue':
        return renderQueue();
      case 'array':
        return renderArray();
      case 'tree':
        return renderTree();
      case 'graph':
        return renderGraph();
      default:
        return <div>Type de visualisation non supporté</div>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Visualisation</h2>
        
        {/* Contrôles */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePlay}
            className="p-2 bg-primary-500 hover:bg-primary-600 text-white rounded transition-colors"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          
          <button
            onClick={handleReset}
            className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Zone de visualisation */}
      <div className="min-h-[300px] flex items-center justify-center bg-gray-50 rounded-lg p-8">
        {visualData.length > 0 ? (
          renderVisualization()
        ) : (
          <div className="text-gray-400">Aucune donnée à visualiser</div>
        )}
      </div>

      {/* Légende */}
      <div className="mt-4 text-sm text-gray-600 text-center">
        Étape {currentStep} / {visualData.length}
      </div>
    </div>
  );
}

// Hook pour utiliser le visualizer avec des animations
export function useVisualizer(initialData: any[] = []) {
  const [data, setData] = useState(initialData);
  const [history, setHistory] = useState<any[][]>([initialData]);
  const [currentStep, setCurrentStep] = useState(0);

  const push = (item: any) => {
    const newData = [...data, item];
    setData(newData);
    setHistory([...history, newData]);
    setCurrentStep(currentStep + 1);
  };

  const pop = () => {
    if (data.length === 0) return null;
    const newData = data.slice(0, -1);
    setData(newData);
    setHistory([...history, newData]);
    setCurrentStep(currentStep + 1);
    return data[data.length - 1];
  };

  const enqueue = (item: any) => {
    const newData = [...data, item];
    setData(newData);
    setHistory([...history, newData]);
    setCurrentStep(currentStep + 1);
  };

  const dequeue = () => {
    if (data.length === 0) return null;
    const newData = data.slice(1);
    setData(newData);
    setHistory([...history, newData]);
    setCurrentStep(currentStep + 1);
    return data[0];
  };

  const reset = () => {
    setData(initialData);
    setHistory([initialData]);
    setCurrentStep(0);
  };

  return {
    data,
    history,
    currentStep,
    push,
    pop,
    enqueue,
    dequeue,
    reset,
  };
}