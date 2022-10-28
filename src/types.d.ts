

export type Responsable = {
    nom: string;
    facebook?: string;
    courriel?: string;
    image?: string;
}

export type Poste = {
    role?: string;
    responsables?: Responsable[];
    adjoints?: Responsable[];
    description: string;
}