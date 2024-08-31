export interface Translate {
    data: Data;
}

export interface Data {
    translations: Translation[];
}

export interface Translation {
    translatedText:         string;
    detectedSourceLanguage: string;
}