
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
