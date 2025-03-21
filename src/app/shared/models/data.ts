export interface Data {
    ComingSoonBanner?: string;
    ComingSoonTitle?: string;
    Categories?: Categories[];
    Cinemas?: Cinemas[];
}

export interface Categories {
    CategoryName?: string;
    CategoryID?: number;
    Films?: Film[];
}

export interface Film  {
    FilmID?: number;
    FilmImage?: string;
    FilmName?: string;
    Tags?: string[];
    HasTicketsAvail?: boolean;
    FilmDuration?: string;
    FilmDescription?: string;
}

export interface Cinemas {
    CinemaID?: number;
    CinemaImage?: string;
    CinemaName?: string;
    CinemaRating?: string;
    TicketsAvailable?: number;
    CinemaHalls?: number;
}