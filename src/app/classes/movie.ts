export class Movie {
    id: string;
    title: string;
    description: string;
    year: number;
    img: string;
    actors: string[];
    director: string;
    rating: number;
    liked?: boolean;

    constructor(value: any = {}) {
        Object.assign(this, {
            id: value.id || null,
            title: value.title || null,
            description: value.description || null,
            year: value.year || null,
            img: value.img || null,
            actors: value.actors || [],
            director: value.director,
            rating: value.rating || null,
            liked: value.liked || false
        })
    }
}