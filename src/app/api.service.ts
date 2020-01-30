import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap, map } from 'rxjs/operators'
import { Produto } from 'src/model/produto'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

const apiUrl = 'http://localhost:5000/api/produto'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProdutos () : Observable<Produto[]> {
    return this.http.get<Produto[]>(apiUrl)
      .pipe(
        tap(produtos => console.log('leu os produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }

  getProduto(id: number): Observable<Produto> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Produto>(url).pipe(
      tap(_ => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError<Produto>(`getProduto id=${id}`))
    )
  }

  addProduto (produto) : Observable<Produto> {
    return this.http.post<Produto>(apiUrl, produto, httpOptions).pipe(
      tap((produto: Produto) => console.log(`adicionou o produto com w/ id=${produto._id}`)),
      catchError(this.handleError<Produto>('addProduto'))
    )
  }

  private handleError<T> (operation = 'operation', result ? : T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }
}