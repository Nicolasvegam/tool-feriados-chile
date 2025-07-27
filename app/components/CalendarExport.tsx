'use client';

import { useState } from 'react';
import { Calendar, Download, Check, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Holiday } from '../data/holidays';
import { downloadICSFile } from '../utils/calendarExport';

interface CalendarExportProps {
  holidays: Holiday[];
  year: string;
}

export default function CalendarExport({ holidays, year }: CalendarExportProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    try {
      downloadICSFile(holidays, year);
      setExportSuccess(true);
      setTimeout(() => {
        setExportSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error exporting calendar:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-md p-4 mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-white">
          <Calendar className="w-5 h-5" />
          <span className="font-medium">
            Lleva todos los feriados {year} en tu calendario
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleExport}
            disabled={isExporting || exportSuccess}
            className={`
              inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all text-sm
              ${exportSuccess 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'bg-white text-purple-600 hover:bg-purple-50'
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {exportSuccess ? (
              <>
                <Check className="w-4 h-4" />
                ¡Descargado!
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                {isExporting ? 'Descargando...' : 'Descargar .ics'}
              </>
            )}
          </button>
          
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all text-sm"
            aria-expanded={showInstructions}
            aria-controls="export-instructions"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Ver instrucciones</span>
            <span className="sm:hidden">Ayuda</span>
            {showInstructions ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
      
      {showInstructions && (
        <div
          id="export-instructions"
          className="mt-4 pt-4 border-t border-white/20 animate-slideDown"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold text-white mb-3">
              Cómo importar el archivo .ics en tu calendario:
            </h4>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/10 rounded-lg p-3">
                <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-lg">📅</span> Google Calendar
                </h5>
                <ol className="text-white/90 space-y-1 text-xs">
                  <li>1. Abre Google Calendar</li>
                  <li>2. Click en Configuración ⚙️</li>
                  <li>3. Importar y exportar</li>
                  <li>4. Seleccionar archivo .ics</li>
                  <li>5. Click en Importar</li>
                </ol>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3">
                <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-lg">🍎</span> Apple Calendar
                </h5>
                <ol className="text-white/90 space-y-1 text-xs">
                  <li>1. Abre Calendar</li>
                  <li>2. Archivo → Importar</li>
                  <li>3. Selecciona el archivo</li>
                  <li>4. Elige calendario destino</li>
                  <li>5. Click en OK</li>
                </ol>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3">
                <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-lg">📧</span> Outlook
                </h5>
                <ol className="text-white/90 space-y-1 text-xs">
                  <li>1. Abre Outlook</li>
                  <li>2. Archivo → Abrir y exportar</li>
                  <li>3. Importar/Exportar</li>
                  <li>4. Importar archivo .ics</li>
                  <li>5. Seleccionar calendario</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}