/** Replace this adapter when NEXUS OS provides its authenticated settings API. */
export interface SettingsAdapter { load(userId?:string):Promise<Record<string,unknown>|null>; save(settings:Record<string,unknown>,userId?:string):Promise<void>; }
export const demoAdapter:SettingsAdapter={async load(){return null;},async save(){/* local demo persistence is handled by store.ts */}};
export function createNexusAdapter(api:SettingsAdapter){return api;}
