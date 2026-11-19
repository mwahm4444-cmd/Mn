import {defaultSettings} from '../data/defaults';
const KEY='nexus-control-center:v1';
export function loadSettings(){try{const raw=localStorage.getItem(KEY);return raw?{...structuredClone(defaultSettings),...JSON.parse(raw)}:structuredClone(defaultSettings)}catch{return structuredClone(defaultSettings)}}
export function saveSettings(value:Record<string,any>){localStorage.setItem(KEY,JSON.stringify(value))}
export function resetSettings(){localStorage.removeItem(KEY);return structuredClone(defaultSettings)}
export function exportSettings(value:Record<string,any>){return new Blob([JSON.stringify(value,null,2)],{type:'application/json'})}
