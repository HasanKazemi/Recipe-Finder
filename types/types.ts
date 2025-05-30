export interface Recipes {
    id: number;
    image: string;
    title: string;
    summary: string;
}

export interface FilterProps {
    cuisine: string;
    setCuisine: React.Dispatch<React.SetStateAction<string>>;
    query: string | null;
}