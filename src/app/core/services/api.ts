import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import {API_BASE_URL} from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})

export class Api {
    private readonly baseUrl: string = API_BASE_URL;

    constructor(private readonly http: HttpClient) {}
}
