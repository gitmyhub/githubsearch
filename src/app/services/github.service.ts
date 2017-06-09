import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = "968ea34ea4f82989be45";
    private client_secret = "5d3d7981dd4146968f425d69f4f1dce5e97ac271";

    constructor(private _http:Http){
        console.log("GithubService is Ready....");
        this.username = "brad";
    }

    updateUser(username:string){
        this.username = username;
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+"?client_id="+this.client_id+"&client_secret="+this.client_secret)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+"/repos?client_id="+this.client_id+"&client_secret="+this.client_secret)
        .map(res => res.json());
    }    
}