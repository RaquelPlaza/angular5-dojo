export interface IPlan {
    name: string;
    description: string;
    starting: string;
    finishing: string;
    location: string;
    id: number;
}

export class Plan implements IPlan {
    name: string;
    description: string;
    starting: string;
    finishing: string;
    location: string;
    id: number;
}

