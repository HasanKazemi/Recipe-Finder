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

export interface PaginationProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
}