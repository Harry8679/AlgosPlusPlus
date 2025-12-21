import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeEditorProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export default function CodeEditor({ 
  code, 
  language = 'javascript',
  title = 'Implémentation',
  showLineNumbers = true 
}: CodeEditorProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Erreur lors de la copie:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      {/* En-tête */}
      <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-400 capitalize">{language}</span>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors text-sm"
            title="Copier le code"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copié !</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copier</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          backgroundColor: '#1e1e1e',
        }}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        lineNumberStyle={{
          minWidth: '3em',
          paddingRight: '1em',
          color: '#858585',
          userSelect: 'none',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}