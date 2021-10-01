import { FormControl } from "@angular/forms";
import { Game } from "./game-entity";

export interface GameExperience{
    id?: number,
    gameId: number,
    experienceLevel: number,
    usuarioId: number
}

export interface UserGame {
    id: number,
    experienceLevel: number,
    game: Game,
    editMode: boolean,
    experienceFormController: FormControl
}

export interface UserCompetencia {
    nombre: string,
    date: string,
    puesto: string
}

export interface Competencia {
    id: number,
    nombre: string,
    date: string,
    puesto: string,
    editMode: boolean,
    nombreFormController: FormControl,
    puestoFormController: FormControl
}

export interface User {
    id: Number,
    username: string,
    email: string,
    "game-experiences": GameExperience[],
    competencias: Competencia[]
}