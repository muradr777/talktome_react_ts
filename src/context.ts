import React from 'react';


// Langs

export const defaultData: string = '';

export type LangContextType = {
    lang: string;
    setLang: (dataType: string) => void;
} 

export const LangContext = React.createContext<LangContextType>({
    lang: defaultData, 
    setLang: (defaultData: string) => console.warn('No data provided!')
});


// Translations

export const defaultTranslation: any = [{}];

export type TranslationContextType = {
    translation: any;
    setTranslation: (dataType: any) => void;
} 

export const TranslationContext = React.createContext<TranslationContextType>({
    translation: defaultData, 
    setTranslation: (defaultData: any) => console.warn('No data provided!')});




