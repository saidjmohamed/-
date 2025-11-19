
export interface Baladiya {
  baladiya: string;
  mahkama_mokhtassa: string;
  adresse: string;
  telephone?: string;
  email?: string;
  site_web?: string;
}

export interface WilayaData {
  wilaya: string;
  code_wilaya: string;
  majlis_qadaa: string;
  baladiyat: Baladiya[];
  mahkama_idaria?: string;
  ikhtissas_idari?: string;
  mahkama_tidjaria?: string;
}

export interface Suggestion {
  baladiyaName: string;
  wilayaName: string;
  wilayaCode: string;
}

export type SearchResult = {
  wilaya: WilayaData;
  baladiya: Baladiya;
};

export interface DivisionCourt {
  name: string;
  municipalities: string[];
}

export interface DivisionCouncil {
  judicial_council: string;
  courts: DivisionCourt[];
}
