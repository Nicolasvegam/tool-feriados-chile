'use client';

import { ParsedLaw } from '../utils/lawUtils';

interface LawReferencesProps {
  laws: ParsedLaw[];
}

export default function LawReferences({ laws }: LawReferencesProps) {
  return (
    <>
      {laws.map((law, index, array) => (
        <span key={index}>
          {law.url ? (
            <a 
              href={law.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {law.text}
            </a>
          ) : (
            <span>{law.text}</span>
          )}
          {index < array.length - 1 && ', '}
        </span>
      ))}
    </>
  );
}