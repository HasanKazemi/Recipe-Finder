export interface Recipes {
    id: number;
    image: string;
    title: string;
    summary: string;
}

export interface FilterProps {
    label: string;
    values: string[];
    setState: React.Dispatch<React.SetStateAction<string>>;
}