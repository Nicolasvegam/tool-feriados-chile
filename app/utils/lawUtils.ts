interface LawInfo {
  number: string;
  year?: string;
  url?: string;
}

const lawMapping: Record<string, LawInfo> = {
  "2.977": { number: "2977", year: "1915", url: "https://www.bcn.cl/leychile/navegar?idNorma=22322" },
  "2977": { number: "2977", year: "1915", url: "https://www.bcn.cl/leychile/navegar?idNorma=22322" },
  "19.973": { number: "19973", year: "2004", url: "https://www.bcn.cl/leychile/navegar?idNorma=230132" },
  "19973": { number: "19973", year: "2004", url: "https://www.bcn.cl/leychile/navegar?idNorma=230132" },
  "18.432": { number: "18432", year: "1985", url: "https://www.bcn.cl/leychile/navegar?idNorma=29824" },
  "18432": { number: "18432", year: "1985", url: "https://www.bcn.cl/leychile/navegar?idNorma=29824" },
  "19.668": { number: "19668", year: "2000", url: "https://www.bcn.cl/leychile/navegar?idNorma=160270" },
  "19668": { number: "19668", year: "2000", url: "https://www.bcn.cl/leychile/navegar?idNorma=160270" },
  "20.148": { number: "20148", year: "2007", url: "https://www.bcn.cl/leychile/navegar?idNorma=256642" },
  "20148": { number: "20148", year: "2007", url: "https://www.bcn.cl/leychile/navegar?idNorma=256642" },
  "21.357": { number: "21357", year: "2021", url: "https://www.bcn.cl/leychile/navegar?idNorma=1161966" },
  "21357": { number: "21357", year: "2021", url: "https://www.bcn.cl/leychile/navegar?idNorma=1161966" },
  "20.299": { number: "20299", year: "2008", url: "https://www.bcn.cl/leychile/navegar?idNorma=281194" },
  "20299": { number: "20299", year: "2008", url: "https://www.bcn.cl/leychile/navegar?idNorma=281194" },
  "3.810": { number: "3810", year: "1921", url: "https://www.bcn.cl/leychile/navegar?idNorma=24006" },
  "3810": { number: "3810", year: "1921", url: "https://www.bcn.cl/leychile/navegar?idNorma=24006" },
  "18.700": { number: "18700", year: "1988", url: "https://www.bcn.cl/leychile/navegar?idNorma=30082" },
  "18700": { number: "18700", year: "1988", url: "https://www.bcn.cl/leychile/navegar?idNorma=30082" },
  "20.640": { number: "20640", year: "2012", url: "https://www.bcn.cl/leychile/navegar?idNorma=1046419" },
  "20640": { number: "20640", year: "2012", url: "https://www.bcn.cl/leychile/navegar?idNorma=1046419" },
  "20.515": { number: "20515", year: "2011", url: "https://www.bcn.cl/leychile/navegar?idNorma=1027546" },
  "20515": { number: "20515", year: "2011", url: "https://www.bcn.cl/leychile/navegar?idNorma=1027546" },
  "21.073": { number: "21073", year: "2018", url: "https://www.bcn.cl/leychile/navegar?idNorma=1114547" },
  "21073": { number: "21073", year: "2018", url: "https://www.bcn.cl/leychile/navegar?idNorma=1114547" },
  "20.629": { number: "20629", year: "2012", url: "https://www.bcn.cl/leychile/navegar?idNorma=1044482" },
  "20629": { number: "20629", year: "2012", url: "https://www.bcn.cl/leychile/navegar?idNorma=1044482" },
  "20.663": { number: "20663", year: "2013", url: "https://www.bcn.cl/leychile/navegar?idNorma=1051638" },
  "20663": { number: "20663", year: "2013", url: "https://www.bcn.cl/leychile/navegar?idNorma=1051638" },
};

export interface ParsedLaw {
  text: string;
  number: string;
  url?: string;
}

export function parseLawReferences(lawString: string | undefined): ParsedLaw[] {
  if (!lawString) return [];
  
  const laws: ParsedLaw[] = [];
  const parts = lawString.split(',');
  
  parts.forEach(part => {
    const trimmed = part.trim();
    
    // Match patterns like "Ley 19.973", "Ley N° 19.973", "Ley 19973"
    const lawMatch = trimmed.match(/Ley\s+(?:N[°º]\s+)?(\d+\.?\d*)/i);
    
    if (lawMatch) {
      const lawNumber = lawMatch[1].replace('.', '');
      const lawInfo = lawMapping[lawMatch[1]] || lawMapping[lawNumber];
      
      laws.push({
        text: trimmed,
        number: lawMatch[1],
        url: lawInfo?.url
      });
    } else {
      // Handle cases like "Código del Trabajo"
      laws.push({
        text: trimmed,
        number: trimmed,
        url: trimmed === "Código del Trabajo" ? "https://www.bcn.cl/leychile/navegar?idNorma=207436" : undefined
      });
    }
  });
  
  return laws;
}

export function getLawIdFromNumber(lawNumber: string): string {
  const normalized = lawNumber.replace(/[^\d]/g, '');
  return `ley-${normalized}`;
}