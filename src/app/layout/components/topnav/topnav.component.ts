import { JwtTokenService } from './../../token/jwt-token.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
    public pushRightClass: string;
    loggedInUserName = this.jwtService.userName;

    constructor(public router: Router, private translate: TranslateService, private jwtService: JwtTokenService) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.jwtService.hasAccessToAdd = false;
        this.jwtService.hasAccessToEdit = false;
        this.jwtService.hasAccessToDelete = false;
        this.jwtService.hasAccessToView = false;
        this.jwtService.userName = '';
        this.jwtService.accessToken = '';
        this.jwtService.refreshToken = '';
        this.router.navigate(['/login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
